 
// In ./components/NextUp.js
import React from 'react';
import './footer.css';

const NextUp = () => {
  return (
    <section className="teasers fade-in fade-in--active" data-color="white">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="slide-up slide-up--scroll">
              <h2 className="title title--xl">Next up&#8230;</h2>
            </div>

            <div className="fade-in__child fade-in--3">
              <a href="news-and-diary/school-news/rocksoc-shakes-the-parry-hall/index.html" className="post-link">
                <div className="news-item">
                  <div className="news-item__img">
                    <div className="js-image-move">
                      <span className="js-image-move__inner object-fit object-fit--cover">
                        <img
                          decoding="async"
                          className="moving-img"
                          src="wp-content/uploads/2024/11/image-20241108-211702-4b1c960e-1024x683.jpg"
                          alt="RockSoc Shakes The Parry Hall"
                        />
                      </span>
                    </div>
                    <div className="corner-category">
                      <div className="corner-category__inner">News</div>
                    </div>
                  </div>
                  <div className="news-item__content background-grey">
                    <h3 className="title title--sm">RockSoc Shakes The Parry Hall</h3>
                    <div className="post-meta">
                      <p>14 November 2024</p>
                      <p>Music</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <div className="fade-in__child fade-in--2">
              <div className="teaser-item">
                <div className="js-image-move">
                  <div className="js-image-move__inner object-fit object-fit--cover">
                    <img
                      decoding="async"
                      src="wp-content/uploads/2021/09/Aims-and-Ethos-New-1b-683x1024.jpg"
                      alt="Our Purpose"
                    />
                  </div>
                </div>
                <h3 className="title title--md">Our Purpose</h3>
                <a href="about-us/our-purpose/index.html" className="cover-link"></a>
              </div>
            </div>

            <div className="fade-in__child fade-in--2">
              <div className="teaser-item">
                <div className="js-image-move">
                  <div className="js-image-move__inner object-fit object-fit--cover">
                    <img
                      decoding="async"
                      src="wp-content/uploads/2023/07/EtonArchitecture045-1024x768.jpg"
                      alt="Entry To Eton"
                    />
                  </div>
                </div>
                <h3 className="title title--md">Entry To Eton</h3>
                <a href="admissions/entry-to-eton/index.html" className="cover-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextUp; // Ensure this line is here to export the component
