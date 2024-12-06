import React, { useEffect, useState } from 'react'
import "../../components/footer.css"

const GiftOfEducation = () => {
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
        <div id="content-wrap" style={{ fontFamily: 'Nunito Sans'}}>
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
                            >Gift of education</span
                          ></span
                        >
                      </p>
                    </div>
                    <div className="container make-full-width">
                      <div className="row">
                        <div
                          className="image-container js-image-move grey-background"
    >        <img
    src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"
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
                             Gift of Education
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
                          >Gift of education</span
                        ></span
                      >
                    </p>
                  </div>
    
                  <p>
                  Your generosity will stand as a beacon of hope and inspiration, benefiting students for generations to come. Every classroom taught in, every book read, and every achievement celebrated will be a testament to your commitment to creating a brighter future.
                  </p>
    
               <p>Whether it’s an academic block, a state-of-the-art laboratory, or a community space, your gift will become a cornerstone of the school’s mission to educate and empower. Help us create a world where every child has the chance to learn, grow, and succeed—your contribution makes all the difference.</p>
    
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
                                src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"                          />
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

export default GiftOfEducation
