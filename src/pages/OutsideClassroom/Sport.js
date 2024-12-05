import React from 'react'
import NextSection from '../../components/NextSection'
import Footer from '../../components/footer'
import "../../components/footer.css"

const Sport = () => {
  return (
    <div id="content-wrap">
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article
              className="
                                "
            >
              <section className="banner">
                <div className="breadcrumbs-desktop">
                  <p id="breadcrumbs">
                    <span
                      ><span
                        ><a className="my-class" href="/"
                          >Home</a
                        ></span
                      >
                      
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page"
                        >Sport</span
                      ></span
                    >
                  </p>
                </div>
                <div className="banner__blue-bar banner__blue-bar--first">
                  <div className="blue-bar-hidden">
                    <div className="slide-up slide-up--static">
                      <div>
                        <span>
                          <h1
                            className="banner__title title color-white title--xl2"
                          >
                           Sport
                          </h1>
                        </span>
                      </div>
                    </div>
                    <div
                      className="banner__intro background-primary color-white"
                    >
                      <p className="intro">
                      Sports at GHS Karachi are more than just games—they are a cornerstone of our mission to develop balanced and disciplined individuals. Our extensive sports program allows students to engage in horse riding, cricket, football, swimming, basketball, tennis, and more, catering to both recreational players and competitive athletes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background"
                      // style={{backgroundImage:"url(../../../../../assets/11/90192471_2479260052320799_1132917114605142016_n.jpg)"}}
                    >
                                     <img
                    src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                      {/* <div
                        className="fadeIn js-image-move__inner"
                        data-src="https://www.etoncollege.com/wp-content/uploads/2023/10/eton-23-60-1-2000x1333.jpg"
                      ></div> */}
                    </div>

                    <div className="col-md-10 offset-md-2"></div>
                  </div>
                </div>
                <div className="banner__block">
                  <div
                    className=" animate-deactive"
                  >
                    <div className="pillar background-lgrey"></div>
                  </div>
                  <div className="banner__block__inner background-lgrey"></div>
                </div>

                <div className="banner__blue-bar">
          {/* <div className="pillar background-secondary"></div> */}

                  {/* <div className="slide-up slide-up--static">
                    <div>
                      <span>
                        <h1
                          className="banner__title title color-white title--xl2"
                        >
                          Sport
                        </h1>
                      </span>
                    </div>
                  </div> */}
                  <div className="banner__intro background-primary color-white" style={{paddingLeft:"10px" }}>
                  <h1
                          className="banner__title title color-white title--xl2" style={{paddingLeft:"60px" }}
                        >
                          Sport
                        </h1>
                    {/* <p className="intro">
                    Sports at GHS Karachi are more than just games—they are a cornerstone of our mission to develop balanced and disciplined individuals. Our extensive sports program allows students to engage in horse riding, cricket, football, swimming, basketball, tennis, and more, catering to both recreational players and competitive athletes.
                    </p> */}
                  </div>
                </div>
              </section>

              <div className="breadcrumbs-mobile">
                <p id="breadcrumbs">
                  <span
                    ><span
                      ><a className="my-class" href="/"
                        >Home</a
                      ></span
                    >
                    <span className="breadcrumbs-separator"></span>
                    <span className="breadcrumb_last" aria-current="page"
                      >Sport</span
                    ></span
                  >
                </p>
              </div>

              <p>
              Students benefit from top-tier sports facilities, professional coaches, and structured training schedules that help them grow their skills while fostering resilience and perseverance. Regular inter-school tournaments and competitions provide platforms for students to showcase their abilities, build camaraderie, and experience healthy competition.
              </p>

              <p>
              Our sports curriculum emphasizes both physical and mental well-being. Participation not only improves fitness but also teaches valuable life lessons such as goal setting, teamwork, and handling pressure. Beyond the skills acquired on the field, students carry with them an enduring sense of discipline, collaboration, and sportsmanship.
              </p>

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
              >
                <p>
                  The school is highly successful in fulfilling its aim to
                  promote the best habits of independent thought and
                  learning in the pursuit of excellence. This is reflected
                  in exceptional results in GCSE, A-level and Pre-U
                  examinations
                </p>
                {/* <cite>ISI inspection, December 2021</cite> */}
              </blockquote>

              <p>
                Our academic curriculum is broad. With 28 subjects on offer,
                including 10 modern and classical languages, every boy has
                the best opportunity to discover his passion.&nbsp;
              </p>

              <p>
                Our Masters are subject-specialists who invariably hold
                prestigious degrees in their subjects, but equally as
                important in their appointment has been their capacity to
                build relationships and inspire learners.
              </p>

              <p>
                Our House Master and Tutor system ensures that at least two
                adults have oversight of every boy’s individual progress and
                are there to support and encourage him.
              <div className="mt-10" >
  <video
  controls
    autoPlay
    loop
    playsinline
    muted
    className="h-1/2 w-1/2 absolute object-cover"
    style={{width:"100%", height:"500px" , marginTop:"70px"}}
  >
    <source src="/assets/video/Ghs Sports.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
              </p>
              <section className="image-with-statistic">
                <div>
                  <div className="animate-wrapper">
                    <div
                      className=" animate-deactive"
                    >
                      <div className="pillar background-primary"></div>
                    </div>
                    <div className="image-wrapper">
                      <div className="js-image-move">
                        <div
                          className="js-image-move__inner object-fit object-fit--cover"
                        >
                          <img
                            decoding="async"
                            src="/assets/11/90172896_2479257448987726_2746791719352664064_n.jpg"
                            />
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
export default Sport
