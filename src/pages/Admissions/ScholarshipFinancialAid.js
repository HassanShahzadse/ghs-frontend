import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const ScholarshipFinancialAid = () => {
  return (
    <div id="content-wrap" style={{ fontFamily: "Nunito Sans" }}>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className=" ">
                <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Scholarship and Financial Aid" },
                  ]}
                  title="Scholarship and Financial Aid"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/71518606_2324152407831565_4640834380917374976_n.jpg"
                />

                <div className="breadcrumbs-mobile">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="">
                          Home
                        </a>
                      </span>

                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page">
                        Learning Support
                      </span>
                    </span>
                  </p>
                </div>

                <p>
                  With a range of merit-based and need-based options, we are
                  committed to nurturing potential and fostering excellence in
                  every student, regardless of their financial circumstances. To
                  learn more about eligibility and the application process,
                  contact our admissions team for personalized assistance.
                </p>
                <p>
                  <strong>
                    Get in touch now to speak about how Global Hub School
                    Karachi is making quality education affordable for everyone:
                  </strong>
                  <h5 style={{fontWeight:"bold", paddingTop:"20px"}}>Mobile Numbers:</h5>

                <a href="tel:+92 324 4717777">
                  <p>+92 324 4717777</p>
                </a>
                <h5 style={{fontWeight:"bold"}}>For General Queries:</h5>
                <a href="mailto:info@ghskarachi.com">
                  <p>info@ghskarachi.com</p>
                </a>
                </p>

                <section className="image-with-statistic">
                  <div>
                    <div className="animate-wrapper">
                      <div className=" animate-deactive">
                        <div className="pillar background-primary"></div>
                      </div>
                      <div className="image-wrapper">
                        <div className="js-image-move">
                          <div className="js-image-move__inner object-fit object-fit--cover">
                            <img
                              decoding="async"
                              src="/assets/11/81218517_2414471095466362_1277845215436079104_n.jpg"
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
  );
};

export default ScholarshipFinancialAid;
