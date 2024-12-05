import React from "react";
import "./footer.css";
// import { Link } from "react-router-dom";

const AfterScrollingSection = () => {
  return (
    <section className="home-block-introduction">
      <div className="introduction__container">
        <div className="introduction--column-1 introduction--column">
          <div className="introduction--column--text introduction--column-1--text js-fade-up">
            <h4>Welcome to Global Hub School Karachi</h4>
            <div className="text">
              <p>
                <span className="intro">
                At Global Hub School Karachi, we are committed to nurturing the leaders of tomorrow through an unparalleled blend of academic excellence, character development, and holistic growth. Located in the picturesque Karachi Hub Area, our state-of-the-art boarding facilities and internationally accredited curriculum set the foundation for students to achieve their fullest potential.
                </span>
              </p>
            </div>
          </div>
          <div className="introduction--column--media introduction--column-1--media"  style={{marginLeft: "10px"}}>
            <div className="video-embed">
  <video
  controls
    autoPlay
    loop
    playsinline
    muted
    className="h-full w-full absolute object-cover"
  >
    <source src="/assets/video/Ghs Ad New.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          </div>
        </div>

        <div className="introduction--column-2 introduction--column">
          <div className="introduction--column--media introduction--column-2--media">
            <div className="image">
              <img
                decoding="async"
                src="/assets/11/Admin block- view from Dining hall.JPG"
                alt="Image description"
                srcset="
        /assets/11/Admin block- view from Dining hall.JPG  1024w,
        /assets/11/Admin block- view from Dining hall.JPG   300w,
        /assets/11/Admin block- view from Dining hall.JPG   768w,
        /assets/11/Admin block- view from Dining hall.JPG 1536w,
        /assets/11/Admin block- view from Dining hall.JPG 2048w,
        /assets/11/Admin block- view from Dining hall.JPG 2000w,
        /assets/11/Admin block- view from Dining hall.JPG    400w
    "
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>

          <div className="introduction--column--text introduction--column-2--text js-fade-up">
            <h4>Our school</h4>
            <div className="text">
              <p>
                <span className="intro">
                Our emphasis on civic engagement, sustainability efforts, and a well-rounded student experience make us the premier destination for parents seeking the best for their children. At GHS, ambition is cultivated, creativity is celebrated, and diversity is embraced—all within a safe and supportive community where students are empowered to thrive.
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Growing up in our boarding community develops personal growth
                  and lifelong friendships in the safety of our wrap-around
                  pastoral care, while nurturing the value of leadership and
                  service.
                </span>
              </p>
              <p>&nbsp;</p>
              <p>
                <a className="button" href="/Admissions/EntryToGHS" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                            Our Prospectus
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterScrollingSection;
