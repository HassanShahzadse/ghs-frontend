import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const CoCurriculum = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "The Co-Curriculum" },
                  ]}
                  title="The CoCurriculum"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/173949365_2788094718103996_8914009337549083740_n.jpg"
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
                        Co-Curriculum
                      </span>
                    </span>
                  </p>
                </div>

                <p style={{ fontFamily: "Nunito Sans" }}>
                  Through these opportunities, students learn the value of
                  teamwork, time management, and problem-solving. For instance,
                  our debate team provides a platform to hone analytical skills,
                  while the robotics club ignites curiosity and innovation.
                  Artistic expression is also celebrated through fine arts and
                  drama productions, where students gain confidence and creative
                  vision.
                </p>

                <p style={{ fontFamily: "Nunito Sans" }}>
                  By integrating the co-curriculum into daily life at GHS, we
                  ensure students are not only academically prepared but also
                  equipped with the confidence and skills to lead in any field
                  they choose. These experiences help shape their character,
                  broaden their perspectives, and build memories they will
                  cherish for a lifetime.
                </p>

                <blockquote
                  className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                  style={{ fontFamily: "Nunito Sans" }}
                >
                  <p style={{ fontFamily: "Nunito Sans" }}>
                    The school is highly successful in fulfilling its aim to
                    promote the best habits of independent thought and learning
                    in the pursuit of excellence. This is reflected in
                    exceptional results in GCSE, A-level and Pre-U examinations
                  </p>
                </blockquote>
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
                              src="/assets/11/70462977_2298415337071939_5397888453499158528_n.jpg"
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

export default CoCurriculum;
