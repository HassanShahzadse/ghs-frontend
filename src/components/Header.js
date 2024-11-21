import React, { useState } from "react";
import "./footer.css";

const Header = () => {
  const banners1 = [
    {
      href: "outside-the-classroom/sport/index.html",
      src: "/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg",
      alt: "Sport image",
      text: "An unparalleled",
      highlight: "breadth of sport on offer",
      category: "Sport",
      layout: "landscape",
    },
    {
      href: "inside-the-classroom/the-academic-curriculum/index.html",
      src: "/assets/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-1024x683.jpg",
      alt: "Academic image",
      text: "Fostering a lifelong appreciation of",
      highlight: "independent thinking and learning",
      category: "Academic",
      layout: "landscape",
    },
    {
      href: "outside-the-classroom/music/index.html",
      src: "/assets/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpg",
      alt: "Music image",
      text: "World class",
      highlight: "performance venues",
      category: "Music",
      layout: "landscape",
    },
    {
      href: "about-us/our-public-museums/index.html",
      src: "/assets/11/2d4e9b6b725bfde055ab15141b5b6d65-1024x683.jpg",
      alt: "Museums image",
      text: "Cherishing our",
      highlight: "traditions and heritage",
      category: "Museums and Collections",
      layout: "landscape",
    },
    // Add more objects here for additional banners
  ];
  const banners2 = [
    {
      href: "eton-outwards/research-and-innovation/index.html",
      src: "/assets/11/8ec0c569a73ab17b328821b63782297b-scaled-1-1024x683.jpg",
      alt: "",
      highlight: "At the vanguard of innovation in education",
      text: "Cherishing our",
      category: "Research and Innovation",
      layout: "landscape",
    },
    {
      href: "outside-the-classroom/environmental-education/index.html",
      src: "/assets/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg",
      alt: "",
      highlight: "Committed to sustainability and environmental action",
      text: "Cherishing our",
      category: "Environmental Education",
      layout: "landscape",
    },
    {
      href: "outside-the-classroom/drama/index.html",
      src: "/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg",
      alt: "",
      highlight: "Providing a stage for talent to shine",
      text: "Cherishing our",
      category: "Drama",
      layout: "landscape",
    },
    {
      href: "college-life/boarding/index.html",
      src: "/assets/11/779f14aec30378bd9abb86d2f8256787-scaled-1-1024x576.jpg",
      alt: "",
      highlight: "Boarding nurtures personal growth and lifelong friendships",
      text: "Cherishing our",
      category: "Boarding",
      layout: "landscape",
    },
  ];

  const banners3 = [
    {
      href: "outside-the-classroom/societies-programme/index.html",
      src: "/assets/11/79ac020ae9119dc4ade0191b064e42fa-1024x682.png",
      alt: "",
      highlight:
        "80+ societies run regular lectures, workshops and seminars with world-renowned experts",
      text: "Cherishing our",
      category: "Societies",
      layout: "landscape",
    },
    {
      href: "about-us/our-outward-facing-work-2/index.html",
      src: "/assets/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg",
      alt: "",
      highlight: "Ambitious cross-sector collaboration and research",
      text: "Cherishing our",
      category: "Partnerships",
      layout: "landscape",
    },
    {
      href: "support-us/areas-for-support/eton-star-schools-programme/index.html",
      src: "/assets/11/Image-15-1024x683.jpg",
      alt: "",
      highlight: "Building partnerships hubs and three sixth form colleges",
      text: "Cherishing our",
      category: "Eton Star Schools Programme",
      layout: "landscape",
    },
    {
      href: "college-life/pastoral-care/index.html",
      src: "/assets/11/Baldwin_s_Bec-27-scaled-1-1024x576.jpg",
      alt: "",
      highlight:
        "Exceptional pastoral care is at the heart of an Eton education",
      text: "Cherishing our",
      category: "Pastoral Care",
      layout: "landscape",
    },
  ];

  const BannerColumn = ({ banners }) => {
    return (
      <div className="banner--column">
        
        {banners.map((banner, index) => (
          <div key={index} className={`banner__image ${banner.layout}`}>
            <a href={banner.href} className="banner__image--link">
              <img
                decoding="async"
                src={banner.src}
                alt={banner.alt}
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    {banner.text}{" "}
                    <span className="text-secondary">{banner.highlight}</span>
                  </p>
                  <div className="bottom">
                    <p>{banner.category}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="home-block-banner js-home-banner-full">
      <div className="js-home-banner-pin">
        <div className="banner__container banner--desktop js-home-banner-container">
          <div className="banner-col-1">
            <div className="banner-text js-home-banner-text">
              <h1>Honouring Tradition.</h1>
            </div>
            {/* <div className="banner--column banner--column-1 js-home-banner-col-1">
            <BannerColumn banners={banners1} />
            </div> */}
            <div class="banner--column banner--column-1 js-home-banner-col-1">
            <BannerColumn banners={banners1} />
            </div>
          </div>
          <div>
            <div className="banner--column banner--column-2 js-home-banner-col-2">
              <BannerColumn banners={banners2} />
            </div>
          </div>
          <div className="banner-col-3">
            <div className="banner-text js-home-banner-text">
              Inspiring Change.
            </div>
            <div className="banner--column banner--column-3 js-home-banner-col-3">
              <BannerColumn banners={banners3} />
            </div>
          </div>
        </div>
      </div>
      <div className="banner--mobile">
        <div className="banner-text">
          <h1>
            Honouring Tradition.
            <br />
            Inspiring Change.
          </h1>
        </div>
        <div className="mobile-banner-carousel">
          <div className="banner__image">
            <a
              href="college-life/boarding/index.html"
              className="banner__image--link"
            >
              <img
                decoding="async"
                src="/assets/11/779f14aec30378bd9abb86d2f8256787-scaled-2-1024x576.jpg"
                alt=""
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    Boarding nurtures personal growth and{" "}
                    <span className="text-secondary">lifelong friendships</span>
                  </p>
                  <div className="bottom">
                    <p>Boarding</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="banner__image">
            <a
              href="outside-the-classroom/sport/index.html"
              className="banner__image--link"
            >
              <img
                decoding="async"
                src="/assets/11/8d135f425b4e0766950e1c120964d11b-scaled-2-1024x683.jpg"
                alt=""
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    An unparalleled{" "}
                    <span className="text-secondary">
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

          <div className="banner__image">
            <a
              href="outside-the-classroom/music/index.html"
              className="banner__image--link"
            >
              <img
                decoding="async"
                src="/assets/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-1024x683.jpg"
                alt=""
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    World class{" "}
                    <span className="text-secondary">performance venues</span>
                  </p>
                  <div className="bottom">
                    <p>Music</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="banner__image">
            <a
              href="outside-the-classroom/drama/index.html"
              className="banner__image--link"
            >
              <img
                decoding="async"
                src="/assets/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-1024x819.jpg"
                alt=""
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    Providing a stage for{" "}
                    <span className="text-secondary">talent to shine</span>
                  </p>
                  <div className="bottom">
                    <p>Drama</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="banner__image">
            <a
              href="outside-the-classroom/societies-programme/index.html"
              className="banner__image--link"
            >
              <img
                decoding="async"
                src="/assets/11/79ac020ae9119dc4ade0191b064e42fa-1-1024x682.png"
                alt=""
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    80+ societies run regular lectures, workshops and seminars
                    with{" "}
                    <span className="text-secondary">
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

          <div className="banner__image">
            <a
              href="inside-the-classroom/the-academic-curriculum/index.html"
              className="banner__image--link"
            >
              <img
                decoding="async"
                src="/assets/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1024x683.jpg"
                alt=""
                className=""
              />
              <div className="banner__image--hover">
                <div className="banner__image--hover-inner">
                  <p className="text">
                    Fostering a lifelong appreciation of{" "}
                    <span className="text-secondary">
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
        </div>
      </div>
    </section>
  );
};

export default Header;
