import React, { useEffect, useState } from 'react'
import "../../components/footer.css"
import ResultAccordion from './ResultAccordian'

const ExamResults = () => {
  const [imageHeight, setImageHeight] = useState("auto");
  useEffect(() => {
    const updateImageHeight = () => {
      if (window.innerWidth >= 768) {
        setImageHeight("720px");
      } else {
        setImageHeight("auto");
      }
    };
    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);
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
                        >Inside the Classroom</span
                      ></span
                    >
                  </p>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background">
<img
                    src="/assets/11/DSC_4400.JPG"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: imageHeight,
                      objectFit: "cover",
                    }}
                  />
                    </div>
                  </div>
                </div>
                  <div className="background-primary color-white" style={{paddingLeft:"10px" , paddingBottom:"20px"}}>
                  <h1 className="banner__title title color-white title--xl2">
                          Exam result
                        </h1>
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
                      >exam result</span
                    ></span
                  >
                </p>
              </div>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Assessment plays a critical role in shaping a student’s learning journey, and at Global Hub School Karachi, we have developed a comprehensive examination system that reflects this philosophy. Year-round evaluations are designed to not only test a student’s understanding but also encourage consistent effort and continuous learning.
              </p>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              As students advance through their academic years, the level of rigor increases, preparing them thoroughly for their final board examinations. These carefully curated assessments ensure that students are both challenged and supported, building their confidence and competence as they progress.
              </p>

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
              <ResultAccordion/>
              </blockquote>

 

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
                            src="/assets/11/81218517_2414471095466362_1277845215436079104_n.jpg"                          />
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

export default ExamResults
