import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../App.css";

const ScrollingDivs = () => {
  const yScroll = useMotionValue(0);

  const y1 = useTransform(yScroll, [0, 1000], ["0%", "-100%"]);
  const y2 = useTransform(yScroll, [0, 1000], ["0%", "100%"]);
  const y3 = useTransform(yScroll, [0, 1000], ["0%", "-100%"]);

  const handleScroll = () => {
    yScroll.set(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrolling-divs-container">
      {/* Heading above the first div */}

      {/* First Div */}
      <motion.div
        className="scroll-div div-1"
        style={{ y: y1 }}
      >
      <h2 className="overlay-heading overlay-heading-1">Above the First Div</h2>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg?text=Image+${index + 1}`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Second Div */}
      <motion.div
        className="scroll-div div-2"
        style={{ y: y2 }}
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg?text=Image+${index + 6}`}
            alt={`Image ${index + 6}`}
          />
        ))}
      </motion.div>

      {/* Heading above the third div */}

      <h1 className="overlay-heading overlay-heading-2">Above the Third Div</h1>
      {/* Third Div */}
      <motion.div
        className="scroll-div div-3"
        style={{ y: y3 }}
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg?text=Image+${index + 11}`}
            alt={`Image ${index + 11}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingDivs;
