import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const GiftOfEducation = () => {
  return (
    <div id="content-wrap" style={{ fontFamily: "Nunito Sans" }}>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="  ">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Gift of Education" },
                  ]}
                  title="Gift of Education"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/441068841_857863996376727_8535097873388575013_n.jpg"
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
                        Gift of education
                      </span>
                    </span>
                  </p>
                </div>

                <p>
                When you invest in education, you invest in the future. By making a significant contribution, such as funding an academic block, a library, or a sports facility, you leave behind a legacy that shapes countless young lives.
                </p>
                <p>
                  Your generosity will stand as a beacon of hope and
                  inspiration, benefiting students for generations to come.
                  Every classroom taught in, every book read, and every
                  achievement celebrated will be a testament to your commitment
                  to creating a brighter future.
                </p>

                <p>
                  Whether it’s an academic block, a state-of-the-art laboratory,
                  or a community space, your gift will become a cornerstone of
                  the school’s mission to educate and empower. Help us create a
                  world where every child has the chance to learn, grow, and
                  succeed—your contribution makes all the difference.
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
                              src="/assets/11/90113830_2479258868987584_3657821726705713152_n.jpg"
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

export default GiftOfEducation;
