import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "@/components/loader/Loading";
import store from "@/store";

export default function LoaderLayout({ children }) {
  const loader = useSelector((state) => state.loader.count);
  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      if (state) {
        localStorage.setItem("state", JSON.stringify(state));
      }
    });
  }, []);
  return (
    <div>
      {children}
      {loader > 0 && <Loader />}
    </div>
  );
}
