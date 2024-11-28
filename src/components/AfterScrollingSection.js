import React from "react";
import "./footer.css";

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
                src="public/assets/11/public/assets/11/IMG_0075.JPG"
                alt="Image description"
                srcset="
        /assets/11/IMG_0075.JPG  1024w,
        /assets/11/IMG_0075.JPG    300w,
        /assets/11/IMG_0075.JPG    768w,
        /assets/11/IMG_0075.JPG 1536w,
        /assets/11/IMG_0075.JPG 2048w,
        /assets/11/IMG_0075.JPG 2000w,
        /assets/11/IMG_0075.JPG    400w
    "
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
          <div className="introduction__stat-slider introduction__stat-slider--desktop js-fade-up">
            <div className="home-intro-stat-slider">
              <div className="slide">
                <h3>250</h3>
                <p className="">society meeting speakers per year</p>
              </div>

              <div className="slide">
                <h3>£9.7m</h3>
                <p className="">to be spent on financial aid in 2023/24</p>
              </div>

              <div className="slide">
                <h3>16,000</h3>
                <p className="">
                  biological specimens held in the College’s Natural History
                  Museum
                </p>
              </div>

              <div className="slide">
                <h3>105</h3>
                <p className="">boys on fully funded places in 2022/23</p>
              </div>

              <div className="slide">
                <h3>51</h3>
                <p className="">instrumental ensembles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="introduction--column-2 introduction--column">
          <div className="introduction--column--media introduction--column-2--media">
            <div className="image">
              <img
                decoding="async"
                src="public/assets/11/public/assets/11/IMG_0181.JPG"
                alt="Image description"
                srcset="
        /assets/11/IMG_0181.JPG  1024w,
        /assets/11/IMG_0181.JPG    300w,
        /assets/11/IMG_0181.JPG    768w,
        /assets/11/IMG_0181.JPG 1536w,
        /assets/11/IMG_0181.JPG 2048w,
        /assets/11/IMG_0181.JPG 2000w,
        /assets/11/IMG_0181.JPG    400w
    "
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
          <div className="introduction__stat-slider introduction__stat-slider--mobile">
            <div className="home-intro-stat-slider">
              <div className="slide">
                <h3>250</h3>
                <p className="">society meeting speakers per year</p>
              </div>

              <div className="slide">
                <h3>£9.7m</h3>
                <p className="">to be spent on financial aid in 2023/24</p>
              </div>

              <div className="slide">
                <h3>16,000</h3>
                <p className="">
                  biological specimens held in the College’s Natural History
                  Museum
                </p>
              </div>

              <div className="slide">
                <h3>105</h3>
                <p className="">boys on fully funded places in 2022/23</p>
              </div>

              <div className="slide">
                <h3>51</h3>
                <p className="">instrumental ensembles</p>
              </div>
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
                  href="about-us/meet-the-head-master/index.html"
                >
                  Meet the Headmaster
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
