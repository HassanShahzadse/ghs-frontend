import React from 'react'
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
                        >Religious Life</span
                      ></span
                    >
                  </p>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background" >
                                       <img
                    src="/assets/11/247470871_2919321168314683_3967744707871769205_n.png"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "auto",
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
                          Religious Life
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
                      >Religious Life</span
                    ></span
                  >
                </p>
              </div>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              These programs include Quranic studies, religious discussions, and regular prayers, helping students integrate their faith into daily life. Beyond religious education, we foster an environment of respect and understanding for all beliefs, encouraging students to embrace diversity and develop strong moral principles.
              </p>

      

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                By emphasizing the role of faith in character building, we aim to guide students toward lives of integrity, compassion, and purpose.
                </p>
              </blockquote>
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
                            src="/assets/11/247470871_2919321168314683_3967744707871769205_n.png"
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
  )
}

export default ReligiousLife
