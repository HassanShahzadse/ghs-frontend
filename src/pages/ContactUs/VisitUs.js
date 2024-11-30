import React from 'react'
import Footer from '../../components/footer'
import "../../components/footer.css"
import "../../components/footer.css"


const VisitUs = () => {
  return (
	  <>

  <div id="content-wrap">
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article className="">
              <div className="contact-banner">
                <div className="container">
                  <div className="row">
                    <p id="breadcrumbs">
                      <span
                        ><span
                          ><a className="my-class" href="/"
                            >Home</a
                          ></span
                        >
                        <span className="breadcrumbs-separator"></span>
                        <span
                          ><a className="my-class" href="../index.html"
                            >Contact Us</a
                          ></span
                        >
                        <span className="breadcrumbs-separator"></span>
                        <span className="breadcrumb_last" aria-current="page"
                          >Admissions Tours</span
                        ></span
                      >
                    </p>
                    <div className="offset-lg-1 col-lg-9">
                      <h2 className="title title--lg">
                      Experience Global Hub School Karachi firsthand! We welcome you to visit our campus, explore our state-of-the-art facilities, and meet our dedicated team. Schedule a visit to see how we are shaping the future, one student at a time.
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
                            (+44) 01753 370 611
                            <a
                              href="../../cdn-cgi/l/email-protection.html"
                              className="__cf_email__"
                              data-cfemail="18797c75716b6b7177766b587d6c77767b7774747d7f7d36776a7f366d73"
                              >[email&#160;protected]</a
                            >
                          </p>
                          <hr />
                        </div>
                        <div className="col-md-6 offset-md-1">
                          <div className="contacts-list"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="c-scrolldown">
                  <a href="#banner-bottom" className="scroll-to">
                    <small>Further information</small>
                    <div className="c-line"></div>
                  </a>
                </div>
              </div>
              <div id="banner-bottom"></div>
            </article>
          </div>
            <Footer/>
        </div>
      </div>
    </main>
  </div>
  </>
  )
}

export default VisitUs
