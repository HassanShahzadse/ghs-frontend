import React, { useEffect, useState } from "react";

const NewsEvents = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    color: "#223C59",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  };

  const messageStyle = {
    fontSize: isMobile ? "1.5rem" : "2.8rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div style={containerStyle}>
      <p style={messageStyle}>Content is coming soon...</p>
    </div>
  );
};

export default NewsEvents;
