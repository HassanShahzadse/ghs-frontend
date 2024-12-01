import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const NextSection = () => {
  return (
    <section
                className="pt-5"
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

                      {/* <div className="fade-in__child fade-in--3">
                          <div className="news-item">
                            <div className="news-item__img">
                              <div className="js-image-move">
                                <span className="js-image-move__inner object-fit object-fit--cover">
                               

                                  <img
                                    decoding="async"
                                    className="moving-img"
                                    src="/assets/11/461968913_3684004521846340_906275821340010015_n.jpg"  />
                                    
                                </span>
                              </div>
                              <div className="corner-category">
                                <div className="corner-category__inner">
                                  New
                                </div>
                              </div>
                            </div>
                            <div className="news-item__content background-grey">
                              <h3 className="title title--sm">
                                 The  Labs
                              </h3>
                              <div className="post-meta">
                                <p>November 2024</p>

                                <p>Learning</p>
                              </div>
                            </div>
                          </div>
                      </div> */}
                    </div>

                    <div className="col-md-6">
                      <div className="fade-in__child fade-in--2">
                        <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/Dorm block- quadrangle.JPG"     />
                            </div>
                          </div>
                      
                          {/* <Link to="/AboutUs/OurPurpose"> */}
                          <h3 className="title title--md">Our Purpose</h3>
                          {/* </Link> */}
                          <a
                            href="/AboutUs/OurPurpose"
                            className="cover-link"
                          >

                          </a>
                        </div>
                        <div className="teaser-item">
                          <div
                            className="teaser-item__inner"
                            // style="background-image:url()"
                            image-background-scroll
                          >
                             <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/DSC_2159.JPG"     />
                            </div>
                          </div>
                          {/* <Link to="/OutsideClassroom/Sport">  */}
                           <h3 className="title title--md">Sport</h3>
                           {/* </Link> */}
                          <a href="/OutsideClassroom/Sport" className="cover-link"></a>
                        </div>
                      </div>
                      <div className="fade-in__child fade-in--2">
                        <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/461991582_3684004391846353_7501919082942478913_n.jpg"     />
                            </div>
                          </div>
                          <a
                            href="https://app.ghskarachi.com/student/online/reg2" 
                            target="blank"
                            className="cover-link"
                          >
                             <h3 className="title title--md">Apply Online</h3>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  );
};

export default NextSection;
