import React, { useEffect, useState } from 'react'
import "../../components/footer.css"

const NeedYourSupport = () => {
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
                            >Why We Need Your Support</span
                          ></span
                        >
                      </p>
                    </div>
                    <div className="container make-full-width">
                      <div className="row">
                        <div
                          className="image-container js-image-move grey-background"    >
       <img
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
                      <div className="background-primary color-white" style={{paddingLeft:"10px" ,paddingBottom:"20px"}}>
                      <h1
                              className="banner__title title color-white title--xl2"
                            >
                            Why We Need Your Support
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
                          >Why We Need Your Support</span
                        ></span
                      >
                    </p>
                  </div>
    
                  <p>
                  Empowering Students Through Access
Many of our students come from underserved communities and rely on scholarships and financial aid to pursue their education. Your support ensures that no talented and deserving child is left behind due to financial constraints.

                  </p>
    
                  <p>
                  Sustaining Excellence
Our goal is not just to educate but to provide an exceptional experience that includes state-of-the-art facilities, qualified educators, and a nurturing environment. These opportunities empower our students to excel academically, socially, and morally. Your contributions allow us to maintain and enhance the high standards we set for our school.

                  </p>
    
                  <blockquote
                    className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                  >
                    <p>
                    A meaningful donation has such a profound and lasting impact, that it outlives any of us. Doing that with GHS Karachi would have a ripple effect, empowering not only students but also uplifting entire communities; you can have an impact far beyond the confines of this campus.
                    </p>
                    <cite>Lt Cdr (r) Suhaib Farooq, CEO</cite>
                  </blockquote>
    
                  <p>
                  Leaving a Lasting Impact
Education has a ripple effect—it doesn’t just change the life of one student; it uplifts families and entire communities. By supporting GHS Karachi, you become a part of this transformational journey, impacting lives far beyond the boundaries of our campus.

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
                                src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"                          />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
    
                  {/* <p>
                    Boys that require further intervention can also either be
                    assessed on-site by one of our specialist teachers or they
                    can be referred to one of our highly respected, outside
                    agency professionals.&nbsp; The department also oversees and
                    monitors all access arrangements for internal and public
                    examinations, and works closely with the Deputy Head
                    (Academic) and the Exams Officer.&nbsp; All access
                    arrangements put into place stringently follow the JCQ and
                    CIE guidelines.
                  </p>
    
                  <p></p>
    
                  <blockquote
                    className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
                  >
                    <p>
                      Pupils with SEND also make excellent progress in line with
                      their peers as a result of the additional support they
                      receive.
                    </p>
                    <cite>ISI inspection, December 2021</cite>
                  </blockquote>
    
                  <p>
                    The department comprises a Head of Learning Support (the
                    Special Educational Needs Coordinator), a Deputy Head of
                    Learning Support, two full-time learning support teachers
                    and two part-time learning support teachers.&nbsp; All staff
                    within the department have undergone a range of degrees and
                    specialist qualifications relating to Special Educational
                    Needs and Disabilities. The department continues to study
                    and develop with regards to SEND, just as the boys do that
                    we teach.
                  </p>
    
                  <p>
                    Communication with parents and carers is also vital to the
                    development of a boy&#8217;s learning profile and the
                    department welcomes the input.&nbsp; Even before a boy joins
                    GHS, such communication is urged so we can ensure the
                    appropriate support is in place from the first day they move
                    in.&nbsp;&nbsp;&nbsp;
                  </p>
    
                  <p>
                    Further information regarding Special Educational Needs and
                    Disabilities can be found in our
                    <a
                      href="../../about-us/policies-and-reports/index.html"
                      data-type="20"
                      target="_blank"
                      rel="noreferrer noopener"
                      >SEND Policy</a
                    >.
                  </p>
     */}
                  </article>
                  
                  
                </div>
                </div>
                </div>
          </main>
        </div>
      )
    }
    
export default NeedYourSupport
