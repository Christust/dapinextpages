import "bootstrap/dist/css/bootstrap.css";
import "@/styles/index.scss";
import ReduxProvider from "@/store/provider";
import LoaderLayout from "@/components/shared/Loader";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <LoaderLayout>
        <Component {...pageProps} />
      </LoaderLayout>
    </ReduxProvider>
  );
}
