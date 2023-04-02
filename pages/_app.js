import "@/styles/modern-normalize.css";
import "@/styles/utils.css";
import "@/styles/globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Contact/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
