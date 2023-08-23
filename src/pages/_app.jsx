import "bootstrap/dist/css/bootstrap.css";
import "@/styles/index.scss";
import ReduxProvider from "@/store/provider";


export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
