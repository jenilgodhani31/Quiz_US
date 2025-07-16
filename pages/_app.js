// pages/_app.js
import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScoreProvider } from "../context/ScoreContext"; // ⬅️ import context

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <ScoreProvider> {/* ⬅️ wrap the app here */}
        <div className="bg-primary1 ls:w-[360px] flex flex-col mx-auto">
          <GA4Initializer />
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick={false}
            rtl={false}
            draggable={false}
            pauseOnHover
            theme="light"
          />
        </div>
      </ScoreProvider>
    </Fragment>
  );
}
