import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const ReligiousLife = () => {
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
                    { label: "Religious Life" },
                  ]}
                  title="Religious Life"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/417474905_799979165498544_209576125104193647_n.jpg"
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
                        Religious Life
                      </span>
                    </span>
                  </p>
                </div>

                <p style={{ fontFamily: "Nunito Sans" }}>
                While GHS Karachi is a non-denominational institution, we recognize the importance of spiritual growth in shaping well-rounded individuals. For our predominantly Muslim student body, we offer structured programs that provide a comprehensive understanding of Islamic teachings and values.
                </p>
                <p style={{ fontFamily: "Nunito Sans" }}>
                  These programs include Quranic studies, religious discussions,
                  and regular prayers, helping students integrate their faith
                  into daily life. Beyond religious education, we foster an
                  environment of respect and understanding for all beliefs,
                  encouraging students to embrace diversity and develop strong
                  moral principles.
                </p>
                  <p style={{ fontFamily: "Nunito Sans" }}>
                    By emphasizing the role of faith in character building, we
                    aim to guide students toward lives of integrity, compassion,
                    and purpose.
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
                              src="/assets/11/418152059_799137295582731_343385202662830228_n.jpg"
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

export default ReligiousLife;
