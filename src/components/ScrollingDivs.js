import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import "../App.css";

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
        className="scroll-div div-1 "
        style={{ y: y1 }}
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`/assets/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpg?text=Image+${index + 1}`}
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
            src={`/assets/11/779f14aec30378bd9abb86d2f8256787-scaled-1-1024x576.jpg?text=Image+${index + 6}`}
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
            src={`/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg?text=Image+${index + 11}`}
            alt={`Image ${index + 11}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingDivs;
