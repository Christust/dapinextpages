import axios from "axios";
import swal from "sweetalert";
import store from "../../store";
import { setLoaderCount } from "../../store/reducers/loader/loaderSlice";
import { setToken, setRefreshToken } from "@/store/reducers/user/userSlice";
import authService from "../factories/authService";

const instance = axios.create({
  baseURL: "https://daapi-53223c26c4dc.herokuapp.com/",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = store.getState().user.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  store.dispatch(setLoaderCount(+1));
  return config;
});

instance.interceptors.response.use(
  (res) => {
    store.dispatch(setLoaderCount(-1));
    return res;
  },
  (error) => {
    store.dispatch(setLoaderCount(-1));
    const refreshToken = store.getState().user.refreshToken;
    const payload = { refresh: refreshToken };
    console.log(payload);
    console.log(error);
    if (error.response?.data?.code == "token_not_valid") {
      authService.refreshToken(payload).then((res) => {
        console.log(res);
        store.dispatch(setToken(res.data.access));
        store.dispatch(setRefreshToken(res.data.refresh));
        window.location.reload(true);
      });
      swal({
        text: "Token no valido",
        icon: "error",
      });
      // localStorage.removeItem("state");
    } else {
      swal({
        text: "Error!",
        icon: "error",
      });
    }
    return error;
  }
);

export default instance;
