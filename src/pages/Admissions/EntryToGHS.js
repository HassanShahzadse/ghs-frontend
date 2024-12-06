import React from "react";
import "../../components/footer.css";
import AdmissionProcedure from "./Procedure/AdmissionProcedure";
import Banner from "../../components/Banner";

const EntryToGHS = () => {
  return (
    <div id="content-wrap" style={{ fontFamily: "Nunito Sans" }}>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Entry To GHS" },
                  ]}
                  title="Entry To GHS"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/461982838_3683986398514819_5431606055278620223_n.jpg"
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
                        Entry To GHS{" "}
                      </span>
                    </span>
                  </p>
                </div>
                <p className="">
                  Applying to GHS Karachi is a straightforward process designed
                  to evaluate students’ academic capabilities, character, and
                  passion for learning. Applicants are required to complete an
                  online form and submit relevant documentation for review
                  before appearing for an online test.{" "}
                </p>
                <p>
                  Once shortlisted, students are invited to participate in
                  assessments or interviews, allowing us to get to know them
                  better. This personalized approach ensures that every student
                  is evaluated fairly and holistically.{" "}
                </p>

                <p>Good luck with your application.</p>
                <p className="d-flex">
                  <a
                    href="/assets/GHS Boys Prospectus 2025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button md:mr-3 mr-2  btn btn-primary"
                  >
                    <i className="fa-regular fa-file-pdf md:mr-3 mr-1"></i> BOYS
                    PROSPECTUS
                  </a>
                  <a
                    href="/assets/GHS Girls  Prospectus 2025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button btn btn-primary"
                  >
                    <i className="fa-regular fa-file-pdf md:mr-3 mr-1"></i>{" "}
                    GIRLS PROSPECTUS
                  </a>
                </p>
                <AdmissionProcedure />

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
                              src="/assets/11/300435996_172020862062507_4477850517123929161_n.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <p>
                  <a
                    className="button"
                    href="https://app.ghskarachi.com/student/online/reg2"
                    target="_blank"
                    rel="noopener"
                  >
                    Online Registration
                  </a>
                </p>

                <h2 className="wp-block-heading">Essential Information</h2>

                <p>
                  <img
                    decoding="async"
                    src="/assets/11/176550934_2788094451437356_5384273365940172592_n.jpg"
                  />
                </p>

                <div aria-hidden="true" className="wp-block-spacer"></div>

                <h2 className="wp-block-heading">Tours</h2>

                <p>
                  If you are a prospective parent and would like to be booked
                  onto a visit to GHS College, please contact our Admissions
                  Team (+92 21 3644 0300).
                </p>

                <p>
                  We usually run Admissions tours twice a week throughout term
                  time, all in the afternoon. Tours take place on Mondays and
                  Wednesdays during the Michaelmas and Lent terms and Tuesdays
                  and Thursdays during the Summer term. Please note we do not
                  run tours on weekends.
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EntryToGHS;
