import React from "react";
import "../App.css";

const AfterScrollingSection = () => {
  return (
    <div className="after-scrolling-section">
      {/* Big Image Section */}
    

      {/* Text and Image Section */}
      <div className="text-and-small-image">
        <h6 className="heading">
            <span className="underlineword">Welcome</span> to Eton</h6>
        {/* Paragraph */}
        <div className="paragraph">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Praesent euismod nunc in purus gravida, vitae sodales lorem lacinia.</p>
          <p>Aenean scelerisque turpis sit amet erat facilisis suscipit.</p>
        </div>
        {/* Smaller Image */}
        <div className="small-image">
          <img 
            src="/assets/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpg" 
            alt="Small Visual" 
          />
        </div>
      </div>
      <div className="big-image">
        <img 
          src="/assets/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1024x683.jpg" 
          alt="Big Visual" 
        />
      </div>
    </div>
  );
};

export default AfterScrollingSection;
