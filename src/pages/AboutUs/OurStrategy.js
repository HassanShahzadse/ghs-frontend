import React from "react";
import NextSection from "../../components/NextSection";
import Footer from "../../components/footer";

const OurStrategy = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
                <section className="banner">
                  <div className="breadcrumbs-desktop">
                    <p id="breadcrumbs">
                      <span>
                        <span>
                          <a className="my-class" href="../../index.html">
                            Home
                          </a>
                        </span>
                        <span className="breadcrumbs-separator"></span>
                        <span>
                          <a className="my-class" href="../index.html">
                            About Us
                          </a>
                        </span>
                        <span className="breadcrumbs-separator"></span>
                        <span className="breadcrumb_last" aria-current="page">
                          Our Strategy
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="banner__blue-bar banner__blue-bar--first">
                    <div className="blue-bar-hidden">
                      <div className="slide-up slide-up--static">
                        <div>
                          <span>
                            <h1 className="banner__title title color-white title--xl2">
                              Our Strategy
                            </h1>
                          </span>
                        </div>
                      </div>
                      <div className="banner__intro background-primary color-white">
                        <p className="intro">
                          Eton College is a charity for the advancement of
                          education. At its heart sits an independent boys’
                          boarding school which leads a dynamic range of
                          educational activities and an expanding network of
                          educational partnerships.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container make-full-width">
                    <div className="row">
                      <div
                        className="image-container js-image-move grey-background"
                        style={{backgroundImage:"url(../../../../../assets/11/IMG_0100.JPG)"}}
                      >
                        <div
                          className="fadeIn js-image-move__inner"
                          data-src="/assets/11/IMG_0090.JPG"
                        ></div>
                      </div>

                      <div className="col-md-10 offset-md-2"></div>
                    </div>
                  </div>
                  <div className="banner__block">
                    <div className="img-animate img-animate--horizontal animate-deactive">
                      <div className="pillar background-lgrey"></div>
                    </div>
                    <div className="banner__block__inner background-lgrey"></div>
                  </div>

                  <div className="banner__blue-bar">
                    <div className="slide-up slide-up--static">
                      <div>
                        <span>
                          <h1 className="banner__title title color-white title--xl2">
                            Our Strategy
                          </h1>
                        </span>
                      </div>
                    </div>
                    <div className="banner__intro background-primary color-white">
                      <p className="intro">
                        Eton College is a charity for the advancement of
                        education. At its heart sits an independent boys’
                        boarding school which leads a dynamic range of
                        educational activities and an expanding network of
                        educational partnerships.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="breadcrumbs-mobile">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="../../index.html">
                          Home
                        </a>
                      </span>
                      <span className="breadcrumbs-separator"></span>
                      <span>
                        <a className="my-class" href="../index.html">
                          About Us
                        </a>
                      </span>
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page">
                        Our Strategy
                      </span>
                    </span>
                  </p>
                </div>

                <p>
                  For nearly 600 years, Eton has taken a long-term view as to
                  how we can make a real and sustained contribution as an
                  educational charity and as a school. This strategy derives
                  from wide-ranging discussion and consultation with staff,
                  boys, parents and Old Etonians to review our educational
                  purpose. You can read our strategy below, or download it
                  <a
                    href="../../wp-content/uploads/2023/07/Eton-Strategy-2023-Final-09062023.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>
                  .
                </p>

                <p>
                  <img
                    src="/assets/11/IMG_0090.JPG"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "600px",
                      objectFit: "cover",
                    }}
                  />
                </p>

                <NextSection />
                <Footer />
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurStrategy;
