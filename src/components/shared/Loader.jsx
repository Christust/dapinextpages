import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "@/components/loader/Loading";
import store from "@/store";

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
    <div>
      {children}
      {loader > 0 && <Loader />}
    </div>
  );
}
