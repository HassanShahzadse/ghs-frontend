import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const PastoralCare = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="  ">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Pastoral Care" },
                  ]}
                  title="Pastoral Care"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/277148812_130958129502114_7861657689476040255_n.jpg"
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
                        Pastoral Care
                      </span>
                    </span>
                  </p>
                </div>

                <p style={{ fontFamily: "Nunito Sans" }}>
                At GHS Karachi, we understand that a successful education goes hand in hand with emotional well-being. That’s why pastoral care is a fundamental part of school life, ensuring every student feels valued, supported, and heard.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  Our approach to pastoral care includes one-on-one mentorship
                  programs, group workshops, and open-door policies that
                  encourage students to reach out whenever they need guidance.
                  Dedicated staff members work to create a nurturing environment
                  where students can confidently navigate challenges, celebrate
                  their achievements, and build emotional resilience.
                </p>

                  <p style={{ fontFamily: "Nunito Sans" }}>
                    Through a focus on empathy, kindness, and mutual respect, we
                    aim to foster a community where every student feels secure
                    and empowered to be their best self.
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
                              src="/assets/11/300435996_172020862062507_4477850517123929161_n.jpg"
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

export default PastoralCare;
