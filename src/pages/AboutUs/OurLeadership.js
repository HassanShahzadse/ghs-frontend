import React from "react";
import NextSection from "../../components/NextSection";
import Footer from "../../components/footer";
import "../../components/footer.css"


const OurLeadership = () => {
  return (
    <div id="content-wrap">
      <main className="main ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">

                <div className="breadcrumbs-mobile">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="/">
                          Home
                        </a>
                      </span>{" "}
                      <span className="breadcrumbs-separator"></span>{" "}
                      <span>
                        <a className="my-class" href="../index.html">
                          About Us
                        </a>
                      </span>{" "}
                      <span className="breadcrumbs-separator"></span>{" "}
                      <span className="breadcrumb_last" aria-current="page">
                        Our Leadership Team
                      </span>
                    </span>
                  </p>{" "}
                </div>
                <div className="container">
                  <div className="row">
                    <div
                      className="offset-lg-1 col-lg-10 offset-md-1 col-md-10"
                    ></div>
                <div className="title title--lg">
                        <p className="mt-30 pt-5">
                        At Global Hub School Karachi, our leadership is founded on the belief that the best educators inspire the best outcomes. That’s why we gather the finest teaching professionals from across the country, uniting diverse expertise and experiences under one roof.
Our educators are not just teachers—they are mentors, role models, and innovators who ignite a passion for learning in our students. Each faculty member brings a unique perspective and specialized knowledge, creating a rich and varied educational experience for every child.
By learning from educators with diverse skills and backgrounds, our students are exposed to multiple ways of thinking, problem-solving, and understanding the world. This dynamic exchange of ideas equips them to become responsible, capable, and global citizens.
As leaders in education, we are committed to fostering excellence, innovation, and inclusion, ensuring that every student at GHS Karachi is inspired to reach their full potential. Through our leadership, we aim to build a community where ambition, creativity, and resilience thrive.

                        </p>
                      </div>
                      </div>
                      </div>
                <section className="leadership-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <a className="inline-popup" href="#target-1">
                          <div className="teaser teaser--community">
                            <span
                              className="teaser__inner"
                              style={{
                                backgroundImage:
                                  "url(/assets/11/IMG_0332.JPG)",
                              }}
                            ></span>

                            <span>
                              <h3 className="title title--small color-white">
                              Our Leadership
                              </h3>
                              <small></small>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a className="inline-popup" href="#target-2">
                          <div className="teaser teaser--community">
                            <span
                              className="teaser__inner"
                              style={{
                                backgroundImage:
                                  "url(/assets/11/275054573_12271.jpg)",
                              }}
                            ></span>

                            <span>
                              <h3 className="title title--small color-white">
                              Our Managment
                              </h3>
                              <small></small>
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a className="inline-popup" href="#target-3">
                          <div className="teaser teaser--community">
                            <span
                              className="teaser__inner"
                              style={{
                                backgroundImage:
                                  "url(/assets/11/arTTECH.JPG)",
                              }}
                            ></span>

                            <span>
                              {/* <h3 className="title title--small color-white">
                                
                              </h3> */}
                              {/* <small>Janet Walker</small> */}
                            </span>
                          </div>
                        </a>
                        <div
                          className="modal-item modal-item--admissions mfp-hide"
                          id="target-3"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-md-5">
                                <div className="mobile-title">
                                  {" "}
                                  <div className="title title--md color-primary">
                                    The Bursar
                                  </div>
                                  <p className="intro">Janet Walker</p>
                                </div>
                                <div
                                  className="author-image"
                                  style={{
                                    backgroundImage:
                                      "url(../../../../../assets/11/IMG_0100.JPG)",
                                  }}
                                ></div>
                                <div className="pullout text-center">
                                  The School&#8217;s professional and
                                  operational services are collectively known as
                                  the Bursary.
                                </div>
                              </div>
                              <div className="col-md-5 offset-md-1 align-self-center">
                                <div className="desktop-title">
                                  <div className="title title--md color-primary">
                                    The Bursar
                                  </div>
                                  <p className="intro">Janet Walker</p>
                                </div>
                                <p>
                                  The Bursar leads the financial, administrative
                                  and support functions of the school and
                                  provides professional support for various
                                  activities that fall outside the day-to-day
                                  operations of the school including the
                                  School&#8217;s endowment and fundraising.
                                </p>
                                <p>
                                  Janet Walker studied philosophy, politics and
                                  economics at Somerville College, Oxford and
                                  went on to a postgraduate course in Nice in
                                  politics and economics. After qualifying as a
                                  Chartered Accountant, she embarked on a
                                  variety of roles in film and television in the
                                  independent production sector, BBC and ITV,
                                  culminating in the position of Director of
                                  Finance and Business Affairs at Channel 4.
                                </p>
                                <p>
                                  In 2003, Janet moved into the world of
                                  horse-racing (and construction!) when she took
                                  up the post of Commercial and Finance Director
                                  at Ascot Racecourse where she was heavily
                                  involved in the development of the new £200
                                  million grandstand.
                                </p>
                                <p>
                                  Janet joined Eton College in 2011. She is a
                                  non-executive director of Henderson High
                                  Income Trust plc.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurLeadership;
