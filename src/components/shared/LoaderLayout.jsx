import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import store from "@/store";

const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border loader" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="modal-backdrop best_zind"></div>
      </div>
    </>
  );
};

export default function LoaderLayout({ children }) {
  const loader = useSelector((state) => state.loader.count);
  const user = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      if (state) {
        localStorage.setItem("state", JSON.stringify(state));
      }
    });
    if (!user.profile) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      {children}
      {loader > 0 && <Loader />}
    </>
  );
}
