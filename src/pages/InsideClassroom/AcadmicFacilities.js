import React from 'react'
import "../../components/footer.css"
import Banner from '../../components/Banner';

const AcadmicFacilities = () => {
  return (
    <div id="content-wrap">
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article className="">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Academic Facilities" },
                  ]}
                  title="Academic Facilities"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/Academic block- side view.JPG"
                />
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
                      >Academic Facilities</span
                    ></span
                  >
                </p>
              </div>

              <p style={{ fontFamily: 'Nunito Sans'}}>
              Our campus is designed to create an environment that nurtures focus, collaboration, and excellence. With cutting-edge facilities, small class sizes, and a commitment to personalized learning, we ensure that every student has the resources and support they need to succeed.
              </p>
              <p style={{ fontFamily: 'Nunito Sans'}}>
              Each classroom is purpose-built to foster a productive and engaging learning atmosphere. By keeping class sizes small, teachers are able to give individualized attention to every student, addressing their strengths and areas for improvement in real-time. This ensures that no child is left behind and that every student has the opportunity to thrive academically.
              </p>

              <p style={{ fontFamily: 'Nunito Sans'}}>
              Our science laboratories for Physics, Chemistry, and Biology allow students to experience the excitement of hands-on experiments, while our computer labs provide access to advanced software and technologies to sharpen digital skills. The school library, a treasure trove of knowledge, offers an extensive collection of books, journals, and digital resources to stimulate curiosity and intellectual growth.
              </p>

              <p style={{ fontFamily: 'Nunito Sans'}}>
              
Additionally, dedicated collaborative spaces encourage teamwork and creative problem-solving, helping students develop essential life skills beyond academics. At GHS, our facilities reflect our commitment to excellence and innovation in education.

              </p>

              {/* <section className="image-with-statistic">
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
                            src="/assets/11/Academic block- side view.JPG"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              <section className="image-with-statistic blockquote-loaded">
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
                            src="/assets/11/IMG_0226.JPG"
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

export default AcadmicFacilities
