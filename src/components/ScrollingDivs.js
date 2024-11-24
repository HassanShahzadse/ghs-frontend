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
    {
      url: "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
      text: "Tradition and Legacy Innovation at Heart",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Innovation at Heart Innovation at Heart",
    },
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Crafting Memories Innovation at Heart",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Precision Redefined Innovation at Heart",
    },
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Timeless Beauty Innovation at Heart",
    },
  ];

  const image2 = [
    {
      url: "/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg",
      text: "Future Awaits Innovation at Heart",
    },
    {
      url: "/assets/11/image-20241108-211702-4b1c960e-2000x1333.jpg",
      text: "Exploring Horizons Innovation at Heart",
    },
    {
      url: "/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg",
      text: "Innovation Unleashed Innovation at Heart",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Shaping the Future Innovation at Heart",
    },
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Boundless Creativity Innovation at Heart",
    },
  ];

  const image3 = [
    {
      url: "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
      text: "Inspiring Change Innovation at Heart",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Empowering VisionsInnovation at Heart",
    },
    {
      url: "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
      text: "Driven by Passion Innovation at Heart",
    },
    {
      url: "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
      text: "Redefining Possibilities Innovation at Heart",
    },
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Vision in Motion Innovation at Heart",
    },
  ];

  return (
    <div className="scrolling-divs-container">
      <motion.div className="scroll-div div-1" style={{ y: y1 }}>
        {image1.map((img, index) => (
          <div className="image-container" key={index} >
            {index === 0 && <div className="image-overlay">Honouring Tradition.</div>}
            <img src={img.url} alt={`Image ${index + 1}`} />
            <div className="hover-text">{img.text}</div>
          </div>
        ))}
      </motion.div>

      <motion.div className="scroll-div div-2" style={{ y: y2 }}>
        {image2.map((img, index) => (
          <div className="image-container" key={index}>
            <img src={img.url} alt={`Image ${index + 1}`} />
            <div className="hover-text">{img.text}</div>
          </div>
        ))}
      </motion.div>

      <motion.div className="scroll-div div-3" style={{ y: y3 }}>
        {image3.map((img, index) => (
          <div className="image-container" key={index}>
            {index === 0 && <div className="image-overlay">Inspiring Change</div>}
            <img src={img.url} alt={`Image ${index + 1}`} />
            <div className="hover-text" id="hover-text">{img.text}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingDivs;
