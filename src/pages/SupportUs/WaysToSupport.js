import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const WaysToSupport = () => {
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
                    { label: "Ways to Support" },
                  ]}
                  title="Ways to Support"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"
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
                        Ways to Support
                      </span>
                    </span>
                  </p>
                </div>

                <p>
                  <strong>Educational Supplies : </strong>Donate books,
                  computers, lab equipment, or other essential learning tools to
                  enhance the academic experience.
                </p>
                <p>
                  <strong>Dedicated Facilities : </strong>Contribute towards the
                  construction or improvement of key facilities such as science
                  laboratories, the school mosque, or recreational spaces.
                </p>
                <p>
                  <strong>Scholarships and Financial Aid : </strong>Fund a
                  student’s education and give them the opportunity to reach
                  their potential.
                </p>
                <p>
                  <strong>A School Block : </strong>Gift an entire academic
                  block or wing, leaving a legacy that will impact generations
                  of students.
                </p>
                <p>
                  <strong>Recurring Donations (Sadaqah) : </strong>Make regular
                  contributions towards operational costs, student meals, or
                  facility maintenance to ensure the school runs smoothly.
                </p>

                <blockquote className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
                  <p>
                    Your support, whether big or small, helps us continue to
                    provide an exceptional educational experience for our
                    students.
                  </p>
                  {/* <cite>Block</cite> */}
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
                              src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"
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

export default WaysToSupport;
