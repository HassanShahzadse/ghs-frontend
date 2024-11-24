import React from "react";
import "../App.css";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <h2>Endless opportunities</h2>
      <h3>
        At Eton, boys learn as much, if not more, outside the classroom as they
        do inside it. The exceptional breadth and depth of our co-curriculum
        enables boys to tailor it to their interests, receiving professional
        tutelage to excel whatever their passion.
      </h3>
      <p>
        For all its educational benefits, our co-curriculum is also a source of
        fun and enjoyment within boarding life at Eton, where boys are nurtured
        and cared for within the Eton community.
      </p>
      <p>
        Boys have established over 80 societies at Eton to explore their
        passions, hosting weekly lectures, workshops and seminars from
        world-renowned experts including former Prime Ministers and Presidents,
        Nobel Laureates, leading CEOs, academics and scientists.
      </p>
      <button className="cta-button">Learn More</button>
    </div>
  );
};

export default IntroSection;
