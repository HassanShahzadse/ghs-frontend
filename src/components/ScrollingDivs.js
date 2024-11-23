import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../App.css";

const ScrollingDivs = () => {
  const yScroll = useMotionValue(0);

  const y1 = useTransform(yScroll, [0, 1000], ["0%", "-50%"]);
  const y2 = useTransform(yScroll, [0, 1000], ["0%", "50%"]);
  const y3 = useTransform(yScroll, [0, 1000], ["0%", "-50%"]);

  const handleScroll = () => {
    yScroll.set(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrolling-divs-container">
      {/* First Div */}
      <motion.div
        className="scroll-div div-1"
        style={{ y: y1 }}
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/300x200?text=Image+${index + 1}`}
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
            src={`https://via.placeholder.com/300x200?text=Image+${index + 6}`}
            alt={`Image ${index + 6}`}
          />
        ))}
      </motion.div>

      {/* Third Div */}
      <motion.div
        className="scroll-div div-3"
        style={{ y: y3 }}
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/300x200?text=Image+${index + 11}`}
            alt={`Image ${index + 11}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingDivs;
