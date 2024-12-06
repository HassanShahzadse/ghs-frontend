import React, { useEffect, useState } from 'react'
import "../../components/footer.css"

const LearningSupport = () => {
  const [imageHeight, setImageHeight] = useState("auto");
  useEffect(() => {
    const updateImageHeight = () => {
      if (window.innerWidth >= 768) {
        setImageHeight("720px");
      } else {
        setImageHeight("auto");
      }
    };
    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);
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
                    <span
                      ><span
                        ><a className="my-class" href="/"
                          >Home</a
                        ></span>
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page"
                        >Learning Support</span ></span >
                  </p>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div className="image-container js-image-move grey-background">
<img
                    src="/assets/11/IMG_0146.JPG"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: imageHeight,
                      objectFit: "cover",
                    }}
                  />
                    </div>
                  </div>
                </div>
                  <div className="background-primary color-white" style={{paddingLeft:"10px" , paddingBottom:"20px"}}>
                  <h1
                          className="banner__title title color-white title--xl2"
                        >
                          Learning Support
                        </h1>
                  </div>
              </section>

              <div className="breadcrumbs-mobile">
                <p id="breadcrumbs">
                  <span
                    ><span
                      ><a className="my-class" href="/"
                        >Home</a
                      ></span
                    >
                    <span className="breadcrumbs-separator"></span>
                    <span className="breadcrumb_last" aria-current="page"
                      >Learning Support</span
                    ></span
                  >
                </p>
              </div>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Every student learns differently, and we celebrate this diversity by offering a robust learning support program tailored to individual needs. At GHS Karachi, we are committed to helping every child overcome challenges, build confidence, and achieve their personal best.
              </p>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Students with specific learning needs receive targeted interventions that focus on skill-building, self-awareness, and strategy development. Whether it’s strengthening study habits, tackling academic obstacles, or addressing learning differences, our support team works collaboratively with teachers and families to provide an integrated and compassionate approach.
              </p>

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
              >
                <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                The program emphasizes not only academic success but also emotional resilience, helping students develop a positive mindset toward challenges. With the right tools and encouragement, students are empowered to thrive not just in school, but in every stage of life.
                </p>
              </blockquote>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Support comes in many bespoke forms and is in place to help
                boys confidently overcome current and future potential
                challenges. Boys may receive one-to-one lessons focusing on
                areas such as executive functioning skills, revision and
                learning strategies, and handwriting development which will
                enable them to work successfully across subject
                areas.&nbsp;Group lessons are also provided focusing on
                areas such as study skills, exam techniques and effective
                reading strategies. The department also provides training,
                support and information to the wider staff body with regards
                to how they can differentiate and develop the educational
                experiences of the boys they work with or teach.
              </p>

              <section className="image-with-statistic">
                <div>
                  <div className="animate-wrapper">
                    <div
                      className=" animate-deactive"
                    >
                      <div className="pillar background-primary"></div>
                    </div>
                    <div className="image-wrapper">
                      <div className="js-image-move">
                        <div
                          className="js-image-move__inner object-fit object-fit--cover"
                        >
                          <img
                            decoding="async"
                            src="/assets/11/275241410_126106049987322_9784042813719939_n.jpg"                          />
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
  )
}

export default LearningSupport
