import React from 'react'
import NextSection from '../../components/NextSection'
import Footer from '../../components/footer'
import "../../components/footer.css"

const ReligiousLife = () => {
  return (
    <div id="content-wrap">
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article
              className="
                                "
            >
              <section className="banner">
                <div className="breadcrumbs-desktop">
                  <p id="breadcrumbs">
                    <span
                      ><span
                        ><a className="my-class" href=""
                          >Home</a
                        ></span
                      >
                      
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page"
                        >The Academic Curriculum</span
                      ></span
                    >
                  </p>
                </div>
                <div className="banner__blue-bar banner__blue-bar--first">
                  <div className="blue-bar-hidden">
                    <div className="slide-up slide-up--static">
                      <div>
                        <span>
                          <h1
                            className="banner__title title color-white title--xl2"
                          >
                            The Academic Curriculum
                          </h1>
                        </span>
                      </div>
                    </div>
                    <div
                      className="banner__intro background-primary color-white"
                    >
                      <p className="intro">
                      While GHS Karachi is a non-denominational institution, we recognize the importance of spiritual growth in shaping well-rounded individuals. For our predominantly Muslim student body, we offer structured programs that provide a comprehensive understanding of Islamic teachings and values.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background"
                      // style={{backgroundImage:"url(../../../../../assets/11/IMG_0100.JPG)"}}
                    >
                                       <img
                    src="/assets/11/247470871_2919321168314683_3967744707871769205_n.png"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                      {/* <div
                        className="fadeIn js-image-move__inner"
                        data-src="https://www.etoncollege.com/wp-content/uploads/2023/10/eton-23-60-1-2000x1333.jpg"
                      ></div> */}
                    </div>

                    <div className="col-md-10 offset-md-2"></div>
                  </div>
                </div>
                <div className="banner__block">
                  <div
                    className="img-animate img-animate--horizontal animate-deactive"
                  >
                    <div className="pillar background-lgrey"></div>
                  </div>
                  <div className="banner__block__inner background-lgrey"></div>
                </div>

                <div className="banner__blue-bar">
          <div className="pillar background-secondary"></div>

                  <div className="slide-up slide-up--static">
                    <div>
                      <span>
                        <h1
                          className="banner__title title color-white title--xl2"
                        >
                          The Academic Curriculum
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="banner__intro background-primary color-white">
                    <p className="intro">
                    While GHS Karachi is a non-denominational institution, we recognize the importance of spiritual growth in shaping well-rounded individuals. For our predominantly Muslim student body, we offer structured programs that provide a comprehensive understanding of Islamic teachings and values.
                    </p>
                  </div>
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
                      >The Academic Curriculum</span
                    ></span
                  >
                </p>
              </div>

              <p>
              These programs include Quranic studies, religious discussions, and regular prayers, helping students integrate their faith into daily life. Beyond religious education, we foster an environment of respect and understanding for all beliefs, encouraging students to embrace diversity and develop strong moral principles.
              </p>

      

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
              >
                <p>
                By emphasizing the role of faith in character building, we aim to guide students toward lives of integrity, compassion, and purpose.
                </p>
                <cite></cite>
              </blockquote>


              <section className="image-with-statistic">
                <div>
                  <div className="animate-wrapper">
                    <div
                      className="img-animate img-animate--horizontal animate-deactive"
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
                            src="/assets/11/247470871_2919321168314683_3967744707871769205_n.png"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-with-statistic__stat">
                  <div
                    className="img-animate img-animate--horizontal animate-deactive"
                  >
                    <div className="pillar background-lgrey"></div>
                  </div>
                  <div className="">
                    <div className="title title--lg color-secondary">79%</div>
                    <p>
                      of all GCSE grades achieved in 2019 were Grade 8 or 9.
                    </p>
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

export default ReligiousLife
