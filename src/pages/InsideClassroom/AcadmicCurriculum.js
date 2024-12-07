import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const AcadmicCurriculum = () => {
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
                    { label: "The Academic Curriculum" },
                  ]}
                  title="The Academic Curriculum"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/445782557_871319641697829_7815744372853900849_n.jpg"
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
                        The Academic Curriculum
                      </span>
                    </span>
                  </p>
                </div>


              <p style={{ fontFamily: 'Nunito Sans'}}>
              An exceptional education begins with a carefully crafted curriculum, and at Global Hub School Karachi, ours is designed to provide a strong foundation for academic and personal growth. With numerous subjects to explore, our curriculum challenges students to think critically, question creatively, and engage deeply with their studies.
              </p>

              <p style={{ fontFamily: 'Nunito Sans'}}>
              Our expert educators inspire curiosity and encourage intellectual independence, ensuring students are prepared to tackle complex concepts with confidence. Beyond the classroom, students are provided opportunities to integrate their learning into real-world applications, further solidifying their understanding.
              </p>

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                style={{ fontFamily: 'Nunito Sans'}}
              >
                <p style={{ fontFamily: 'Nunito Sans' }}>
                Regular projects, assignments, and evaluations are seamlessly integrated into the curriculum to foster time management, problem-solving skills, and a culture of lifelong learning. This dynamic curriculum not only prepares students for rigorous examinations but also equips them with the tools to adapt and excel in a rapidly evolving global environment.
                </p>
              </blockquote>

                <section className="image-with-statistic">
                  <div>
                    <div className="animate-wrapper">
                      <div className=" animate-deactive">
                        <div className="pillar background-primary"></div>
                      </div>
                      <div className="image-wrapper">
                        <div className="">
                          <div className=" object-fit object-fit--cover">
                            <img
                              decoding="async"
                              src="/assets/11/461991582_3684004391846353_7501919082942478913_n.jpg"
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

export default AcadmicCurriculum;
