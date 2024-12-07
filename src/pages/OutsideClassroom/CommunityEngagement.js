import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const CommunityEngagement = () => {
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
                    { label: "Community Engagement" },
                  ]}
                  title="Community Engagement"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/70462977_2298415337071939_5397888453499158528_n.jpg"
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
                        Community Engagement
                      </span>
                    </span>
                  </p>
                </div>
                <p style={{ fontFamily: "Nunito Sans" }}>
                GHS Karachi is deeply committed to instilling a sense of social responsibility in our students. Through community engagement programs, students have the opportunity to make a real difference while developing empathy and leadership skills.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  Whether it’s volunteering at local shelters, participating in
                  fundraising events, or organizing environmental clean-ups,
                  students are encouraged to contribute to meaningful causes.
                  These experiences help them understand the importance of
                  giving back, cultivating a sense of gratitude and purpose.
                </p>
                  <p style={{ fontFamily: "Nunito Sans" }}>
                    By connecting students with their communities, we nurture
                    compassionate individuals who are driven to create positive
                    change in the world.
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
                              src="/assets/11/69729319_2298412693738870_1343645145202950144_n.jpg"
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

export default CommunityEngagement;
