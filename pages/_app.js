import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { DAppProvider } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <DAppProvider config={{}}>
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
      </DAppProvider>
    </>
  );
}

export default MyApp;
