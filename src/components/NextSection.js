import React from "react";
import "./footer.css";

const NextSection = () => {
  return (
    <section
                className="teasers fade-in fade-in--active"
                data-color="white"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slide-up slide-up--scroll">
                        <div>
                          <span>
                            <h2 className="title title--xl">Next up&#8230;</h2>
                          </span>
                        </div>
                      </div>

                      <div className="fade-in__child fade-in--3">
                        <a
                          href="news-and-diary/school-news/rocksoc-shakes-the-parry-hall/index.html"
                          className="post-link"
                        >
                          <div className="news-item">
                            <div className="news-item__img">
                              <div className="js-image-move">
                                <span className="js-image-move__inner object-fit object-fit--cover">
                                  <img
                                    decoding="async"
                                    className="moving-img"
                                    src="/assets/11/IMG_0101.JPG"                                  />
                                </span>
                              </div>
                              <div className="corner-category">
                                <div className="corner-category__inner">
                                  News
                                </div>
                              </div>
                            </div>
                            <div className="news-item__content background-grey">
                              <h3 className="title title--sm">
                                RockSoc Shakes The Parry Hall
                              </h3>
                              <div className="post-meta">
                                <p>14 November 2024</p>

                                <p>Music</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="fade-in__child fade-in--2">
                        <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/IMG_0108.JPG"                              />
                            </div>
                          </div>
                          <h3 className="title title--md">Our Purpose</h3>
                          <a
                            href="about-us/our-purpose/index.html"
                            className="cover-link"
                          ></a>
                        </div>
                        <div className="teaser-item">
                          <div
                            className="teaser-item__inner"
                            // style="background-image:url()"
                            image-background-scroll
                          ></div>
                          <h3 className="title title--md"></h3>
                          <a href="/" className="cover-link"></a>
                        </div>
                      </div>
                      <div className="fade-in__child fade-in--2">
                        <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/IMG_0153.JPG"                              />
                            </div>
                          </div>
                          <h3 className="title title--md">Entry To GHS</h3>
                          <a
                            href="admissions/entry-to-eton/index.html"
                            className="cover-link"
                          ></a>
                        </div>
                        <div className="teaser-item">
                          <div
                            className="teaser-item__inner"
                            // style="background-image:url()"
                            image-background-scroll
                          ></div>
                          <h3 className="title title--md"></h3>
                          <a href="/" className="cover-link"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  );
};

export default NextSection;
