import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

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
          <div className="introduction--column--media introduction--column-1--media">
            <div className="video-embed">
              <img
                decoding="async"
                src="public/assets/11/public/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"
                alt="Image description"
                srcset="
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg  1024w,
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg    300w,
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg    768w,
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg 1536w,
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg 2048w,
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg 2000w,
        /assets/11/90192471_2479260052320799_1132917114605142016_n.jpg  400w
    "
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>

        <div className="introduction--column-2 introduction--column">
          <div className="introduction--column--media introduction--column-2--media">
            <div className="image">
              <img
                decoding="async"
                src="public/assets/11/public/assets/11/90172896_2479257448987726_2746791719352664064_n.jpg"
                alt="Image description"
                srcset="
        /assets/11/90172896_2479257448987726_2746791719352664064_n.jpg  1024w,
        /assets/11/90172896_2479257448987726_2746791719352664064_n.jpg   300w,
        /assets/11/I90172896_2479257448987726_2746791719352664064_n.jpg   768w,
        /assets/11/90172896_2479257448987726_2746791719352664064_n.jpg1536w,
        /assets/11/90172896_2479257448987726_2746791719352664064_n.jpg 2048w,
        /assets/11/90172896_2479257448987726_2746791719352664064_n.jpg 2000w,
        /assets/11/90172896_2479257448987726_2746791719352664064_n.jpg    400w
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
                <span>
                  Growing up in our boarding community develops personal growth
                  and lifelong friendships in the safety of our wrap-around
                  pastoral care, while nurturing the value of leadership and
                  service.
                </span>
              </p>
              {/* <p>
                <span>
                  We cherish Eton’s history and tradition, which combined with a
                  willingness to innovate has seen Eton thrive for almost six
                  centuries. 
                </span>
              </p> */}
              <p>&nbsp;</p>
              <p>
                <a
                  className="button"
                  href="/Admissions/EntryToGHS"
                >
                            {/* <Link to="/Admissions/EntryToGHS"> */}
                            Our Prospectus
                            {/* </Link> */}
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
