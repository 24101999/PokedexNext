import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Main from "../components/Main";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Main>
        <Component {...pageProps} />;
      </Main>
    </>
  );
}
