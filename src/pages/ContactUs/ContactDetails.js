import React from "react";
import NextSection from "../../components/NextSection";
import Footer from "../../components/footer";
import "../../components/footer.css"


const ContactDetails = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid py-md-5 py-3">
          <div className="row">
            <div className="col-12">
              <article className="">
                <div className="">
                  <div className="container">
                    <div className="row">
                      <div className="offset-lg-1 col-lg-9 pt-5 pt-md-0">
                        <h2 className="title title--lg pt-5 pt-md-0 fs-6">
                        We’d love to hear from you! Whether you have questions about our programs, admissions, or how to support GHS Karachi, our team is here to assist you. Please use the contact details below to get in touch, and we’ll be happy to help.
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="offset-lg-1 col-lg-10">
                        <div className="row">
                          <div className="col-md-5">
                            <h3 className="title title--md">Contact Details</h3>
                            <hr />
                            <p>
                            +92 21 3644 0300
                            </p>
                              <p
                              >
                                info@ghskarachi.com
                              </p>
                              <p
                              >
                                admissions@ghskarachi.com
                              </p>
                          </div>
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

export default ContactDetails;
