import React from "react";
import "../../components/footer.css"


const ContactDetails = () => {
  return (
    <div id="content-wrap" style={{ fontFamily: 'Nunito Sans'}}>
      <main className="main">
        <div className="container-fluid py-md-5 py-3">
          <div className="row">
            <div className="col-12">
              <article className="">
                <div className="">
                  <div className="container">
                    <div className="row">
                      <div className="offset-lg-1 col-lg-9 pt-5 pt-md-0">
                      <h1 className="banner__title title color-white title--xl2 " style={{color:"#223c59" , paddingTop:"30px"}}>
                            Contact Details
                          </h1>
                        <h2 className="title title--lg pt-2 pt-md-0 fs-6">

                        We’d love to hear from you! Whether you have questions about our programs, admissions, or how to support GHS Karachi, our team is here to assist you. Please use the contact details below to get in touch, and we’ll be happy to help.
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="offset-lg-1 col-lg-10">
                        <div className="row">
                          <div className="col-md-5">
                            <div>
                            <h3 className="title title--md">Contact Details</h3>
                            <hr />
                            <h6 style={{fontWeight:"bold"}}>Mobile Numbers</h6>
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
