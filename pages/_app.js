import { useState, useEffect } from 'react';
import "@/styles/modern-normalize.css";
import "@/styles/utils.css";
import "@/styles/globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Contact/Footer";
import {DNA} from 'react-loader-spinner';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader-overlay">
          <div className="preloader">
          <DNA
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{    }}
              wrapperClass="dna-wrapper"
  />
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
