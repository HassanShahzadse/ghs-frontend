import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const Boarding = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className=" ">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Boarding" },
                  ]}
                  title="Boarding"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/un.png"
                />
                <div className="breadcrumbs-mobile">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="/">
                          Home
                        </a>
                      </span>
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page">
                        Boarding
                      </span>
                    </span>
                  </p>
                </div>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  {" "}
                  The boarding houses at GHS Karachi are at the heart of the
                  school community, providing a nurturing environment where
                  students can grow and flourish. Each house is more than just a
                  place to stay—it’s a home filled with camaraderie,
                  encouragement, and support.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  {" "}
                  Boarding life is structured to balance academic responsibilities with personal growth and social interaction. Modern living spaces offer comfortable accommodations, quiet study areas, and recreational facilities that promote a healthy and balanced lifestyle. Students form close bonds with their housemates, creating a sense of family and belonging.

                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  {" "}
                  Under the guidance of experienced housemasters and caring staff, students learn independence, responsibility, and time management. Whether organizing house events, taking part in inter-house competitions, or simply sharing stories over meals, boarders experience personal development and build lifelong friendships.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  <strong> Empowering Students Through Access: </strong>
                  Many of our students come from underserved communities and
                  rely on scholarships and financial aid to pursue their
                  education. Your support ensures that no talented and deserving
                  child is left behind due to financial constraints.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  <strong> Sustaining Excellence: </strong>
                  Our goal is not just to educate but to provide an exceptional
                  experience that includes state-of-the-art facilities,
                  qualified educators, and a nurturing environment. These
                  opportunities empower our students to excel academically,
                  socially, and morally. Your contributions allow us to maintain
                  and enhance the high standards we set for our school.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  {" "}
                  <strong>Leaving a Lasting Impact: </strong>
                  Education has a ripple effect—it doesn’t just change the life
                  of one student; it uplifts families and entire communities. By
                  supporting GHS Karachi, you become a part of this
                  transformational journey, impacting lives far beyond the
                  boundaries of our campus.
                </p>
                {/* <blockquote
                  className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                  style={{ fontFamily: "Nunito Sans" }}
                >
                  <p style={{ fontFamily: "Nunito Sans" }}>
                    The school is highly successful in fulfilling its aim to
                    promote the best habits of independent thought and learning
                    in the pursuit of excellence. This is reflected in
                    exceptional results in GCSE, A-level and Pre-U examinations
                  </p>
                </blockquote> */}
                {/* <p style={{ fontFamily: "Nunito Sans" }}>
                  Our academic curriculum is broad. With 28 subjects on offer,
                  including 10 modern and classical languages, every boy has the
                  best opportunity to discover his passion.&nbsp;
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  Our Masters are subject-specialists who invariably hold
                  prestigious degrees in their subjects, but equally as
                  important in their appointment has been their capacity to
                  build relationships and inspire learners.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  Our House Master and Tutor system ensures that at least two
                  adults have oversight of every boy’s individual progress and
                  are there to support and encourage him.
                </p> */}
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
                              src="/assets/11/174739355_2788092938104174_1790550117626444802_n.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>{" "}
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Boarding;
