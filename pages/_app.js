// import Layout from "../src/components/Layout";
import FullLayout from "../src/layouts/FullLayout";
// import "../styles/globals.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <FullLayout>
      <Component {...pageProps} />
    </FullLayout>
  );
}

export default MyApp;
