import React, { useEffect, useState } from 'react'
import "../../components/footer.css"


const ScholarshipFinancialAid = () => {
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
        <div id="content-wrap" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
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
                            >Scholarship and Financial Aid</span
                          ></span
                        >
                      </p>
                    </div>
                    <div className="container make-full-width">
                      <div className="row">
                        <div
                          className="image-container js-image-move grey-background"
    >
         <img
                    src="/assets/11/71518606_2324152407831565_4640834380917374976_n.jpg"
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
                      <div className="background-primary color-white" style={{paddingLeft:"10px", paddingBottom:"20px" }}>
                      <h1
                              className="banner__title title color-white title--xl2"
                            >
                              Scholarship & Financial  Aid
                            </h1>
                      </div>
                  </section>
    
                  <div className="breadcrumbs-mobile">
                    <p id="breadcrumbs">
                      <span
                        ><span
                          ><a className="my-class" href=""
                            >Home</a
                          ></span
                        >
                        
                        <span className="breadcrumbs-separator"></span>
                        <span className="breadcrumb_last" aria-current="page"
                          >Learning Support</span
                        ></span
                      >
                    </p>
                  </div>
    
                  <p>
                  With a range of merit-based and need-based options, we are committed to nurturing potential and fostering excellence in every student, regardless of their financial circumstances. To learn more about eligibility and the application process, contact our admissions team for personalized assistance.
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
                                src="/assets/11/81218517_2414471095466362_1277845215436079104_n.jpg" />
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
    
export default ScholarshipFinancialAid
