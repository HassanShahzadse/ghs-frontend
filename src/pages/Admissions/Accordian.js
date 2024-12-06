import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ margin: "20px 0" ,fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Accordion Item 1 */}
      <div style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <div
          onClick={() => toggleAccordion(0)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "20px" , fontWeight:"bold"}}>Foundation Class (6th-8th):</h4>
          <div
            style={{
              transform: activeIndex === 0 ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            +
          </div>
        </div>
        <div
          style={{
            display: activeIndex === 0 ? "block" : "none",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <p>Development fund (one time): Rs. 30,000</p>
          <p>Admission fee (one-time): Rs. 90,000</p>
          <p>Quarterly fee (3 months): Rs. 195,000</p>
          <p>Annual fund (yearly): Rs. 20,000</p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <div
          onClick={() => toggleAccordion(1)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "20px" , fontWeight:"bold"}}>Matric [9th & 10th - Federal Board]: </h4>
          <div
            style={{
              transform: activeIndex === 1 ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            +
          </div>
        </div>
        <div
          style={{
            display: activeIndex === 1 ? "block" : "none",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <p>Development fund (one time): Rs. 30,000</p>
          <p>Admission fee (one-time): Rs. 90,000</p>
          <p>Quarterly fee (3 months): Rs. 210,000</p>
          <p>Annual fund (yearly): Rs. 20,000</p>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <div
          onClick={() => toggleAccordion(2)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "20px" , fontWeight:"bold"}}>O levels [9th & 10th - Cambridge]: </h4>
          <div
            style={{
              transform: activeIndex === 2 ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            +
          </div>
        </div>
        <div
          style={{
            display: activeIndex === 2 ? "block" : "none",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <p>Development fund (one time): Rs. 30,000</p>
          <p>Admission fee (one-time): Rs. 90,000</p>
          <p>Quarterly fee (3 months): Rs. 225,000 </p>
          <p>Annual fund (yearly): Rs. 20,000</p>
        </div>
      </div>

            {/* Accordion Item 4 */}
      <div style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <div
          onClick={() => toggleAccordion(3)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "20px" , fontWeight:"bold"}}>FSc [11th & 12th] (Federal Board):  </h4>
          <div
            style={{
              transform: activeIndex === 3 ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            +
          </div>
        </div>
        <div
          style={{
            display: activeIndex === 3 ? "block" : "none",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <p>Development fund (one time): Rs. 30,000</p>
          <p>Admission fee (one-time): Rs. 100,000</p>
          <p>Quarterly fee (3 months): Rs. 240,000</p>
          <p>Annual fund (yearly): Rs. 20,000</p>
        </div>
      </div>

            {/* Accordion Item 5 */}
      <div style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <div
          onClick={() => toggleAccordion(4)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <h4 style={{ margin: 0, fontSize: "20px" , fontWeight:"bold"}}>A levels [11th & 12th - Cambridge]:  </h4>
          <div
            style={{
              transform: activeIndex === 4 ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            +
          </div>
        </div>
        <div
          style={{
            display: activeIndex === 4 ? "block" : "none",
            padding: "10px 15px",
            backgroundColor: "#EFF3F0",
          }}
        >
          <p>Development fund (one time): Rs. 30,000</p>
          <p>Admission fee (one-time): Rs. 90,000</p>
          <p>Quarterly fee (3 months): Rs. 255,000 </p>
          <p>Annual fund (yearly): Rs. 20,000</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
