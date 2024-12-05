import React from "react";
import NextSection from "../../components/NextSection";
import Footer from "../../components/footer";
import "../../components/footer.css"


const OurStrategy = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
                <section className="banner">
                  <div className="breadcrumbs-desktop">
                    <p id="breadcrumbs">
                      <span>
                        <span>
                          <a className="my-class" href="/">
                            Home
                          </a>
                        </span>
                        <span className="breadcrumbs-separator"></span>
                        <span className="breadcrumb_last" aria-current="page">
                          Our Strategy
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="banner__blue-bar banner__blue-bar--first">
                    <div className="blue-bar-hidden">
                      <div className="">
                        <div>
                          <span>
                            <h1 className="">
                              Our Strategy
                            </h1>
                          </span>
                        </div>
                      </div>
                      <div className="banner__intro background-primary color-white">
                        <p className="intro">
                        At Global Hub School Karachi, our strategy is a dynamic, forward-thinking approach designed to deliver excellence in education while fostering personal and societal growth. Rooted in our core values, our strategy outlines how we empower students, embrace innovation, and build a sustainable future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container make-full-width">
                    <div className="row">
                      <div
                        className="image-container js-image-move grey-background"
                        // style={{backgroundImage:"url(/assets/11/300435996_172020862062507_4477850517123929161_n.jpg)"}}
                      >
                         <img
                    src="/assets/11/300435996_172020862062507_4477850517123929161_n.jpg"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "fill",
                    }}
                  />
                        {/* <div
                          className="fadeIn js-image-move__inner"
                          data-src="/assets/11/IMG_0090.JPG"
                        ></div> */}
                      </div>

                      <div className="col-md-10 offset-md-2"></div>
                    </div>
                  </div>
                  <div className="banner__block">
                    <div className=" animate-deactive">
                      <div className="pillar background-lgrey"></div>
                    </div>
                    <div className="banner__block__inner background-lgrey"></div>
                  </div>

                  <div className="banner__blue-bar">
                    <div className="slide-up slide-up--static">
                      <div>
                        <span>
                          <h1 className="banner__title title color-white title--xl2">
                            Our Strategy
                          </h1>
                        </span>
                      </div>
                    </div>
                    <div className="banner__intro background-primary color-white" style={{paddingLeft:"20px"}}>
                    <h1 className="banner__title title color-white title--xl2" >
                              Our Strategy
                            </h1>
                      <p className="intro">
                      </p>
                    </div>
                  </div>
                </section>

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
                        Our Strategy
                      </span>
                    </span>
                  </p>
                </div>

                <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                At Global Hub School Karachi, our strategy is a dynamic, forward-thinking approach designed to deliver excellence in education while fostering personal and societal growth. Rooted in our core values, our strategy outlines how we empower students, embrace innovation, and build a sustainable future.
                </p>
                <ol style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  <li><strong>Encourage Creativity and Individuality:</strong></li>
                  <ul>
                    <li>By offering a diverse range of academic and co-curricular opportunities, we foster an environment where students can explore their passions and develop unique perspectives.</li>
                  </ul>
                  <li><strong>Promote Empathy and Cultural Appreciation:</strong></li>
                  <ul>
                    <li>We emphasize understanding and respect for diverse cultures and viewpoints, preparing our students to be compassionate global citizens.</li>
                  </ul>
                  <li><strong>Foster Independent Thinking:</strong></li>
                  <ul>
                    <li>Through a curriculum that encourages inquiry and critical analysis, we instill a lifelong love for learning and independent thought.</li>
                  </ul>
                  <li><strong>Support Holistic Well-being:</strong></li>
                  <ul>
                    <li>Recognizing the importance of physical, mental, and spiritual health, we provide resources and programs that nurture the overall well-being of our students.</li>
                  </ul>
                  <li><strong>Instill Leadership and Service:</strong></li>
                  <ul>
                    <li>We encourage students to take on leadership roles and engage in community service, understanding the value of contributing to society.</li>
                  </ul>
                  <li><strong>Uphold Core Values:</strong></li>
                  <ul>
                    <li>Kindness, integrity, determination, and gratitude are at the heart of our community, guiding our students in their personal and academic journeys.</li>
                  </ul>

                </ol>

                <p>
                  <img
                    src="/assets/11/275054573_122711713660089_1312944415058859257_n.jpg"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "600px",
                      objectFit: "fill",
                    }}
                  />
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurStrategy;
