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

  const image1 = [
    
    "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
    "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
    "/assets/11/20231213124820.jpg",
    "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
    "/assets/11/20231213124820.jpg",
  ]
  const image2 = [
    
    "/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg",
    "/assets/11/image-20241108-211702-4b1c960e-2000x1333.jpg",
    "/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg",
    "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
    "/assets/11/20231213124820.jpg",
  ]
  const image3 = [
    
    "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
    "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
    "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
    "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
    "/assets/11/20231213124820.jpg",
  ]

  return (
    <div className="scrolling-divs-container">
      <motion.div
        className="scroll-div div-1"
        style={{ y: y1 }}
      >
     
        {image1.map((img, index) => (
          <div className="image-container" key={index}>
          {index === 0 && (
        <div className="image-overlay">Honouring Tradition.</div>
      )}
          <img src={img} alt={`Image ${index + 1}`} />
        </div>
        ))}

      </motion.div>

      {/* Second Div */}
      <motion.div
        className="scroll-div div-2"
        style={{ y: y2 }}
      >
        {image2.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </motion.div>

      {/* Third Div */}
      <motion.div
        className="scroll-div div-3"
        style={{ y: y3 }}
      >
         {image3.map((img, index) => (
          <div className="image-container" key={index}>
          {index === 0 && (
        <div className="image-overlay">Inspiring Change</div>
      )}
          <img src={img} alt={`Image ${index + 1}`} />
        </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingDivs;
