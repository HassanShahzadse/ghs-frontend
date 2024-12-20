import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const EnvironmentalEducation = () => {
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
                    { label: "Environmental Education" },
                  ]}
                  title="Environmental Education"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/300980504_172020772062516_5311573638736429145_n.jpg"
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
                        Environmental Education
                      </span>
                    </span>
                  </p>
                </div>
                <p style={{ fontFamily: "Nunito Sans" }}>
                Environmental sustainability is a cornerstone of the GHS Karachi ethos. Our environmental education programs empower students to take active roles in protecting the planet while gaining a deeper appreciation for nature.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  Students participate in initiatives like tree planting,
                  recycling drives, and conservation projects, learning
                  practical ways to address global challenges. Eco-clubs provide
                  a platform for collaborative problem-solving and innovative
                  ideas, enabling students to lead sustainability efforts both
                  within the school and beyond.
                </p>
                  <p style={{ fontFamily: "Nunito Sans" }}>
                    By fostering an awareness of environmental responsibility,
                    we prepare students to make informed and conscientious
                    decisions that contribute to a sustainable future.
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
                              src="/assets/11/461848694_3683395301907262_9150366868156804753_n.jpg"
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
export default EnvironmentalEducation;
