import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const Sport = () => {
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
                    { label: "Sport" },
                  ]}
                  title="Sport"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/426483706_798635335632927_6247193730931777733_n.jpg"
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
                        Sport
                      </span>
                    </span>
                  </p>
                </div>

                <p style={{ fontFamily: "Nunito Sans" }}>
                Sports at GHS Karachi are more than just games—they are a cornerstone of our mission to develop balanced and disciplined individuals. Our extensive sports program allows students to engage in horse riding, cricket, football, swimming, basketball, tennis, and more, catering to both recreational players and competitive athletes.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  Students benefit from top-tier sports facilities, professional
                  coaches, and structured training schedules that help them grow
                  their skills while fostering resilience and perseverance.
                  Regular inter-school tournaments and competitions provide
                  platforms for students to showcase their abilities, build
                  camaraderie, and experience healthy competition.
                </p>

                <p style={{ fontFamily: "Nunito Sans" }}>
                  Our sports curriculum emphasizes both physical and mental
                  well-being. Participation not only improves fitness but also
                  teaches valuable life lessons such as goal setting, teamwork,
                  and handling pressure. Beyond the skills acquired on the
                  field, students carry with them an enduring sense of
                  discipline, collaboration, and sportsmanship.
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

                  <div className="mt-10">
                    <video
                      controls
                      autoPlay
                      loop
                      playsinline
                      muted
                      className="h-1/2 w-1/2 absolute object-cover"
                      style={{
                        width: "100%",
                        height: "500px",
                        marginTop: "70px",
                      }}
                    >
                      <source
                        src="/assets/video/Ghs Sports.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
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
  );
};
export default Sport;
