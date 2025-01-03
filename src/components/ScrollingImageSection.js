import React, { useRef, useEffect } from "react";
import "../App.css";

const ScrollingImagesSection = () => {
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (div1Ref.current && div2Ref.current) {
        // Move the first div to the right based on scroll
        div1Ref.current.style.transform = `translateX(calc(-1000px + ${scrollPosition * 0.5}px))`;

        // Move the second div to the left based on scroll
        div2Ref.current.style.transform = `translateX(-${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Inspiring Adventure",
    },
    {
      url: "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
      text: "Honoring Heritage",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Nature's Beauty",
    },
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Dream Destinations",
    },
    {
      url: "/assets/11/image-20241108-211702-4b1c960e-2000x1333.jpg",
      text: "Architectural Wonders",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Timeless Moments",
    },
    {
      url: "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
      text: "Cultural Pride",
    },
    {
      url: "/assets/11/20231213124820.jpg",
      text: "Urban Landscapes",
    },
    {
      url: "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
      text: "Nature's Tranquility",
    },
    {
      url: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      text: "Golden Memories",
    },
    {
      url: "/assets/11/image-20241108-211702-4b1c960e-2000x1333.jpg",
      text: "Majestic Views",
    },
    {
      url: "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
      text: "Serene Vibes",
    },
  ];

  return (
    <div className="scrolling-images-section">
      {/* First Div */}
      <div className="scrolling-div" ref={div1Ref}>
        {images.map((img, index) => (
          <img key={index} src={img.url} alt={`Image ${index + 1}`} />
        ))}
        {/* <div className="hover-text">{img.text}</div> */}
      </div>

      {/* Second Div */}
      <div className="scrolling-div" ref={div2Ref}>
        {images.map((img, index) => (
          <img key={index} src={img.url} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImagesSection;
