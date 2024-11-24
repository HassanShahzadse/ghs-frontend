// import React from "react";
// import "../App.css";
// import { div } from "framer-motion/client";

// const AfterScrollingSection = () => {
//   return (
//     <div>
//     <div className="after-scrolling-section">
//       {/* Big Image Section */}
    

//       {/* Text and Image Section */}
//       <div className="text-and-small-image">
//         <h6 className="heading">
//             <span className="underlineword">Welcome</span> to Eton</h6>
//         {/* Paragraph */}
//         <div className="paragraph">
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           <p>Praesent euismod nunc in purus gravida, vitae sodales lorem lacinia.</p>
//           <p>Aenean scelerisque turpis sit amet erat facilisis suscipit.</p>
//         </div>
//         {/* Smaller Image */}
//         <div className="small-image">
//           <img 
//             src="/assets/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpg" 
//             alt="Small Visual" 
//           />
//         </div>
//       </div>
//       <div className="big-image">
//         <img 
//           src="/assets/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1024x683.jpg" 
//           alt="Big Visual" 
//         />
//       </div>
      
//     </div>
//     </div>
//   );
// };

// export default AfterScrollingSection;



























import React from "react";
import "../App.css";

const AfterScrollingSection = () => {
  return (
    <div className="after-scrolling-section">
      {/* Left Section: Text and Small Image */}
      <div className="left-section">
        {/* Text Section */}
        <div className="text-content">
          <h6 className="heading">
            <span className="underlineword">Welcome</span> to Eton
          </h6>
          <div className="paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Praesent euismod nunc in purus gravida, vitae sodales lorem lacinia.</p>
            <p>Aenean scelerisque turpis sit amet erat facilisis suscipit.</p>
          </div>
        </div>
        {/* Smaller Image */}
        <div className="small-image">
          <img
            src="/assets/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpg"
            alt="Small Visual"
          />
        </div>
      </div>

      {/* Right Section: Big Image and Text with Button */}
      <div className="right-section">
        {/* Big Image */}
        <div className="big-image">
          <img
            src="/assets/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1024x683.jpg"
            alt="Big Visual"
          />
        </div>
        {/* Text Below Big Image */}
        <div className="big-image-text">
          <h2 className="underline">Our school</h2>
          <p>
            At our heart sits a leading boys’ boarding school with a tradition of excellence, 
            where we proudly offer a unique and outstanding education with endless opportunities.
          </p>
          <p>
            Growing up in our boarding community develops personal growth and lifelong friendships 
            in the safety of our wrap-around pastoral care, while nurturing the value of leadership 
            and service.
          </p>
          <p>
            We cherish Eton’s history and tradition, which combined with a willingness to innovate 
            has seen Eton thrive for almost six centuries.
          </p>
          {/* Button */}
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AfterScrollingSection;
