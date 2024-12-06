import React, { useEffect, useState } from 'react'
import "../../components/footer.css"
import Accordion from './Accordian'


const Fees = () => {
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
    
    <div id="content-wrap" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article className="" >
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
                        >Fees</span
                      ></span
                    >
                  </p>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background"
                      >
                          <img
                    src="/assets/11/Academic block- side view.JPG"
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

  
                  <div className="background-primary color-white" style={{paddingLeft:" 10px" , paddingBottom:"20px"}}>
                  <h1
                          className="banner__title title color-white title--xl2" style={{paddingLeft:"70px" }}
                        >
                          Fees
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
                      >Fees</span
                    ></span
                  >
                </p>
              </div>

              <p>
              </p>

              <h2 className="wp-block-heading">School Fees &amp; Extras</h2>

              <p>
              Our fee structure is designed to reflect the exceptional educational experience GHS Karachi provides. Detailed information about tuition, boarding, and other related costs is readily available to families, ensuring complete transparency.              </p>

              <p>
              We make sure it is easy to access our world-class education, and work with families to find the best plans for them. Generally, Global Hub School works on a quarterly system, with payment of fees due every three months. For further details, reach out to our admissions team, who will be happy to assist you.
              </p>

              

              <h3 className="wp-block-heading">Payment of Fees</h3>

              <p>
              Please press the relevant grade level to see the applicable fees.              </p>

              <div className="accordion" id="accordion">
                <div className="accordion__item">
              <Accordion/>
                </div>
              </div>
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
                            src="/assets/11/461939397_3683732285206897_1030922366464620113_n.jpg"
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

export default Fees
