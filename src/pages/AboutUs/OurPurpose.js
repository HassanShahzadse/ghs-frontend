import React from 'react'
import NextSection from '../../components/NextSection'
import Footer from '../../components/footer'
import "../../components/footer.css"

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
                        ><a className="my-class" href="/"
                          >Home</a
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
                        <p className="mt-30">
                        At Global Hub School Karachi, our mission is to cultivate the inherent talents of young individuals, enabling them to thrive and positively impact society. Rooted in our foundational values are the key aims of the college that we hope to instill in each of our students:<br />
                          <p>
                            In advancing this purpose, GHS is committed to
                            an ethos which:
                          </p>
                        </p>
                      </div>

                      <div
                        className="row"
                      >
                        <div className="col-lg-6">
                          <ol>
                            <li>
                            We provide an internationally recognized Cambridge-based curriculum delivered by expert educators. This rigorous academic framework develops critical thinking, creativity, and analytical skills, preparing students to excel in an ever-changing world.

                            </li>
                            {/* <li>
                            Our approach encourages students to develop a love for learning, empowering them to pursue knowledge independently and confidently throughout their lives. By cultivating curiosity, we ensure our pupils stay adaptable and informed.

                            </li> */}
                          </ol>
                        </div>
                        <div className="col-lg-6">
                          <ol start="3">
                            <li>
                            GHS nurtures leadership qualities in every student by offering opportunities to take initiative, work collaboratively, and lead with empathy. We prepare our pupils to make meaningful contributions both locally and globally.
                            </li>
                            <li>
                            Our commitment to sustainability drives our decisions and practices. From environmental awareness to community outreach, we instill in our students a sense of responsibility to protect and enhance the world around them.
                            </li>
                            {/* <li>
                              nurtures the value of leadership and service;
                            </li> */}
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
                        <div className="title title--shadow horizontal-scroll--right" style={{marginLeft:'8px'}} >
                          Our Purpose
                        </div>
                      </h1>
                      <div className="title title--lg"></div>

                      <div className="row">
                        <div className="col-md-4">
                          <img
                            fetchpriority="high"
                            decoding="async"
                            src="/assets/11/462142391_3684004605179665_4619771339123697881_n.jpg"
                          />

                        </div>
                        <div className="col-md-8">
                          <p>
                            <span className="intro"
                              >In order to achieve this GHS:</span
                            >
                          </p>
                          <p>
                            a) is committed to establishing a supportive and
                            safe environment for its boys, its staff and the
                            wider school community; this is the foundation
                            of the trusting relationships formed between
                            boys and adults, which is a particular feature
                            of GHS life.
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
                            GHS is proud of its history and heritage and
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
              
              
            </article>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default OurPurpose
