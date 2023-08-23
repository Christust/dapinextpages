import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "@/components/Loading";
import store from "@/store";

function Template({ children }) {
  const loader = useSelector((state) => state.loader.count);
  const token = useSelector((state) => state.user.token);
  const router = useRouter();

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      if (state) {
        localStorage.setItem("state", JSON.stringify(state));
      }
    });
    if (!token) router.push("/login");
  }, []);
  return (
    <div>
      SKLAJDHAKLJSDHKJASHDJKASHDJK
      {children}
      {loader > 0 && <Loader />}
      {loader > 0 && <h1>Hola</h1>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <Template>
          <div>DAPI</div>
        </Template>
      </main>
    </>
  );
}
