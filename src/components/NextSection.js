import React,{useState,useEffect} from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const NextSection = () => {
  const [fontSize, setFontSize] = useState('100px');
  
  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(window.innerWidth < 768 ? '65px' : '100px');
    };
  
    window.addEventListener('resize', updateFontSize);
    updateFontSize();
  
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  
  return (
    <section
                className="pt-5"
                data-color="white"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="" style={{marginBottom:"100px",marginTop:"50px"}}>
                        <div>
                          <span>
                            <h2 className="title title--xl" style={{fontSize}}>Next up&#8230;</h2>
                          </span>
                        </div>
                      </div>

                      <div className="fade-in__child fade-in--3">
                          {/* <div className="news-item">
                            <div className="news-item__img">
                              <div className="js-image-move">
                                <span className="js-image-move__inner object-fit object-fit--cover">
                               

                                  <img
                                    decoding="async"
                                    className="moving-img"
                                    src="/assets/11/461968913_3684004521846340_906275821340010015_n.jpg"  />
                                    
                                </span>
                              </div>
                              <div className="corner-category">
                                <div className="corner-category__inner">
                                  New
                                </div>
                              </div>
                            </div>
                            <div className="news-item__content background-grey">
                              <h3 className="title title--sm">
                                 The  Labs
                              </h3>
                              <div className="post-meta">
                                <p>November 2024</p>

                                <p>Learning</p>
                              </div>
                            </div>
                          </div> */}
                           <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/Dorm block- quadrangle.JPG"     />
                            </div>
                          </div>
                      
                          {/* <Link to="/AboutUs/OurPurpose"> */}
                          <h3 className="title title--md" style={{ fontFamily: 'Nunito Sans' }}>Our Purpose</h3>
                          {/* </Link> */}
                          <a
                            href="/AboutUs/OurPurpose"
                            className="cover-link"
                          >

                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="fade-in__child fade-in--2">
                        {/* <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/Dorm block- quadrangle.JPG"     />
                            </div>
                          </div>
                      
                          <h3 className="title title--md">Our Purpose</h3>
                          <a
                            href="/AboutUs/OurPurpose"
                            className="cover-link"
                          >

                          </a>
                        </div> */}
                        <div className="teaser-item">
                          <div
                            className="teaser-item__inner"
                            // style="background-image:url()"
                            image-background-scroll
                          >
                             <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/DSC_2159.JPG"     />
                            </div>
                          </div>
                          {/* <Link to="/OutsideClassroom/Sport">  */}
                           <h3 className="title title--md" style={{ fontFamily: 'Nunito Sans' }}>Sport</h3>
                           {/* </Link> */}
                          <a href="/OutsideClassroom/Sport" className="cover-link"></a>
                        </div>
                      </div>
                      <div className="fade-in__child fade-in--2">
                        <div className="teaser-item">
                          <div className="js-image-move">
                            <div className="js-image-move__inner object-fit object-fit--cover">
                              <img
                                decoding="async"
                                src="/assets/11/461991582_3684004391846353_7501919082942478913_n.jpg"     />
                            </div>
                          </div>
                          <a
                            href="https://app.ghskarachi.com/student/online/reg2" 
                            target="blank"
                            className="cover-link"
                          >
                             <h3 className="title title--md" style={{ fontFamily: 'Nunito Sans' }}>Apply Online</h3>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  );
};

export default NextSection;
