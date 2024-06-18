import { useState, useEffect } from 'react';
import "@/styles/modern-normalize.css";
import "@/styles/utils.css";
import "@/styles/globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Contact/Footer";
import { FallingLines} from 'react-loader-spinner';
import logo from "@/public/assets/logo2.png";
import Image from 'next/image';

const sentences = [
  "Stay positive.",
  "Keep moving.",
  "Embrace change.",
  "Be kind.",
  "Stay curious.",
  "Believe in yourself.",
  "Dream big."
];

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [randomSentence, setRandomSentence] = useState("");

  useEffect(() => {
    // Select a random sentence
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    setRandomSentence(sentence);

    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader-overlay">
          <div className="preloader">
            <Image src={logo} alt="Your Logo" className="logo" />
            <div className="loading-sentence">
              {randomSentence}
            </div>
           
            <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
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

