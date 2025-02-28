import { useEffect, useState, useRef } from "react";
import Kengo from "./React/Kengo";
import "./App.css";
import GifImg from "../src/React/Fv/Videotogif.gif";
import Header from "./React/Header/Header";

const App = () => {
  const [text, setText] = useState("");
  const isTypingRef = useRef(false);
  const typingElementRef = useRef(null);

  useEffect(() => {
    const Typing = (sentence: any) => {
      if (isTypingRef.current) return;
      isTypingRef.current = true;
      setText("");

      sentence.split("").forEach((character: any, index: any) => {
        setTimeout(() => {
          setText((prevText) => prevText + character);
          if (index === sentence.length - 1) {
            setTimeout(() => {
              isTypingRef.current = false;
            }, 500);
          }
        }, 80 * index);
      });
    };
    Typing("Made By React");
  }, []);

  const NoBr = {
    whiteSpace: "nowrap",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer1); // Cleanup timeout on component unmount
    };
  }, []);

  return (
    <section>
      <header>
        <Header />
      </header>
      {loading && (
        <div id="top" className="anime" style={{ position: "relative" }}>
          <img src={GifImg} alt="Loading" />
          <div
            className="overlay-text"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <h2 className="copy">
              <p
                className="fw-bold oshare-font"
                ref={typingElementRef}
                style={NoBr}
              >
                {text}
              </p>
            </h2>
          </div>
        </div>
      )}
      <div className={`mainSite ${loading ? "hidden" : "visible"}`}>
        <Kengo />
      </div>
    </section>
  );
};

export default App;
