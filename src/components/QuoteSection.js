import React from "react";
import "./footer.css";

const QuoteSection = () => {
  return (
    <div className="focus-areas__featured">
      <div className="featured--container">
        <div className="featured--main js-fade-up">
          <h4>Endless opportunities</h4>
          <div className="text">
            <p>
              <span className="intro" >
                At Eton, boys learn as much, if not more,
                outside the classroom as they do inside it. The
                exceptional breadth and depth of our
                co-curriculum enables boys to tailor it to their
                interests, receiving professional tutelage to
                excel whatever their passion. 
              </span>
            </p>
            <p>
              <span >
                For all its educational benefits, our
                co-curriculum is also a source of fun and
                enjoyment within boarding life at Eton, where
                boys are nurtured and cared for within the Eton
                community.
              </span>
            </p>
            <p>
              <span >
                Boys have established over 80 societies at Eton
                to explore their passions, hosting weekly
                lectures, workshops and seminars from
                world-renowned experts including former Prime
                Ministers and Presidents, Nobel Laureates,
                leading CEOs, academics and scientists.
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              <a
                className="button"
                href=""
              >
                The Co-Curriculum
              </a>
            </p>
          </div>
        </div>
        <div className="featured--quote js-fade-up">
          <figure>
            <blockquote>
              “To be at a school where I can have a choir
              practice in the morning, rugby training in the
              afternoon, followed by Wall Game, a band practice
              and a Society talk all in one day is something one
              will simply not be able to do later in life.”
            </blockquote>
            <figcaption>
              Rugby player and music exhibitor
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
