import React, { useEffect, useState } from 'react'
import "../../components/footer.css"

const CommunityEngagement = () => {
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
            <article
              className="
                                "
            >
              <section className="banner">
                <div className="breadcrumbs-desktop">
                  <p id="breadcrumbs">
                    <span
                      ><span
                        ><a className="my-class" href="/"
                          >Home</a
                        ></span
                      >
                      
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page"
                        >Community Engagement</span
                      ></span
                    >
                  </p>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background" >
                                     <img
                    src="/assets/11/70462977_2298415337071939_5397888453499158528_n.jpg"
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
                          Community Engagement
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
                      >Community Engagement</span
                    ></span
                  >
                </p>
              </div>

              <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                
Whether it’s volunteering at local shelters, participating in fundraising events, or organizing environmental clean-ups, students are encouraged to contribute to meaningful causes. These experiences help them understand the importance of giving back, cultivating a sense of gratitude and purpose.

              </p>

 

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                By connecting students with their communities, we nurture compassionate individuals who are driven to create positive change in the world.
                </p>
                <cite></cite>
              </blockquote> <section className="image-with-statistic">
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
  )
}



export default CommunityEngagement
