import React from "react";
import "./footer.css";
import AfterScrollingSection from "./AfterScrollingSection";
import ScrollingImagesSection from "./ScrollingImageSection";
import Slider from "react-slick";

const ScrollingDivs = () => {
  const banners = [
    {
      imageSrc:
        "/assets/11/un.png",
      alt: "Image description",
      link: "OutsideClassroom/Boarding",
      description: "Boarding nurtures personal growth and",
      highlight: "lifelong friendships",
      category: "Boarding",
    },
    {
      imageSrc:
        "/assets/11/447428859_871318545031272_3584749452741300615_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/Sport",
      description: "Championing ",
      highlight: "Athletic Spirit",
      category: "Sports",
    },
    {
      imageSrc:
        "/assets/11/441068841_857863996376727_8535097873388575013_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/CoCurriculum",
      description: "Curiosity-driven",
      highlight: "minds,growing through every stage.",
      category: "Lifelong Learners",
    },
    {
      imageSrc:
        "/assets/11/176550934_2788094451437356_5384273365940172592_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/CoCurriculum",
      description: "Providing a stage for",
      highlight: "talent to shine",
      category: "Drama",
    },
    {
      imageSrc:
        "/assets/11/464867546_990906286405830_497001862446222814_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/CoCurriculum",
      description:"With 40+ clubs and societies, fostering passion",
      highlight: "leadership, and personal growth",
      category: "Co-Curriculum at GHS",
    },
    {
      imageSrc:
        "/assets/11/461991582_3684004391846353_7501919082942478913_n.jpg",
      alt: "Image description",
      link: "InsideClassroom/AcadmicFacilities",
      description: "Fostering a lifelong appreciation of",
      highlight: "independent thinking and learning",
      category: "Academic",
    },
  ];
  const BannerCarousel = ({ banners }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
      <div >
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div className="banner__image" key={index}>
              <a href={banner.link || ""} className="banner__image--link">
                <img
                  decoding="async"
                  src={banner.imageSrc}
                  alt={banner.alt || "Banner image"}
                />
                <div className="banner__image--hover">
                  <div className="banner__image--hover-inner">
                    <p className="text">
                      {banner.description}{" "}
                      <span className="text-secondary" style={{marginLeft: "0.2em"}}>{banner.highlight}</span>
                    </p>
                    <div className="bottom">
                      <p>{banner.category}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
                <section className="home-block-banner js-home-banner-full">
                  <div className="js-home-banner-pin">
                    <div className="banner__container banner--desktop js-home-banner-container">
                      <div className="banner-col-1">
                        <div className="banner-text js-home-banner-text">
                          <h1 >GHS Karachi.</h1>
                        </div>
                        <div className="banner--column banner--column-1 js-home-banner-col-1">
                          <div className="banner__image landscape">
                            <a href="/OutsideClassroom/Sport" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/447428859_871318545031272_3584749452741300615_n.jpg"
                                alt="Image description"
                              />

                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  Championing 
                                    <span className="text-secondary"  style={{marginLeft: "0.2em"}}>
                                    Athletic Spirit
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Sports</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/InsideClassroom/AcadmicCurriculum" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/461991582_3684004391846353_7501919082942478913_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Fostering a lifelong appreciation of
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      independent thinking and learning
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Academic</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image portrait">
                            <a href="/OutsideClassroom/CoCurriculum" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/441068841_857863996376727_8535097873388575013_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  Curiosity-driven
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                    minds,growing through every stage.
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Lifelong Learners</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/AboutUs/OurHistory" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/Hompage Slider - Girls.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Empowering students 
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                    to become tomorrow's leaders
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Leaders of Tomorrow</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="banner--column banner--column-2 js-home-banner-col-2">
                          <div className="banner__image landscape">
                            <a href="/OutsideClassroom/CommunityEngagement" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/461968913_3684004521846340_906275821340010015_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    At the vanguard of
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      innovation in education
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Research and Innovation</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image portrait">
                            <a href="/OutsideClassroom/EnvironmentalEducation" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/90172896_2479257448987726_2746791719352664064_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  Providing a prestigious riding 
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                    experience for horseback riding enthusiasts
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Elite Equestrian Program</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image portrait">
                            <a href="/AboutUs/OurPurpose" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/176550934_2788094451437356_5384273365940172592_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Providing a stage for
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      talent to shine
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Drama</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/OutsideClassroom/Boarding" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/un.png"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Boarding nurtures personal growth and
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      lifelong friendships
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Boarding</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="banner-col-3">
                        <div className="banner-text js-home-banner-text" >
                          Onwards & Upwards.
                        </div>
                        <div className="banner--column banner--column-3 js-home-banner-col-3">
                          <div className="banner__image portrait">
                            <a href="/OutsideClassroom/CommunityEngagement" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/464867546_990906286405830_497001862446222814_n.jpg"
                                alt="Image description"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  With 40+ clubs and societies, fostering passion,
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                    leadership, and personal growth
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Co-Curriculum at GHS</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image portrait">
                            <a href="/AboutUs/OurStrategy" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/418152059_799137295582731_343385202662830228_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  Engaging in events 
                                  <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                  that inspire connections and celebrate diversity.
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Vibrant Campus Life</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/InsideClassroom/AcadmicFacilities" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/417418234_794902259339568_481177711424559643_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  Empowering students 
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                    to imagine, innovate, and create.
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Fostering Creative Minds</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/OutsideClassroom/PastoralCare" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/461848694_3683395301907262_9150366868156804753_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                  Nurturing minds 
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                    and hearts for lasting growth.
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Student Wellbeing</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="banner--mobile">
                    <div className="banner-text">
                      <h1>
                        GHS Karachi.
                        <br />
                        Onwards & Upwards.
                      </h1>
                    </div>
                    <BannerCarousel banners={banners} />
                  </div>
                </section>
                <AfterScrollingSection />
                <ScrollingImagesSection />
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScrollingDivs;
