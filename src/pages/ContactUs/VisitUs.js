import React from 'react'
import Footer from '../../components/footer'
import "../../components/footer.css"
import "../../components/footer.css"


const VisitUs = () => {
  return (
	  <>
              <div className="pt-5" style={{marginLeft:"100px"}}>
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
                          <h3 className="title title--md">Global Hub School</h3>
                          <hr />
                          <p>
                          Hub Dam Road (5 KM from Hamdard University), Karachi, Sindh, Pakistan
                          </p>
                          <hr />
                        </div>
                        <div className="col-md-6 offset-md-1">
                          
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451.5055541637115!2d67.0252268!3d25.1341886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb35d392a08bce5%3A0xaa4aec05dc637295!2s42PF%2B7JG%2C%20Hub%20Dam%20Rd%D8%8C%20near%20Hamdard%20University%2C%20Gadap%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1732990375720!5m2!1sen!2s" width="150%" height="450px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <Footer/>
              </div>
  </>
  )
}

export default VisitUs
