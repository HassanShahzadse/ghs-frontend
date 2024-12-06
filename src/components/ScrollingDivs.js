import React from "react";
import "./footer.css";
import AfterScrollingSection from "./AfterScrollingSection";
import ScrollingImagesSection from "./ScrollingImageSection";
import Slider from "react-slick";

const ScrollingDivs = () => {
  const banners = [
    {
      imageSrc:
        "/assets/11/277148812_130958129502114_7861657689476040255_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/Boarding",
      description: "Boarding nurtures personal growth and",
      highlight: "lifelong friendships",
      category: "Boarding",
    },
    {
      imageSrc:
        "/assets/11/275054573_122711713660089_1312944415058859257_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/Sport",
      description: "An unparalleled",
      highlight: "breadth of sport on offer",
      category: "Sport",
    },
    {
      imageSrc:
        "/assets/11/265025219_2949755348604598_8252143876884700374_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/CoCurriculum",
      description: "World class",
      highlight: "performance venues",
      category: "Music",
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
        "/assets/11/176299917_2788094574770677_7086346180454366200_n.jpg",
      alt: "Image description",
      link: "OutsideClassroom/CoCurriculum",
      description:
        "80+ societies run regular lectures, workshops and seminars with",
      highlight: "world-renowned experts",
      category: "Societies",
    },
    {
      imageSrc:
        "/assets/11/176074127_2788094911437310_1793668116840003786_n.jpg",
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
                                src="/assets/11/DSC_2159.JPG"
                                alt="Image description"
                              />

                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    An unparalleled
                                    <span className="text-secondary"  style={{marginLeft: "0.2em"}}>
                                      breadth of sport on offer
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Sport</p>
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
                                src="/assets/11/DSC_4385.JPG"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    World class
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      performance venues
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Music</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/AboutUs/OurHistory" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/DSC_2159.JPG "
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Cherishing our
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      traditions and heritage
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Museums and Collections</p>
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
                                src="/assets/11/71518606_2324152407831565_4640834380917374976_n.jpg"
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
                                src="/assets/11/462131386_3683986411848151_2259247329909775880_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Committed to
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      sustainability and environmental action
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Environmental Education</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image portrait">
                            <a href="/AboutUs/OurPurpose" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/461991582_3684004391846353_7501919082942478913_n.jpg"
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
                                src="/assets/11/461960192_3683991158514343_4451415336598492767_n.jpg"
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
                                src="/assets/11/414482271_390719683519003_6561115105494497189_n.jpg"
                                alt="Image description"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    80+ societies run regular lectures,
                                    workshops and seminars with
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      world-renowned experts
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Societies</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image portrait">
                            <a href="/AboutUs/OurStrategy" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/301027547_172020865395840_3346290675082538010_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Ambitious cross-sector
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      collaboration and research
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Partnerships</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/InsideClassroom/AcadmicFacilities" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/300504071_172020888729171_3528704732704868454_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Building partnerships hubs and
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      three sixth form colleges
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>GHS Schools Programme</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="banner__image landscape">
                            <a href="/OutsideClassroom/PastoralCare" className="banner__image--link">
                              <img
                                decoding="async"
                                src="/assets/11/285821649_151499194114674_2299889885274654907_n.jpg"
                                alt="Image description"
                              />
                              <div className="banner__image--hover">
                                <div className="banner__image--hover-inner">
                                  <p className="text">
                                    Exceptional pastoral care is at
                                    <span className="text-secondary" style={{marginLeft: "0.2em"}}>
                                      the heart of an GHSeducation
                                    </span>
                                  </p>
                                  <div className="bottom">
                                    <p>Pastoral Care</p>
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
