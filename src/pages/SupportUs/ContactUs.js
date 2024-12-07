import React  from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const ContactUs = () => {
  return (
    <div id="content-wrap" style={{ fontFamily: "Nunito Sans" }}>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className=" ">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Contact Us" },
                  ]}
                  title="Contact Us"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/263856165_2949755955271204_4147642677834431307_n.jpg"
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
                        Contact Us
                      </span>
                    </span>
                  </p>
                </div>
                <div className="row">
                      <div className="offset-lg-1 col-lg-10">
                        <div className="row">
                          <div className="col-md-5">
                            <div>
                            <h3 className="title title--md">Contact Details</h3>
                            <hr />
                            <h6 style={{fontWeight:"bold"}}>Mobile Numbers:</h6>
                            <a href="tel:0300 8410040">  <p>0300 8410040</p> </a>
                            <a href="tel:0324 4717777"><p>0324 4717777</p> </a>
    </div>
    <div>
    <h6 style={{fontWeight:"bold"}}>Landline Number:</h6>
    <a href="tel:021 36440300"><p>021 36440300</p> </a>
    </div>
    <div>
    <h6 style={{fontWeight:"bold"}}>For General Queries:</h6>
  <a href="mailto:info@ghskarachi.com"><p>info@ghskarachi.com</p></a>
  </div>
  <div>
  <h6 style={{fontWeight:"bold"}}>Admission Inquiries:</h6>
  <a href="mailto:admissions@ghskarachi.com"><p>admissions@ghskarachi.com</p></a>
  </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
