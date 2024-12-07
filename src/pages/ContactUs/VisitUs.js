import React from 'react'
import "../../components/footer.css"

const VisitUs = () => {
  return (
	  <>
              <div className="pt-5 visit-us-main" style={{fontFamily: 'Nunito Sans'}}>
                <div className="container">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-9 pt-5 pt-md-0">
                    <h1 className="banner__title title color-white title--xl2 ml-0" style={{color:"#223c59" , paddingTop:"30px"}}>
                            Visit Us
                          </h1>
                      <h2 className="title title--lg py-3 pt-md-0">
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
                        <strong>  Please get in touch to schedule a visit to GHS Karachi:</strong></p>
                        <a href="tel:+92 324 4717777">  <p>+92 324 4717777</p> </a>
                        <a href="mailto:info@ghskarachi.com"><p>info@ghskarachi.com</p></a>

<p>Hub Dam Road (5 KM from Hamdard University), Karachi, Sindh, Pakistan</p>
                          <hr />
                        </div>
                        <div className="col-md-6 offset-md-1">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
    <div className='map-visit-us'>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451.5055541637115!2d67.0252268!3d25.1341886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb35d392a08bce5%3A0xaa4aec05dc637295!2s42PF%2B7JG%2C%20Hub%20Dam%20Rd%D8%8C%20near%20Hamdard%20University%2C%20Gadap%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1732990375720!5m2!1sen!2s" width="100%" height="450px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
                </div>
              </div>
  </>
  )
}

export default VisitUs
