import React from "react";
import "./footer.css";

const SpotlightSection = () => {
  return(
  <section className="home-block-spotlight">
                <h4>In the spotlight</h4>
                <div className="spotlight--container">
                  <div className="spotlight-featured-news">
                    <div className="intro">
                      Sharing the latest news and celebrating the diversity
                      of GHS life.
                    </div>

                    <a href="news-and-diary/school-news/etonian-ryan-wang-wins-bbc-young-musician-2024/index.html">
                      <div className="news-item">
                        <div className="news-item__img">
                          <div className="js-image-move">
                            <span className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                className="moving-img"
                                src="/assets/11/IMG_0101.JPG"                              />
                            </span>
                          </div>
                          <div className="corner-category">
                            <div className="corner-category__inner">News</div>
                          </div>
                        </div>
                        <div className="news-item__content background-grey">
                          <h3 className="title title--sm">
                            GHSian Ryan Wang Wins BBC Young Musician 2024
                          </h3>
                          <div className="post-meta">
                            <p>20 October 2024</p>

                            <p>Music</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="spotlight-blogs">
                    <div className="spotlight-blogs__box">
                      <div className="corner-category">
                        <div className="corner-category__inner">
                          Latest Blogs
                        </div>
                      </div>

                      <a href="blog/career-skills-a-workshop-approach/index.html">
                        <div className="">
                          <h3 className="title title--sm">
                            Career Skills: A Workshop Approach
                          </h3>

                          <div className="author-card">
                            <div className="author-card__image">
                              <img
                                decoding="async"
                                src="/assets/11/IMG_0142.JPG"                              />
                            </div>
                            <div className="author-card__content">
                              <p>
                                <b>Cathy McKenna</b>
                              </p>
                              <p>Deputy Director of Career Education</p>
                            </div>
                          </div>

                          <div className="author-card">
                            <div className="author-card__image">
                              <img
                                decoding="async"
                                src="/assets/11/IMG_0111.JPG"                              />
                            </div>
                            <div className="author-card__content">
                              <p>
                                <b>George Fussey</b>
                              </p>
                              <p>Director of Career Education</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="blog/working-with-the-sutton-trust/index.html">
                        <div className="">
                          <h3 className="title title--sm">
                            Working with the Sutton Trust
                          </h3>

                          <div className="author-card">
                            <div className="author-card__image">
                              <img
                                decoding="async"
                                src="/assets/11/IMG_0115.JPG"                              />
                            </div>
                            <div className="author-card__content">
                              <p>
                                <b>Jonnie Noakes</b>
                              </p>
                              <p>
                                Director of Tony Little Centre &#038;
                                Director of Teaching and Learning
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="blog/the-road-to-dudley-port/index.html">
                        <div className="">
                          <h3 className="title title--sm">
                            The Road to Dudley Port
                          </h3>

                          <div className="author-card">
                            <div className="author-card__image">
                              <img
                                decoding="async"
                                src="/assets/11/IMG_0118.JPG"                              />
                            </div>
                            <div className="author-card__content">
                              <p>
                                <b>Tom Arbuthnott</b>
                              </p>
                              <p>Deputy Head, Partnerships</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a
                      href="news-and-diary/school-news/index.html"
                      className="button"
                    >
                      Browse all news
                    </a>
                  </div>
                </div>
              </section>
)};

export default SpotlightSection;
