import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import global css
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
