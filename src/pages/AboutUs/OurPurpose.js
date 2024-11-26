import React from 'react'
import NextSection from '../../components/NextSection'
import Footer from '../../components/footer'
// import "../../components/footer.css"

const OurPurpose = () => {
  return (
    <div id="content-wrap">
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article className="">
              <section
                className="aims-ethos aims-ethos--banner"
                data-color="secondary"
              >
                <div className="breadcrumbs-desk">
                  <p id="breadcrumbs">
                    <span
                      ><span
                        ><a className="my-class" href="../../index.html"
                          >Home</a
                        ></span
                      >
                      <span className="breadcrumbs-separator"></span>
                      <span
                        ><a className="my-class" href="../index.html"
                          >About Us</a
                        ></span
                      >
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page"
                        >Our Purpose</span
                      ></span
                    >
                  </p>
                </div>
                <div className="container">
                  <div className="row">
                    <div
                      className="offset-lg-1 col-lg-10 offset-md-1 col-md-10"
                    >
                      <div
                        className="title title--shadow horizontal-scroll--right"
                      ></div>
                      <div className="title title--lg">
                        Eton College is a charity for the advancement of
                        education. At its heart sits an independent boys’
                        boarding school which leads a dynamic range of
                        educational activities and an expanding network of
                        educational partnerships.
                        <p className="mt-30">
                          The charity’s primary purpose, determined from its
                          Christian foundation in 1440, is to draw out the
                          best of young people’s talents and to enable them
                          to flourish and make a positive impact on others
                          through the course of a healthy, happy and
                          fulfilling life.<br />
                          <p>
                            In advancing this purpose, Eton is committed to
                            an ethos which:
                          </p>
                        </p>
                      </div>

                      <div
                        className="row off-screen off-screen--hide off-screen--list"
                      >
                        <div className="col-lg-6">
                          <ol>
                            <li>
                              encourages creativity, individuality,
                              innovation and enjoyment through a broad
                              vision of education based on wide-ranging
                              academic and co-curricular opportunities;
                            </li>
                            <li>
                              enables boys to develop a strong understanding
                              of themselves and their capabilities, while
                              also empathising with others through a genuine
                              appreciation for different people, different
                              perspectives and different cultures;
                            </li>
                          </ol>
                        </div>
                        <div className="col-lg-6">
                          <ol start="3">
                            <li>
                              develops enquiring minds and fosters a
                              life-long appreciation of independent thinking
                              and learning;
                            </li>
                            <li>
                              develops physical and mental health, emotional
                              maturity and spiritual richness;
                            </li>
                            <li>
                              nurtures the value of leadership and service;
                            </li>
                            <li>
                              celebrates kindness, loyalty, gratitude,
                              integrity and determination.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="aims-ethos aims-ethos--6" data-color="grey">
                <div className="container">
                  <div className="row">
                    <div
                      className="offset-lg-1 col-lg-10 offset-md-1 col-md-10"
                    >
                      <h1>
                        <div
                          className="title title--shadow horizontal-scroll--right"
                        >
                          Our Purpose
                        </div>
                      </h1>
                      <div className="title title--lg"></div>

                      <div className="row">
                        <div className="col-md-4">
                          <img
                            fetchpriority="high"
                            decoding="async"
                            src="/assets/11/IMG_0101.JPG"
                          />

                        </div>
                        <div className="col-md-8">
                          <p>
                            <span className="intro"
                              >In order to achieve this Eton:</span
                            >
                          </p>
                          <p>
                            a) is committed to establishing a supportive and
                            safe environment for its boys, its staff and the
                            wider school community; this is the foundation
                            of the trusting relationships formed between
                            boys and adults, which is a particular feature
                            of Eton life.
                          </p>
                          <p>
                            b) has a competitive school culture in which
                            boys are encouraged to pursue excellence in all
                            its differing forms, to develop their strengths
                            and to seek out new challenges. This often helps
                            to drive personal and collective achievement,
                            with the process being valued as much as the
                            outcome.
                          </p>
                          <p>
                            c) is more devolved and less centralised than
                            many institutions. This deliberately gives
                            greater autonomy to adults and to boys, who
                            accept that with that autonomy comes
                            responsibility and accountability. Rigorous
                            planning and attention to detail are central to
                            the school’s sustained success.
                          </p>
                          <p>
                            Eton is proud of its history and heritage and
                            honours many of its traditions; but the school
                            has always had a dynamic relationship with its
                            past and it is in balancing the old with the new
                            that it finds inspiration for change in the
                            future.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <NextSection/>
              <Footer/>
            </article>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default OurPurpose
