// import React, { useState } from "react";
import "./footer.css";

const Header = () => {
  const banners1 = [
    {
      href: "outside-the-classroom/sport/index.html",
      src: "/assets/11/IMG_0073.JPG",
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
    <div id="page-wrap" className="">
      <div className="top-nav">
        <div className="hamburger">
          <div className="nav-icon">
            <div></div>
          </div>
          <span>Menu</span>
        </div>

        <a href="index.html">
          <div className="top-nav__logo">
            <img
              fetchpriority="high"
              src="wp-content/themes/eton-college/assets/img/logo/crest.svg"
            />
          </div>
        </a>

        <div className="top-nav__search-contact">
          <div className="top-nav__search">
            <div className="top-nav__search-wrapper">
              <form
                action="https://www.etoncollege.com"
                id="searchform"
                className="search"
                method="get"
              >
                <div className="search-icon">
                  <input
                    type="search"
                    id="s"
                    name="s"
                    value=""
                    placeholder="Search..."
                  />
                  <input type="submit" value="Search" id="searchsubmit" />
                  <div className="top-nav__search-trigger"></div>
                </div>
              </form>
            </div>
          </div>
          <div
            id="search-full-screen"
            className="menu-search-form-container mfp-hide white-popup-block my-mfp-zoom-in"
          >
            <form
              action="https://www.etoncollege.com/"
              id="searchform"
              method="get"
            >
              <div className="inputs-container">
                <label for="s" className="sr-only">
                  Search for:
                </label>
                <input
                  type="search"
                  id="s"
                  name="s"
                  value=""
                  placeholder="Enter a keyword"
                  required
                />

                <input
                  className="sr-only"
                  type="submit"
                  value="Search"
                  id="searchsubmit"
                />
              </div>
              <footer className="mt-20">
                Hit enter to search
                <span className="optional">or ESC to close</span>
              </footer>
            </form>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a
              href="#search-full-screen"
              className="search-box-button magnific-full-screen-popup mb-10"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <circle
                    cx="11.8548"
                    cy="11.8548"
                    r="11.2298"
                    transform="matrix(-1 0 0 1 30.9727 0)"
                    stroke="#223C59"
                    stroke-width="1.25"
                  />
                  <path
                    d="M10.6504 20.3225L1.30575 29.6672"
                    stroke="#223C59"
                    stroke-width="1.25"
                    stroke-linecap="square"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="top-nav__contact">
            <a href="contact-us/contact-details/index.html">
              <img src="wp-content/themes/eton-college/assets/img/icons/phone.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="search_mobile">
        <form
          action="https://www.etoncollege.com/"
          id="searchform"
          className="search"
          method="get"
        >
          <div className="search-icon">
            <input
              type="search"
              id="s"
              name="s"
              value=""
              placeholder="Search..."
            />
            <input type="submit" value="Search" id="searchsubmit" />
          </div>
        </form>
      </div>

      <nav className="nav-menu">
        <div>
          <div className="title title--sm">Main Menu</div>

          <ul className="nav__top-level" id="main-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="parent-page">
              <a href="about-us/index.html" id="5" className="">
                About Us
              </a>
            </li>
            <li className="parent-page">
              <a href="inside-the-classroom/index.html" id="6" className="">
                Inside the Classroom
              </a>
            </li>
            <li className="parent-page">
              <a href="outside-the-classroom/index.html" id="7" className="">
                Outside the Classroom
              </a>
            </li>
            <li className="parent-page">
              <a href="college-life/index.html" id="8" className="">
                College Life
              </a>
            </li>
            <li className="parent-page">
              <a href="eton-outwards/index.html" id="9" className="">
                Eton Outwards
              </a>
            </li>
            <li className="parent-page">
              <a href="admissions/index.html" id="11" className="">
                Admissions
              </a>
            </li>
            <li className="parent-page">
              <a href="support-us/index.html" id="10" className="">
                Support Us
              </a>
            </li>
            <li className="parent-page">
              <a href="news-and-diary/index.html" id="12" className="">
                News and Diary
              </a>
            </li>
            <li className="parent-page">
              <a href="contact-us/index.html" id="13" className="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="menu-footer-menu-container">
            <ul id="menu-footer-menu" className="menu">
              <li
                id="menu-item-2125"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2125"
              >
                <a href="indexb83c.html?page_id=160">ETON COLLEGE</a>
              </li>
              <li
                id="menu-item-194"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-194"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://my.etoncollege.com/login"
                >
                  PARENT PORTAL
                </a>
              </li>
              <li
                id="menu-item-195"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-195"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://cirl.etoncollege.com/"
                >
                  THE TONY LITTLE CENTRE (CIRL)
                </a>
              </li>
              <li
                id="menu-item-200"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-200"
              >
                <a target="_blank" rel="noopener" href="https://etonx.com/">
                  ETONX
                </a>
              </li>
              <li
                id="menu-item-196"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-196"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://collections.etoncollege.com/"
                >
                  COLLEGE COLLECTIONS
                </a>
              </li>
              <li
                id="menu-item-197"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-197"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://eton.alumni-online.com/"
                >
                  OEA ONLINE
                </a>
              </li>
              <li
                id="menu-item-199"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-199"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.dorneylake.co.uk/"
                >
                  FACILITIES FOR HIRE
                </a>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/eton_college?lang=en">
              <img
                src="wp-content/themes/eton-college/assets/img/social/twitter_circle.svg"
                alt="twitter Icon"
              />
            </a>
            <a href="https://www.instagram.com/eton.college/">
              <img
                src="wp-content/themes/eton-college/assets/img/social/instagram_circle.svg"
                alt="instagram Icon"
              />
            </a>
            <a href="https://www.facebook.com/Eton-College-117613119649208">
              <img
                src="wp-content/themes/eton-college/assets/img/social/facebook_circle.svg"
                alt="facebook Icon"
              />
            </a>
            <a href="https://www.linkedin.com/school/62841">
              <img
                src="wp-content/themes/eton-college/assets/img/social/linkedin_circle.svg"
                alt="linkedin Icon"
              />
            </a>
            <a href="https://vimeo.com/user106129672">
              <img
                src="wp-content/themes/eton-college/assets/img/social/vimeo_circle.svg"
                alt="vimeo Icon"
              />
            </a>
          </div>
        </div>
      </nav>

      <div className="sub-menu-wrapper">
        <div className="sub-menu-wrap" id="sub_5">
          <div className="title title--sm">About Us</div>
          <ul>
            <li className="menu-item">
              <a href="about-us/our-purpose/index.html">Our Purpose</a>
            </li>
            <li className="menu-item">
              <a href="about-us/our-strategy/index.html">Our Strategy</a>
            </li>
            <li className="menu-item">
              <a href="about-us/meet-the-head-master/index.html">
                Meet the Head Master
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/our-outward-facing-work-2/index.html">
                Our Outward Facing Work
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/our-research-centre/index.html">
                Our Research Centre
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/our-history/index.html">Our History</a>
            </li>
            <li className="menu-item">
              <a href="about-us/leadership-team/index.html">
                Our Leadership Team
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/our-governing-body/index.html">
                Our Governing Body
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/our-public-museums/index.html">
                Our Museums and Collections
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/old-etonian-association/index.html">
                Old Etonian Association
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/policies-and-reports/index.html">
                Policies and Reports
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/employment-opportunities/index.html">
                Employment Opportunities
              </a>
            </li>
            <li className="menu-item">
              <a href="about-us/eton-glossary/index.html">Eton Glossary</a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_6">
          <div className="title title--sm">Inside the Classroom</div>
          <ul>
            <li className="menu-item">
              <a href="inside-the-classroom/the-academic-curriculum/index.html">
                The Academic Curriculum
              </a>
            </li>
            <li className="menu-item">
              <a href="inside-the-classroom/evidence-led-innovation/index.html">
                Evidence-led Innovation
              </a>
            </li>
            <li className="menu-item">
              <a href="inside-the-classroom/learning-support/index.html">
                Learning Support
              </a>
            </li>
            <li className="menu-item">
              <a href="inside-the-classroom/digital-education/index.html">
                Digital Education
              </a>
            </li>
            <li className="menu-item">
              <a href="inside-the-classroom/academic-facilities/index.html">
                Academic Facilities
              </a>
            </li>
            <li className="menu-item">
              <a href="inside-the-classroom/exam-results/index.html">
                Exam Results
              </a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_7">
          <div className="title title--sm">Outside the Classroom</div>
          <ul>
            <li className="menu-item">
              <a href="outside-the-classroom/our-ethos/index.html">
                The Co-Curriculum
              </a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/art/index.html">Art</a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/drama/index.html">Drama</a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/music/index.html">Music</a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/sport/index.html">Sport</a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/sports-fixtures-teams/index.html">
                Sports Fixtures & Teams
              </a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/career-education/index.html">
                Career Education
              </a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/community-engagement/index.html">
                Community Engagement
              </a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/ccf/index.html">CCF</a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/societies-programme/index.html">
                Societies Programme
              </a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/outdoor-education/index.html">
                Outdoor Education
              </a>
            </li>
            <li className="menu-item">
              <a href="outside-the-classroom/environmental-education/index.html">
                Environmental Education
              </a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_8">
          <div className="title title--sm">College Life</div>
          <ul>
            <li className="menu-item">
              <a href="college-life/pastoral-care/index.html">Pastoral Care</a>
            </li>
            <li className="menu-item">
              <a href="college-life/boarding/index.html">Boarding</a>
            </li>
            <li className="menu-item">
              <a href="college-life/our-tutor-system/index.html">
                Our Tutor System
              </a>
            </li>
            <li className="menu-item">
              <a href="college-life/inclusion-education/index.html">
                Inclusion Education
              </a>
            </li>
            <li className="menu-item">
              <a href="college-life/pshee-programme/index.html">
                SPHERE Programme
              </a>
            </li>
            <li className="menu-item">
              <a href="college-life/religious-provision-assemblies/index.html">
                Religious Provision
              </a>
            </li>
            <li className="menu-item">
              <a href="college-life/assemblies/index.html">Assemblies</a>
            </li>
            <li className="menu-item">
              <a href="college-life/chapel/index.html">Chapel</a>
            </li>
            <li className="menu-item">
              <a href="college-life/after-eton/index.html">After Eton</a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_9">
          <div className="title title--sm">Eton Outwards</div>
          <ul>
            <li className="menu-item">
              <a href="eton-outwards/broadening-access/index.html">
                Broadening Access
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/eton-connect-core-partnerships/index.html">
                Eton Connect Core Partnerships
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/eton-connect-local-partnerships/index.html">
                Eton Connect Local Partnerships
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/research-and-innovation/index.html">
                Research and Innovation
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/collections-outreach/index.html">
                Collections Outreach
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/service-learning/index.html">
                Service Learning
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/summer-schools/index.html">
                Summer Schools
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/eton-action/index.html">Eton Action</a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/eton-connect-boxes/index.html">
                Eton Connect Boxes
              </a>
            </li>
            <li className="menu-item">
              <a href="eton-outwards/digital-learning-hub/index.html">
                Digital Learning Hub
              </a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_11">
          <div className="title title--sm">Admissions</div>
          <ul>
            <li className="menu-item">
              <a href="admissions/entry-to-eton/index.html">Entry To Eton</a>
            </li>
            <li className="menu-item">
              <a href="admissions/year-9-13/index.html">Year 9 (13+) Entry</a>
            </li>
            <li className="menu-item">
              <a href="admissions/entry-sixth-form-16entry/index.html">
                Sixth Form (16+) Entry
              </a>
            </li>
            <li className="menu-item">
              <a href="admissions/financial-aid/index.html">Financial Aid</a>
            </li>
            <li className="menu-item">
              <a href="admissions/scholarships-and-awards/index.html">
                Scholarships and Awards
              </a>
            </li>
            <li className="menu-item">
              <a href="admissions/fees/index.html">Fees</a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_10">
          <div className="title title--sm">Support Us</div>
          <ul>
            <li className="menu-item">
              <a href="support-us/areas-for-support/index.html">
                Why We Need Your Support
              </a>
            </li>
            <li className="menu-item">
              <a href="support-us/ways-to-give/index.html">Ways to Give</a>
            </li>
            <li className="menu-item">
              <a href="support-us/legacies/index.html">Legacy Giving</a>
            </li>
            <li className="menu-item">
              <a href="support-us/recognition/index.html">
                Recognising Your Support
              </a>
            </li>
            <li className="menu-item">
              <a href="support-us/contact-us-2/index.html">Contact Us</a>
            </li>
            <li className="menu-item">
              <a href="support-us/update-your-details/index.html">
                Update Your Details
              </a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_12">
          <div className="title title--sm">News and Diary</div>
          <ul>
            <li className="menu-item">
              <a href="news-and-diary/the-saturday-podcast/index.html">
                Podcasts
              </a>
            </li>
            <li className="menu-item">
              <a href="news-and-diary/school-news/index.html">School News</a>
            </li>
            <li className="menu-item">
              <a href="news-and-diary/diary/index.html">Diary</a>
            </li>
            <li className="menu-item">
              <a href="news-and-diary/school-blog/index.html">School Blog</a>
            </li>
            <li className="menu-item">
              <a href="news-and-diary/term-dates/index.html">Term Dates</a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_13">
          <div className="title title--sm">Contact Us</div>
          <ul>
            <li className="menu-item">
              <a href="contact-us/contact-details/index.html">
                Contact Details
              </a>
            </li>
            <li className="menu-item">
              <a href="contact-us/admissions-tours/index.html">
                Admissions Tours
              </a>
            </li>
            <li className="menu-item">
              <a href="contact-us/historic-tours/index.html">Historic Tours</a>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
      </div>

      <div id="content-wrap">
        <main className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <article
                  className="
																		"
                >
                  <section className="home-block-banner js-home-banner-full">
                    <div className="js-home-banner-pin">
                      <div className="banner__container banner--desktop js-home-banner-container">
                        <div className="banner-col-1">
                          <div className="banner-text js-home-banner-text">
                            <h1>Honouring Tradition.</h1>
                          </div>
                          <div className="banner--column banner--column-1 js-home-banner-col-1">
                            <div className="banner__image landscape">
                              <a
                                href="outside-the-classroom/sport/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-1-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      An unparalleled
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

                            <div className="banner__image landscape">
                              <a
                                href="inside-the-classroom/the-academic-curriculum/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-1-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Fostering a lifelong appreciation of
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

                            <div className="banner__image portrait">
                              <a
                                href="outside-the-classroom/music/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-1-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      World class
                                      <span className="text-secondary">
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
                              <a
                                href="about-us/our-public-museums/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2d4e9b6b725bfde055ab15141b5b6d65-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Cherishing our
                                      <span className="text-secondary">
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
                              <a
                                href="eton-outwards/research-and-innovation/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/8ec0c569a73ab17b328821b63782297b-scaled-1-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      At the vanguard of
                                      <span className="text-secondary">
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
                              <a
                                href="outside-the-classroom/environmental-education/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/230223b249a163f3c4e12bce538aaa76-scaled-1-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Committed to
                                      <span className="text-secondary">
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
                              <a
                                href="outside-the-classroom/drama/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1024x819.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-300x240.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-768x614.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-1536x1229.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-2048x1638.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-2000x1600.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-1-400x320.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Providing a stage for
                                      <span className="text-secondary">
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
                              <a
                                href="college-life/boarding/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-1024x576.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-1024x576.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-300x169.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-768x432.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-1536x864.jpeg  1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-2048x1152.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-2000x1125.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-1-400x225.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Boarding nurtures personal growth and
                                      <span className="text-secondary">
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
                          <div className="banner-text js-home-banner-text">
                            Inspiring Change.
                          </div>
                          <div className="banner--column banner--column-3 js-home-banner-col-3">
                            <div className="banner__image portrait">
                              <a
                                href="outside-the-classroom/societies-programme/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1024x682.png"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1024x682.png  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-300x200.png    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-768x512.png    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1536x1024.png 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-400x267.png    400w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa.png           2000w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      80+ societies run regular lectures,
                                      workshops and seminars with
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

                            <div className="banner__image portrait">
                              <a
                                href="about-us/our-outward-facing-work-2/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1024x683.jpeg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-300x200.jpeg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-768x512.jpeg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-1536x1024.jpeg 1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-2048x1366.jpeg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-2000x1334.jpeg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/927957f1544d260c4ea6af34676a57d5-scaled-1-400x267.jpeg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Ambitious cross-sector
                                      <span className="text-secondary">
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
                              <a
                                href="support-us/areas-for-support/eton-star-schools-programme/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/Image-15-1024x683.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Image-15-1024x683.jpg 1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Image-15-300x200.jpg   300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Image-15-768x512.jpg   768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Image-15-400x267.jpg   400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Building partnerships hubs and
                                      <span className="text-secondary">
                                        three sixth form colleges
                                      </span>
                                    </p>
                                    <div className="bottom">
                                      <p>Eton Star Schools Programme</p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="banner__image landscape">
                              <a
                                href="college-life/pastoral-care/index.html"
                                className="banner__image--link"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-1024x576.jpg"
                                  alt=""
                                  srcset="
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-1024x576.jpg  1024w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-300x169.jpg    300w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-768x432.jpg    768w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-1536x864.jpg  1536w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-2048x1152.jpg 2048w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-2000x1125.jpg 2000w,
                                    https://www.etoncollege.com/wp-content/uploads/2024/11/Baldwin_s_Bec-27-scaled-1-400x225.jpg    400w
                                  "
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                  className=""
                                />
                                <div className="banner__image--hover">
                                  <div className="banner__image--hover-inner">
                                    <p className="text">
                                      Exceptional pastoral care is at
                                      <span className="text-secondary">
                                        the heart of an Eton education
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
                              src="wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-1024x576.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-1024x576.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-300x169.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-768x432.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-1536x864.jpeg  1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-2048x1152.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-2000x1125.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/779f14aec30378bd9abb86d2f8256787-scaled-2-400x225.jpeg    400w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                            <div className="banner__image--hover">
                              <div className="banner__image--hover-inner">
                                <p className="text">
                                  Boarding nurtures personal growth and
                                  <span className="text-secondary">
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

                        <div className="banner__image">
                          <a
                            href="outside-the-classroom/sport/index.html"
                            className="banner__image--link"
                          >
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-1024x683.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-1024x683.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-300x200.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-768x512.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-1536x1024.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-2048x1366.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-2000x1334.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/8d135f425b4e0766950e1c120964d11b-scaled-2-400x267.jpeg    400w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                            <div className="banner__image--hover">
                              <div className="banner__image--hover-inner">
                                <p className="text">
                                  An unparalleled
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
                              src="wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-1024x683.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-1024x683.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-300x200.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-768x512.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-1536x1024.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-2048x1366.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-2000x1334.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/121f4b40b626d224d72ce1e7ee790dd2-scaled-2-400x267.jpeg    400w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                            <div className="banner__image--hover">
                              <div className="banner__image--hover-inner">
                                <p className="text">
                                  World class
                                  <span className="text-secondary">
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

                        <div className="banner__image">
                          <a
                            href="outside-the-classroom/drama/index.html"
                            className="banner__image--link"
                          >
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-1024x819.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-1024x819.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-300x240.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-768x614.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-1536x1229.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-2048x1638.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-2000x1600.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/2221de4b856ff83688d757a4a9df1d6a-scaled-2-400x320.jpeg    400w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                            <div className="banner__image--hover">
                              <div className="banner__image--hover-inner">
                                <p className="text">
                                  Providing a stage for
                                  <span className="text-secondary">
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

                        <div className="banner__image">
                          <a
                            href="outside-the-classroom/societies-programme/index.html"
                            className="banner__image--link"
                          >
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1-1024x682.png"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1-1024x682.png  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1-300x200.png    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1-768x512.png    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1-1536x1024.png 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1-400x267.png    400w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/79ac020ae9119dc4ade0191b064e42fa-1.png           2000w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                            <div className="banner__image--hover">
                              <div className="banner__image--hover-inner">
                                <p className="text">
                                  80+ societies run regular lectures, workshops
                                  and seminars with
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
                              src="wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1024x683.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1024x683.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-300x200.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-768x512.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-1536x1024.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-2048x1366.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-2000x1334.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/db0f5c4066d6b5c86928f46f46bd9d0e-scaled-2-400x267.jpeg    400w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                            <div className="banner__image--hover">
                              <div className="banner__image--hover-inner">
                                <p className="text">
                                  Fostering a lifelong appreciation of
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

                    <div className="js-clip-scroll banner--clip-scroll"></div>
                  </section>

                  <section className="home-block-introduction">
                    <div className="introduction__container">
                      <div className="introduction--column-1 introduction--column">
                        <div className="introduction--column--text introduction--column-1--text js-fade-up">
                          <h4>Welcome to Eton</h4>
                          <div className="text">
                            <p>
                              <span className="intro" 
                              
                              >
                                Eton College is a charity dedicated to the
                                advancement of education. As a school, we draw
                                out young people’s talents to enable them to
                                flourish and make a positive impact on others
                                and the wider world, while enjoying a healthy,
                                happy and fulfilling life.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="introduction--column--media introduction--column-1--media">
                          <div className="video-embed">
                            <video
                              autoplay
                              muted
                              loop
                              playsinline
                              className="h-full w-full absolute object-cover"
                            >
                              <source
                                src="https://player.vimeo.com/progressive_redirect/playback/1018622144/rendition/1080p/file.mp4?loc=external&amp;signature=c0b5858f69f9a35ac6468cd9dfc2a7a03d28ad28062367598bcc2ec5df5bc1f2"
                                type="video/mp4"
                              />
                              Your browser does not support HTML5 video.
                            </video>
                          </div>
                        </div>
                        <div className="introduction__stat-slider introduction__stat-slider--desktop js-fade-up">
                          <div className="home-intro-stat-slider">
                            <div className="slide">
                              <h3>250</h3>
                              <p className="">society meeting speakers per year</p>
                            </div>

                            <div className="slide">
                              <h3>£9.7m</h3>
                              <p className="">
                                to be spent on financial aid in 2023/24
                              </p>
                            </div>

                            <div className="slide">
                              <h3>16,000</h3>
                              <p className="">
                                biological specimens held in the College’s
                                Natural History Museum
                              </p>
                            </div>

                            <div className="slide">
                              <h3>105</h3>
                              <p className="">
                                boys on fully funded places in 2022/23
                              </p>
                            </div>

                            <div className="slide">
                              <h3>51</h3>
                              <p className="">instrumental ensembles</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="introduction--column-2 introduction--column">
                        <div className="introduction--column--media introduction--column-2--media">
                          <div className="image">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/eton-nov23-83-1024x683.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/eton-nov23-83-1024x683.jpg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/eton-nov23-83-300x200.jpg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/eton-nov23-83-768x512.jpg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/eton-nov23-83-1536x1024.jpg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/eton-nov23-83-400x267.jpg    400w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/eton-nov23-83.jpg           1620w
                              "
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className=""
                            />
                          </div>
                        </div>
                        <div className="introduction__stat-slider introduction__stat-slider--mobile">
                          <div className="home-intro-stat-slider">
                            <div className="slide">
                              <h3>250</h3>
                              <p className="">society meeting speakers per year</p>
                            </div>

                            <div className="slide">
                              <h3>£9.7m</h3>
                              <p className="">
                                to be spent on financial aid in 2023/24
                              </p>
                            </div>

                            <div className="slide">
                              <h3>16,000</h3>
                              <p className="">
                                biological specimens held in the College’s
                                Natural History Museum
                              </p>
                            </div>

                            <div className="slide">
                              <h3>105</h3>
                              <p className="">
                                boys on fully funded places in 2022/23
                              </p>
                            </div>

                            <div className="slide">
                              <h3>51</h3>
                              <p className="">instrumental ensembles</p>
                            </div>
                          </div>
                        </div>

                        <div className="introduction--column--text introduction--column-2--text js-fade-up">
                          <h4>Our school</h4>
                          <div className="text">
                            <p>
                              <span className="intro" 
                            
                              >
                                At our heart sits a leading boys’ boarding
                                school with a tradition of excellence, where we
                                proudly offer a unique and outstanding education
                                with endless opportunities. 
                              </span>
                            </p>
                            <p>
                              <span >
                                Growing up in our boarding community develops
                                personal growth and lifelong friendships in the
                                safety of our wrap-around pastoral care, while
                                nurturing the value of leadership and service.
                              </span>
                            </p>
                            <p>
                              <span >
                                We cherish Eton’s history and tradition, which
                                combined with a willingness to innovate has seen
                                Eton thrive for almost six centuries. 
                              </span>
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              <a
                                className="button"
                                href="about-us/meet-the-head-master/index.html"
                              >
                                Meet the Headmaster
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="home-block-focus-areas">
                    <div className="focus-areas__instagram">
                      <div className="focus-areas__instagram--container">
                        <div className="js-top-row-ig">
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/reel/DCgrc_Dqhva/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-2.cdninstagram.com/v/t51.29350-15/467414208_884782777138800_2347520180402311346_n278e.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=gcZCGj6fOgAQ7kNvgEsNaPP&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYBHel9JkwPK1OMF8YUuXAIx5LIkNqfuk8JxogBpBxCWYA&amp;oe=6742CB03"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  Year 6 pupils from Iqra Primary School visited
                                  our science labs last week for a programme of
                                  immersive workshops. Here&#8217;s what they
                                  got up to 🥼🧪🔥🥽 &#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/reel/DCWZMACNh5U/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-2.cdninstagram.com/v/t51.29350-15/466895721_1276852570155953_4546536006293612501_n172c.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=Ai5TjreMYJMQ7kNvgHPd-vi&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYBIQvBhdmLavuaURD5FvXRhSs9SGDT2cNXjtXZKKLWi6Q&amp;oe=6742B307"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  &#8220;Eton has an almost limitless ability to
                                  provide opportunities across an immense
                                  spectrum, creating lasting memories and
                                  friendships while achievin&#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DCT7ieFuV7p/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-1.cdninstagram.com/v/t51.2885-15/466850806_392224057301902_6190283554190421168_n6946.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=s3jR109r_ioQ7kNvgHA8Tu-&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYCV52wEFALrY4kJeluMFkA5fasmEwbWtNEKFH6i2AVsvw&amp;oe=6742AF56"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  Congratulations to Hannah Vines, our Rowing
                                  Manager at #DorneyLake, on her nomination for
                                  UK Community #Coach of the Year (Children and
                                  Young Peopl&#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DCPDH9GNCkA/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/466614941_613584571232198_6253757119854976613_n19f4.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=Fg8B_herSZ0Q7kNvgGc8mWu&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYASX8JOCHYLlGzSeGtfaSPOifjTQygZ-jNZ9AINEziiMg&amp;oe=6742ACE3"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  At the going down of the sun and in the
                                  morning, We will remember them. #ArmisticeDay
                                  #LestWeForget #RemembranceDay
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/reel/DByN5zSNqnw/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-1.cdninstagram.com/v/t51.29350-15/465691183_914569390114645_5819098358858761034_n8439.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=TSF6pQSHFusQ7kNvgHok_mW&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYDo-wNAfSp3SZpyxwI4NKouQhEqeRrJsciLQT5FHD5BzA&amp;oe=6742BA27"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  For anyone who missed it on BBC TWO, here is
                                  last week&#8217;s BBC Young Musician winner
                                  Ryan Wang revealing what it&#8217;s like to
                                  study and board at Eton Co&#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DBi3AkpMq5t/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-2.cdninstagram.com/v/t51.2885-15/464363163_527398883619445_6947514212082025275_na14d.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=e1eRhEu8FJYQ7kNvgF52J9k&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYC-P5fEjKonLFRaKHWszZJtAplMP9kvwezvvlIQBCZgCQ&amp;oe=6742BBF9"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  Shades of autumn around College Chapel, as
                                  captured by Anand N. in our Journalism
                                  Association #Autumn #AutumnVibes
                                  #StudentPhotography #October
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="js-bottom-row-ig">
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DBdqen7pbpP/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-1.cdninstagram.com/v/t51.2885-15/464017407_1240167557106141_4433281503283436020_n55ef.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=tURnBbYnvTsQ7kNvgEgEfHE&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYCoOdhVHqkdOlTydJ8MaFOL4fVRZaTY6JjPajDXpwMXZw&amp;oe=6742BA79"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  🏏Congratulations to Aryaman Varma OE on his
                                  second nomination for #Wisden Schools
                                  Cricketer of the Year. With 100+ wickets for
                                  Eton, he has more &#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/reel/DBYeG_9NvFH/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/464067024_9040179962680044_2084496038174495176_n8f5f.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=2obMOMM5i4QQ7kNvgFj4_ru&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYBif5N8eS77irfSXeAsAkrsi4ZZEYkCHpSUwU7mIIV5yw&amp;oe=6742AF32"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  Last week, we commemorated Dr Jane Goodall’s
                                  historic visit to Eton in 2023 and her 90th
                                  birthday in 2024 by planting a beech tree at
                                  Eton College&#8230;.
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DBXCgITOuWJ/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/464023057_1545472419409103_8823779088280222399_nb858.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=Rt_85XCpEnkQ7kNvgHTXScu&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYCfFnLnlk6JKFG0b8CeIXdZvogsSNxAoXIU6GVT41T2hQ&amp;oe=6742CAE4"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  🎹🎶 Huge congratulations to Ryan Wang in Year
                                  13, who tonight won BBC Young Musician,
                                  becoming the first Etonian to have ever done
                                  so. Ryan said: “&#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DBQnsQiARzK/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/463470485_890415026374861_5692763188932603178_nf03f.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=DOkv3uabqi4Q7kNvgFtd805&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYCLW2io5r13kl2lpC2qEsroEYtwmm9P7dhnaSsigcsLfg&amp;oe=6742CACB"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  Last week, boys in Years 11-13 participated in
                                  an exciting overnight camping excursion as
                                  part of their first Outdoor Education
                                  Programme weekend. &#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/p/DBOH40tsNrw/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr6-1.cdninstagram.com/v/t51.2885-15/463813796_1254555515855236_9024258987520511563_n1ee7.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=v3ypubhN_GQQ7kNvgGh_7FZ&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYARC0HC1hdgsrc0YWOTLsYRss71xQGJDA_1rwucNd8VcA&amp;oe=6742CA17"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  Well done to all the boys and staff who put on
                                  a fantastic performance of wartime comedy Jack
                                  Absolute Flies Again for our #SchoolPlay.
                                  Written by &#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="focus-areas__instagram-feed__post js-touch-trigger">
                            <div className="ig-logo">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="instagram_fillcircle--white 3"
                                  clip-path="url(#clip0_1444_20970)"
                                >
                                  <circle
                                    id="Ellipse 2"
                                    cx="16"
                                    cy="16"
                                    r="14"
                                    fill="#223C59"
                                  />
                                  <g id="Symbols">
                                    <g id="Social-Media">
                                      <g id="Instagram_fill-White">
                                        <g id="Mask group">
                                          <mask
                                            id="mask0_1444_20970"
                                            style={{maskType: "luminance"}}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="32"
                                            height="32"
                                          >
                                            <g id="Group">
                                              <path
                                                id="Vector"
                                                d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                                fill="white"
                                              />
                                            </g>
                                          </mask>
                                          <g mask="url(#mask0_1444_20970)">
                                            <path
                                              id="Fill-6"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                              fill="white"
                                            />
                                          </g>
                                        </g>
                                        <g id="Mask group_2">
                                          <path
                                            id="Fill-4"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1444_20970">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <a
                              href="https://www.instagram.com/reel/DBJB6Z1ti_i/"
                              target="_blank"
                            >
                              <img
                                decoding="async"
                                className=""
                                src="../scontent-lhr8-2.cdninstagram.com/v/t51.29350-15/463184369_1633105647548448_5778036145199016114_nae15.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=-wIZAMqXlqsQ7kNvgHi0Kxa&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYDfyujAa8O0qsmLf8cR7DkNPgi77L-9p4oc7sYC-2mdnQ&amp;oe=674298FE"
                              />

                              <div className="ig-hover">
                                <p>View on instagram</p>
                              </div>
                              <div className="ig-hover-caption">
                                <p>
                                  🤖 Both our Engineering &#038; Design and
                                  #ComputerScience societies had an unusual
                                  visitor one evening—Boston Dynamics&#8217;
                                  $70K robot dog Spot. Professor S&#8230;
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/p/DBGcoiUP5nI/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr6-2.cdninstagram.com/v/t51.2885-15/463139703_1633710307226420_854772994536144229_n0f86.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=p4USruDxMwkQ7kNvgHm-T-Y&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYDDfnF1XyBbUjzZpklCDJjGI-GL4RytPR38lh4-KwZgcA&amp;oe=6742C228"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                🎶🎉Congratulations to Ryan Wang on becoming the
                                first Etonian to ever reach the Grand Final of
                                BBC Young Musician. We are incredibly proud of
                                Ryan a&#8230;
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/reel/DA_IRzGhGK0/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/462743889_589977603611028_922325040156474604_ncb9c.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=yZUOn92P6wYQ7kNvgHdTY8u&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYA6Jwhp7XwJfK3dkRaKsaO7w4Ffv_m01mBA-K90epd_Hg&amp;oe=67429BE1"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                Our younger boys have been trying some
                                interesting warm ups in their training sessions
                                on Dutchman&#8217;s playing fields. We are
                                looking forward to supp&#8230;
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/p/DA8ASCytI6Z/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr6-2.cdninstagram.com/v/t51.2885-15/462513356_925944739585169_1135443294768199416_nd26c.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=zZ0Odk4EwxUQ7kNvgEMMCnR&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYAxxU8p-SZbwuNP48Bs2irvG9_jazlWocgXiedbazIjsg&amp;oe=6742BA0C"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                On #WorldMentalHealthDay 2024, this year&#8217;s
                                theme is prioritising mental health in the
                                workplace💚 This reminds us how important it is
                                to create supp&#8230;
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/reel/DA5pyfgpb_o/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/462273486_850979257183270_1491436590901722497_n3ba5.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=DBwWhCH-m2EQ7kNvgGhWlQa&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYDU7F-ni-nqaK8CFRNLuxxoM1J6wI_PhejVtwlBV4oUpg&amp;oe=67429EE5"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                2023/24 was another big year in partnerships at
                                Eton College. 8,969 state-sector pupils took
                                part in partnership activities at Eton—including
                                spor&#8230;
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/p/DA5dA_qulEa/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr6-1.cdninstagram.com/v/t51.2885-15/462399863_965326055402755_20663833906838624_n290c.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=PhcAeIlYz-8Q7kNvgEWOmlD&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYDG8Nv3Jpv0RaJZpfKQNxoauHwBtZzEyVVLnnTWFg4VUw&amp;oe=6742B5D1"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                Congratulations to Basil Tuma OE on your first
                                senior international call-up to Malta.
                                #ReadingFC #BasilTuma #InternationalFootball
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/reel/DA3Z8k4J2JJ/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr6-1.cdninstagram.com/v/t51.29350-15/462255690_535349345886044_4904027552365076676_nd471.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=1_hBYI9ClrYQ7kNvgHWCN5L&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=AZLWJafLqDKtJlGymBRcZOP&amp;oh=00_AYBCG-lLdEDY2UxVW4xWXgD_NgZWc-J9qLHKN-VHVZGaqg&amp;oe=6742B0D3"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                Boys in Common Lane House taking a break for
                                impromptu ping pong over the weekend.
                                #BoardingLife #BoardingSchool #EtonLife
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/p/DA3CRoYNNmY/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/462446669_821229616888589_8639977325381493299_n0f7f.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=fn98wclgFhYQ7kNvgFdUqh_&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYDBBMaja2-igu_2Kucbn-hOBE9hCxEun0lYCeGSTiIorQ&amp;oe=6742AE38"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                Our boys enjoyed an inspiring day of workshops
                                at the TVLP&#8217;s Student Leadership
                                Conference. A great opportunity to develop
                                #teambuilding skills wit&#8230;
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="focus-areas__instagram-feed__post js-touch-trigger">
                          <div className="ig-logo">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="instagram_fillcircle--white 3"
                                clip-path="url(#clip0_1444_20970)"
                              >
                                <circle
                                  id="Ellipse 2"
                                  cx="16"
                                  cy="16"
                                  r="14"
                                  fill="#223C59"
                                />
                                <g id="Symbols">
                                  <g id="Social-Media">
                                    <g id="Instagram_fill-White">
                                      <g id="Mask group">
                                        <mask
                                          id="mask0_1444_20970"
                                          style={{maskType: "luminance"}}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="0"
                                          width="32"
                                          height="32"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M0 0.000244141H32V32.0001H0V0.000244141Z"
                                              fill="white"
                                            />
                                          </g>
                                        </mask>
                                        <g mask="url(#mask0_1444_20970)">
                                          <path
                                            id="Fill-6"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682ZM23.104 18.9362C23.072 19.6962 22.944 20.2162 22.768 20.6722C21.776 23.2242 19.408 23.3842 13.0248 23.0882C12.264 23.0562 11.744 22.9362 11.288 22.7602C10.312 22.3842 9.568 21.6402 9.192 20.6722C8.632 19.2322 8.8248 13.7682 8.864 13.0402C8.912 11.8802 9.2 10.8642 10.016 10.0402C10.84 9.22424 11.8568 8.93624 13.0248 8.88824C20.0248 8.56024 21.064 9.16024 21.944 10.0402C23.0568 11.1522 23.392 12.5362 23.104 18.9362ZM16 0.000244141C7.168 0.000244141 0 7.16024 0 16.0002C0 24.8322 7.168 32.0002 16 32.0002C24.84 32.0002 32 24.8322 32 16.0002C32 7.16024 24.84 0.000244141 16 0.000244141ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522ZM19.808 13.0322C19.328 13.0322 18.944 12.6482 18.944 12.1762C18.944 11.6962 19.328 11.3122 19.808 11.3122C20.28 11.3122 20.664 11.6962 20.664 12.1762C20.664 12.6482 20.28 13.0322 19.808 13.0322ZM15.984 19.6562C13.952 19.6562 12.304 18.0162 12.304 15.9842C12.304 13.9602 13.952 12.3202 15.984 12.3202C18.016 12.3202 19.664 13.9602 19.664 15.9842C19.664 18.0162 18.016 19.6562 15.984 19.6562ZM21.032 10.9522C20.448 10.3762 19.696 10.2082 18.88 10.1682C12.576 9.88824 11.648 10.2402 10.936 10.9522C10.352 11.5282 10.184 12.2802 10.152 13.0962C10.112 13.9362 9.968 19.1122 10.4 20.2002C10.64 20.8322 11.12 21.3122 11.76 21.5602C12.008 21.6562 12.392 21.7762 13.088 21.8082C19.4248 22.0962 20.92 21.8642 21.568 20.2002C21.664 19.9522 21.784 19.5762 21.816 18.8802C22.104 12.6002 21.744 11.6642 21.032 10.9522Z"
                                            fill="white"
                                          />
                                        </g>
                                      </g>
                                      <g id="Mask group_2">
                                        <path
                                          id="Fill-4"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M18.3678 15.9842C18.3678 17.3042 17.3038 18.3682 15.9838 18.3682C14.6638 18.3682 13.5918 17.3042 13.5918 15.9842C13.5918 14.6722 14.6638 13.6082 15.9838 13.6082C17.3038 13.6082 18.3678 14.6722 18.3678 15.9842Z"
                                          fill="white"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1444_20970">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <a
                            href="https://www.instagram.com/p/DAvCjlGJYNp/"
                            target="_blank"
                          >
                            <img
                              decoding="async"
                              className=""
                              src="../scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/462157587_1063809225271249_5158868677812240447_nb0b7.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=p5FKidspsEQQ7kNvgGuhjko&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYDu5GNOPlj-1RipR0qJ7FVA8dhgA6OPtAvgBwwd7dGBpw&amp;oe=67429BF3"
                            />

                            <div className="ig-hover">
                              <p>View on instagram</p>
                            </div>
                            <div className="ig-hover-caption">
                              <p>
                                👏 Happy World Teachers&#8217; Day 2024! 👏
                                Today we celebrate the incredible dedication,
                                passion and hard work of teachers everywhere.
                                Thank you for insp&#8230;
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="focus-areas__instagram--mobile">
                        <div className="mobile-ig-icon">
                          <svg
                            width="89"
                            height="121"
                            viewBox="0 0 89 121"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Vector"
                              d="M3.44378 0.548864C-2.99348 0.852054 -7.38946 1.87759 -11.2325 3.38509C-15.2098 4.93245 -18.5809 7.00888 -21.935 10.3693C-25.2892 13.7298 -27.3547 17.0975 -28.8938 21.074C-30.3833 24.9189 -31.3925 29.3109 -31.6768 35.7407C-31.9612 42.1705 -32.0241 44.2373 -31.9926 60.6386C-31.9612 77.0399 -31.8886 79.0958 -31.5764 85.5389C-31.2691 91.9639 -30.2454 96.3511 -28.7353 100.189C-27.1828 104.159 -25.1053 107.523 -21.7378 110.873C-18.3703 114.222 -14.9992 116.28 -11.0062 117.818C-7.15835 119.303 -2.75753 120.315 3.68216 120.597C10.1218 120.878 12.1946 120.943 28.6193 120.912C45.044 120.881 47.1119 120.808 53.5649 120.502C60.0179 120.197 64.3897 119.168 68.2351 117.667C72.2124 116.114 75.5847 114.044 78.9377 110.681C82.2906 107.318 84.3549 103.948 85.8928 99.9688C87.3835 96.1276 88.3963 91.7344 88.6758 85.3106C88.9578 78.8639 89.0243 76.8055 88.9929 60.4067C88.9614 44.0078 88.8876 41.9519 88.5815 35.5112C88.2753 29.0705 87.2504 24.6966 85.7416 20.8566C84.1867 16.8861 82.1115 13.5245 78.7453 10.1724C75.379 6.82044 72.0007 4.76092 68.0161 3.22926C64.1658 1.7423 59.7674 0.728846 53.3277 0.451021C46.8881 0.173197 44.8153 0.101929 28.3846 0.133336C11.9538 0.164742 9.89678 0.234802 3.44378 0.548864ZM4.15043 109.731C-1.74838 109.475 -4.95129 108.497 -7.08575 107.678C-9.91234 106.591 -11.9258 105.276 -14.053 103.173C-16.1802 101.07 -17.487 99.0532 -18.5905 96.2375C-19.4194 94.1067 -20.4177 90.913 -20.6935 85.0243C-20.9936 78.6597 -21.0566 76.7488 -21.0916 60.6241C-21.1267 44.4994 -21.065 42.5909 -20.7855 36.2239C-20.5338 30.3401 -19.5477 27.139 -18.7285 25.0095C-17.6395 22.1841 -16.3278 20.1777 -14.2164 18.0554C-12.1049 15.9331 -10.0902 14.6261 -7.26725 13.5245C-5.13521 12.6934 -1.93593 11.7053 3.96046 11.4251C10.3409 11.1231 12.2527 11.0627 28.4027 11.0277C44.5527 10.9926 46.4694 11.053 52.8522 11.3333C58.7462 11.5894 61.9539 12.5642 64.0848 13.3868C66.9126 14.4739 68.9248 15.7797 71.0508 17.8911C73.1768 20.0026 74.4872 22.0065 75.5908 24.8307C76.4245 26.953 77.4142 30.1456 77.6926 36.0355C77.9963 42.4049 78.0652 44.3146 78.0943 60.4357C78.1233 76.5567 78.0664 78.4713 77.7869 84.8359C77.5292 90.7245 76.5515 93.9231 75.7299 96.0563C74.6409 98.8768 73.328 100.888 71.2154 103.009C69.1027 105.13 67.0904 106.437 64.2663 107.539C62.1366 108.369 58.9337 109.359 53.0422 109.64C46.6618 109.939 44.75 110.002 28.5939 110.037C12.4378 110.072 10.532 110.007 4.15163 109.731M53.4717 28.2431C53.4741 29.6766 53.9023 31.0773 54.7022 32.2678C55.502 33.4584 56.6376 34.3855 57.9652 34.9317C59.2929 35.478 60.753 35.619 62.1609 35.3368C63.5688 35.0546 64.8613 34.3619 65.8748 33.3464C66.8884 32.3309 67.5775 31.0381 67.855 29.6316C68.1325 28.2251 67.986 26.768 67.4339 25.4446C66.8818 24.1213 65.949 22.9911 64.7535 22.197C63.5579 21.4029 62.1533 20.9806 60.7173 20.9834C58.7922 20.9873 56.9475 21.7542 55.5887 23.1156C54.23 24.477 53.4685 26.3213 53.4717 28.2431ZM-2.56393 60.583C-2.53005 77.7115 11.4044 91.5652 28.5588 91.5326C45.7131 91.5 59.6004 77.5907 59.5678 60.4622C59.5351 43.3338 45.597 29.4764 28.4402 29.5102C11.2835 29.544 -2.5966 43.457 -2.56393 60.583ZM8.33344 60.5613C8.32555 56.5794 9.50063 52.6847 11.7101 49.3695C13.9195 46.0544 17.0641 43.4677 20.7461 41.9367C24.4282 40.4056 28.4823 39.9989 32.396 40.768C36.3095 41.5371 39.9068 43.4474 42.7328 46.2574C45.5588 49.0674 47.4867 52.6509 48.2726 56.5547C49.0585 60.4585 48.6672 64.5073 47.1481 68.189C45.6289 71.8708 43.0503 75.0201 39.7382 77.2389C36.4261 79.4576 32.5293 80.6461 28.5406 80.654C25.8921 80.6596 23.2685 80.1442 20.8195 79.1374C18.3706 78.1306 16.1443 76.6521 14.2678 74.7862C12.3913 72.9204 10.9014 70.7038 9.88321 68.263C8.86497 65.8223 8.33836 63.2052 8.33344 60.5613Z"
                              fill="#A0D1CA"
                              fill-opacity="0.4"
                            />
                          </svg>
                        </div>
                        <p>Follow @eton.college on Instagram</p>
                      </div>
                    </div>

                    <div className="focus-areas__featured">
                      <div className="featured--container">
                        <div className="featured--main js-fade-up">
                          <h4>Endless opportunities</h4>
                          <div className="text">
                            <p>
                              <span className="intro" >
                                At Eton, boys learn as much, if not more,
                                outside the classroom as they do inside it. The
                                exceptional breadth and depth of our
                                co-curriculum enables boys to tailor it to their
                                interests, receiving professional tutelage to
                                excel whatever their passion. 
                              </span>
                            </p>
                            <p>
                              <span >
                                For all its educational benefits, our
                                co-curriculum is also a source of fun and
                                enjoyment within boarding life at Eton, where
                                boys are nurtured and cared for within the Eton
                                community.
                              </span>
                            </p>
                            <p>
                              <span >
                                Boys have established over 80 societies at Eton
                                to explore their passions, hosting weekly
                                lectures, workshops and seminars from
                                world-renowned experts including former Prime
                                Ministers and Presidents, Nobel Laureates,
                                leading CEOs, academics and scientists.
                              </span>
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              <a
                                className="button"
                                href="outside-the-classroom/our-ethos/index.html"
                              >
                                The Co-Curriculum
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="featured--quote js-fade-up">
                          <figure>
                            <blockquote>
                              “To be at a school where I can have a choir
                              practice in the morning, rugby training in the
                              afternoon, followed by Wall Game, a band practice
                              and a Society talk all in one day is something one
                              will simply not be able to do later in life.”
                            </blockquote>
                            <figcaption>
                              Rugby player and music exhibitor
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>

                    <div className="focus-areas__mask-images">
                      <div className="mask-images--container js-mask-trigger">
                        <div className="mask-images__images">
                          <img
                            decoding="async"
                            src="wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-2000x1334.jpg"
                            alt=""
                            srcset="
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-2000x1334.jpeg 2000w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-300x200.jpeg    300w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-1024x683.jpeg  1024w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-768x512.jpeg    768w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-1536x1024.jpeg 1536w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-2048x1366.jpeg 2048w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-400x267.jpeg    400w
                            "
                            sizes="(max-width: 2000px) 100vw, 2000px"
                            className="js-mask-image"
                            data-mask-image="1"
                          />
                          <img
                            decoding="async"
                            src="wp-content/uploads/2024/11/20231213124820.jpg"
                            alt=""
                            srcset="
                              https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820.jpg           1080w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-200x300.jpg    200w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-683x1024.jpg   683w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-768x1152.jpg   768w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-1024x1536.jpg 1024w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-400x600.jpg    400w
                            "
                            sizes="(max-width: 1080px) 100vw, 1080px"
                            className="js-mask-image"
                            data-mask-image="2"
                          />
                          <img
                            decoding="async"
                            src="wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-2000x1334.jpg"
                            alt=""
                            srcset="
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-2000x1334.jpeg 2000w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-300x200.jpeg    300w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-1024x683.jpeg  1024w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-768x512.jpeg    768w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-1536x1024.jpeg 1536w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-2048x1366.jpeg 2048w,
                              https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-400x267.jpeg    400w
                            "
                            sizes="(max-width: 2000px) 100vw, 2000px"
                            className="js-mask-image"
                            data-mask-image="3"
                          />
                        </div>
                        <div className="mask-images__text">
                          <div
                            className="text-container js-mask-text"
                            data-mask-text="1"
                          >
                            <h4>An Outstanding Education</h4>
                            <div className="text">
                              <p>
                                <span className="intro" >
                                  Eton is at the vanguard of innovation in
                                  education, leading powerful research and
                                  cross-sector collaborations to develop
                                  expertise in teaching and learning. 
                                </span>
                              </p>
                              <p>
                                <span >
                                  An Eton education produces the best outcomes
                                  for our boys, developing enquiring minds and
                                  fostering a lifelong appreciation of
                                  independent thinking and learning. Our
                                  approach to the classroom draws on the most
                                  effective methods evidenced by our
                                  award-winning research centre, The Tony Little
                                  Centre for Innovation and Research in Learning
                                  (CIRL).
                                </span>
                              </p>
                            </div>
                            <a
                              href="about-us/our-research-centre/index.html"
                              className="button"
                            >
                              Our award-winning Research Centre
                            </a>
                          </div>

                          <div
                            className="text-container js-mask-text"
                            data-mask-text="2"
                          >
                            <h4>After Eton</h4>
                            <div className="text">
                              <p>
                                <span className="intro" >
                                  We are proud of the broad range of careers
                                  Etonians go into, building on passions
                                  nurtured during their time at Eton. 
                                </span>
                              </p>
                              <p>
                                <span >
                                  Moving through our co-curriculum has led our
                                  boys to set the standard on the world stage,
                                  whether in sport, the Arts, entrepreneurship,
                                  the natural world or wherever else their
                                  passions lie.
                                </span>
                              </p>
                              <p>
                                <span >
                                  We give boys a clear understanding of the
                                  world of work and the broad range of career
                                  routes to pursue, whether through Oxbridge or
                                  elsewhere. Eton Futures, our department
                                  dedicated to their lives after Eton, weaves
                                  employability into the Eton curriculum.
                                </span>
                              </p>
                              <p>
                                <span >
                                  The thriving Old Etonian Association is a
                                  fantastic network and resource, with societies
                                  and clubs providing support all around the
                                  world in a wide range of fields.
                                </span>
                              </p>
                            </div>
                            <a
                              href="college-life/after-eton/index.html"
                              className="button"
                            >
                              How we plan for our boys&#8217; futures
                            </a>
                          </div>

                          <div
                            className="text-container js-mask-text"
                            data-mask-text="3"
                          >
                            <h4>Making an impact</h4>
                            <div className="text">
                              <p>
                                <span className="intro" >
                                  Eton is committed to making a positive impact
                                  for as many young people as possible.
                                </span>
                              </p>
                              <p>
                                <span >
                                  In partnership with Star Academies, we plan to
                                  open three sixth form colleges for
                                  disadvantaged students in Middlesbrough,
                                  Dudley and Oldham. Our partnership with
                                  Holyport College, an Ofsted outstanding
                                  state-maintained boarding school, is one of
                                  the strongest, closest and most reciprocal
                                  cross-sector partnerships in the UK.
                                </span>
                              </p>
                              <p>
                                Last year, Eton Connect coordinated extensive
                                activities with partner organisations, including
                                over 5,000 state school pupils visiting our
                                museums and Collections, while over 7,000 state
                                school pupils studied our EtonX courses online.
                                Among other partnerships, we co-sponsor the
                                London Academy of Excellence, an outstanding
                                sixth form in Newham, East London.
                              </p>
                            </div>
                            <a
                              href="eton-outwards/eton-connect-local-partnerships/index.html"
                              className="button"
                            >
                              Our positive impact beyond Eton
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="focus-areas--mobile">
                      <div className="focus-areas__slider">
                        <div className="focus-areas__slider--slide">
                          <div className="image">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9-300x200.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9-300x200.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9-1024x682.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9-768x512.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9-1536x1024.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9-400x267.jpeg    400w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/f0f7b32cffbf609fa4d3c48861ed5ad9.jpeg           2000w
                              "
                              sizes="(max-width: 300px) 100vw, 300px"
                              className=""
                            />
                          </div>
                          <div className="content">
                            <h4>Endless opportunities</h4>
                            <div className="text">
                              <p>
                                At Eton, boys learn as much, if not more,
                                outside the classroom as they do inside it. The
                                exceptional breadth and depth of our
                                co-curriculum enables boys to tailor it to their
                                interests, receiving professional tutelage to
                                excel whatever their passion.
                              </p>
                            </div>
                            <a
                              href="outside-the-classroom/our-ethos/index.html"
                              className="button"
                            >
                              The Co-Curriculum
                            </a>
                          </div>
                        </div>

                        <div className="focus-areas__slider--slide">
                          <div className="image">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-2000x1334.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-2000x1334.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-300x200.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-1024x683.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-768x512.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-1536x1024.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-2048x1366.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/7d14ce4cd85657b68316565d227ed5cd-scaled-1-400x267.jpeg    400w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              className=""
                            />
                          </div>
                          <div className="content">
                            <h4>An Outstanding Education</h4>
                            <div className="text">
                              <p>
                                Eton is at the vanguard of innovation in
                                education, leading powerful research and
                                cross-sector collaborations to develop expertise
                                in teaching and learning.
                              </p>
                            </div>
                            <a
                              href="about-us/our-research-centre/index.html"
                              className="button"
                            >
                              Our award-winning Research Centre
                            </a>
                          </div>
                        </div>
                        <div className="focus-areas__slider--slide">
                          <div className="image">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/20231213124820.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820.jpg           1080w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-200x300.jpg    200w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-683x1024.jpg   683w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-768x1152.jpg   768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-1024x1536.jpg 1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/20231213124820-400x600.jpg    400w
                              "
                              sizes="(max-width: 1080px) 100vw, 1080px"
                              className=""
                            />
                          </div>
                          <div className="content">
                            <h4>After Eton</h4>
                            <div className="text">
                              <p>
                                We are proud of the broad range of careers
                                Etonians go into, building on passions nurtured
                                during their time at Eton.
                              </p>
                            </div>
                            <a
                              href="college-life/after-eton/index.html"
                              className="button"
                            >
                              How we plan for our boys&#8217; futures
                            </a>
                          </div>
                        </div>
                        <div className="focus-areas__slider--slide">
                          <div className="image">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-2000x1334.jpg"
                              alt=""
                              srcset="
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-2000x1334.jpeg 2000w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-300x200.jpeg    300w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-1024x683.jpeg  1024w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-768x512.jpeg    768w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-1536x1024.jpeg 1536w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-2048x1366.jpeg 2048w,
                                https://www.etoncollege.com/wp-content/uploads/2024/11/365ad20514fa8dc8e419e309085880a2-scaled-1-400x267.jpeg    400w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              className=""
                            />
                          </div>
                          <div className="content">
                            <h4>Making an impact</h4>
                            <div className="text">
                              <p>
                                Eton is committed to making a positive impact
                                for as many young people as possible.
                              </p>
                            </div>
                            <a
                              href="eton-outwards/eton-connect-local-partnerships/index.html"
                              className="button"
                            >
                              Our positive impact beyond Eton
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="home-block-spotlight">
                    <h4>In the spotlight</h4>
                    <div className="spotlight--container">
                      <div className="spotlight-featured-news">
                        <div className="intro">
                          Sharing the latest news and celebrating the diversity
                          of Eton life.
                        </div>

                        <a href="news-and-diary/school-news/etonian-ryan-wang-wins-bbc-young-musician-2024/index.html">
                          <div className="news-item">
                            <div className="news-item__img">
                              <div className="js-image-move">
                                <span className="js-image-move__inner object-fit object-fit--cover">
                                  <img
                                    decoding="async"
                                    className="moving-img"
                                    src="wp-content/uploads/2024/10/Ryan3by2-1024x683.png"
                                  />
                                </span>
                              </div>
                              <div className="corner-category">
                                <div className="corner-category__inner">News</div>
                              </div>
                            </div>
                            <div className="news-item__content background-grey">
                              <h3 className="title title--sm">
                                Etonian Ryan Wang Wins BBC Young Musician 2024
                              </h3>
                              <div className="post-meta">
                                <p>20 October 2024</p>

                                <p>Music</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="spotlight-blogs">
                        <div className="spotlight-blogs__box">
                          <div className="corner-category">
                            <div className="corner-category__inner">
                              Latest Blogs
                            </div>
                          </div>

                          <a href="blog/career-skills-a-workshop-approach/index.html">
                            <div className="">
                              <h3 className="title title--sm">
                                Career Skills: A Workshop Approach
                              </h3>

                              <div className="author-card">
                                <div className="author-card__image">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2021/11/Cathy-McKenna-Headshot-2-150x150.jpg"
                                  />
                                </div>
                                <div className="author-card__content">
                                  <p>
                                    <b>Cathy McKenna</b>
                                  </p>
                                  <p>Deputy Director of Career Education</p>
                                </div>
                              </div>

                              <div className="author-card">
                                <div className="author-card__image">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2021/11/George-Fussey-Headshot-150x150.jpg"
                                  />
                                </div>
                                <div className="author-card__content">
                                  <p>
                                    <b>George Fussey</b>
                                  </p>
                                  <p>Director of Career Education</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="blog/working-with-the-sutton-trust/index.html">
                            <div className="">
                              <h3 className="title title--sm">
                                Working with the Sutton Trust
                              </h3>

                              <div className="author-card">
                                <div className="author-card__image">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2020/05/meet-jonnie%402x-150x150.jpg"
                                  />
                                </div>
                                <div className="author-card__content">
                                  <p>
                                    <b>Jonnie Noakes</b>
                                  </p>
                                  <p>
                                    Director of Tony Little Centre &#038;
                                    Director of Teaching and Learning
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="blog/the-road-to-dudley-port/index.html">
                            <div className="">
                              <h3 className="title title--sm">
                                The Road to Dudley Port
                              </h3>

                              <div className="author-card">
                                <div className="author-card__image">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2020/07/tom%402x-150x150.png"
                                  />
                                </div>
                                <div className="author-card__content">
                                  <p>
                                    <b>Tom Arbuthnott</b>
                                  </p>
                                  <p>Deputy Head, Partnerships</p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a
                          href="news-and-diary/school-news/index.html"
                          className="button"
                        >
                          Browse all news
                        </a>
                      </div>
                    </div>
                  </section>

                  <section
                    className="teasers fade-in fade-in--active"
                    data-color="white"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slide-up slide-up--scroll">
                            <div>
                              <span>
                                <h2 className="title title--xl">Next up&#8230;</h2>
                              </span>
                            </div>
                          </div>

                          <div className="fade-in__child fade-in--3">
                            <a
                              href="news-and-diary/school-news/rocksoc-shakes-the-parry-hall/index.html"
                              className="post-link"
                            >
                              <div className="news-item">
                                <div className="news-item__img">
                                  <div className="js-image-move">
                                    <span className="js-image-move__inner object-fit object-fit--cover">
                                      <img
                                        decoding="async"
                                        className="moving-img"
                                        src="wp-content/uploads/2024/11/image-20241108-211702-4b1c960e-1024x683.jpg"
                                      />
                                    </span>
                                  </div>
                                  <div className="corner-category">
                                    <div className="corner-category__inner">
                                      News
                                    </div>
                                  </div>
                                </div>
                                <div className="news-item__content background-grey">
                                  <h3 className="title title--sm">
                                    RockSoc Shakes The Parry Hall
                                  </h3>
                                  <div className="post-meta">
                                    <p>14 November 2024</p>

                                    <p>Music</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="fade-in__child fade-in--2">
                            <div className="teaser-item">
                              <div className="js-image-move">
                                <div className="js-image-move__inner object-fit object-fit--cover">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2021/09/Aims-and-Ethos-New-1b-683x1024.jpg"
                                  />
                                </div>
                              </div>
                              <h3 className="title title--md">Our Purpose</h3>
                              <a
                                href="about-us/our-purpose/index.html"
                                className="cover-link"
                              ></a>
                            </div>
                            <div className="teaser-item">
                              <div
                                className="teaser-item__inner"
                                // style="background-image:url()"
                                image-background-scroll
                              ></div>
                              <h3 className="title title--md"></h3>
                              <a href="" className="cover-link"></a>
                            </div>
                          </div>
                          <div className="fade-in__child fade-in--2">
                            <div className="teaser-item">
                              <div className="js-image-move">
                                <div className="js-image-move__inner object-fit object-fit--cover">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2023/07/EtonArchitecture045-1024x768.jpg"
                                  />
                                </div>
                              </div>
                              <h3 className="title title--md">Entry To Eton</h3>
                              <a
                                href="admissions/entry-to-eton/index.html"
                                className="cover-link"
                              ></a>
                            </div>
                            <div className="teaser-item">
                              <div
                                className="teaser-item__inner"
                                // style="background-image:url()"
                                image-background-scroll
                              ></div>
                              <h3 className="title title--md"></h3>
                              <a href="" className="cover-link"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <p></p>
                </article>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="site-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11">
              <div className="site-footer__content">
                <div className="row">
                  <div className="col-lg-3">
                    <a href="index.html">
                      <img src="wp-content/themes/eton-college/assets/img/logo/footer-logo.svg" />
                    </a>

                    <div className="social-icons">
                      <a
                        href="https://twitter.com/eton_college?lang=en"
                        target="_blank"
                      >
                        <img
                          src="wp-content/themes/eton-college/assets/img/social/twitter_circle_stroke.svg"
                          alt="twitter Icon"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/eton.college/"
                        target="_blank"
                      >
                        <img
                          src="wp-content/themes/eton-college/assets/img/social/instagram_circle_stroke.svg"
                          alt="instagram Icon"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/Eton-College-117613119649208"
                        target="_blank"
                      >
                        <img
                          src="wp-content/themes/eton-college/assets/img/social/facebook_circle_stroke.svg"
                          alt="facebook Icon"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/school/62841"
                        target="_blank"
                      >
                        <img
                          src="wp-content/themes/eton-college/assets/img/social/linkedin_circle_stroke.svg"
                          alt="linkedin Icon"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <p className="intro">
                      A modern, forward-thinking school that embraces innovation
                      and new opportunities to provide an outstanding,
                      progressive and well-rounded education.
                    </p>

                    <div className="row pad-med-top">
                      <div className="col-md-4">
                        <h3 className="title title--sm">Contact Us</h3>
                        <p>
                          Eton College
                          <br />
                          Windsor, Berkshire, SL4 6DW
                        </p>
                        <p>(+44) 01753 370 100</p>
                        <p>
                          <a href="cdn-cgi/l/email-protection.html#10757e616579627975635075647f7e737f7c7c7577753e7f62773e657b">
                            <span
                              className="__cf_email__"
                              data-cfemail="dbbeb5aaaeb2a9b2bea89bbeafb4b5b8b4b7b7bebcbef5b4a9bcf5aeb0"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </p>
                      </div>
                      <div className="col-md-5 offset-md-1">
                        <h3 className="title title--sm">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="news-and-diary/school-news/index.html">
                              School News
                            </a>
                          </li>

                          <li>
                            <a href="news-and-diary/term-dates/index.html">
                              Term Dates
                            </a>
                          </li>

                          <li>
                            <a href="about-us/employment-opportunities/index.html">
                              Employment Opportunities
                            </a>
                          </li>

                          <li>
                            <a href="about-us/policies-and-reports/index.html">
                              Policies and Reports
                            </a>
                          </li>

                          <li>
                            <a href="contact-us/index.html">Contact Us</a>
                          </li>

                          <li>
                            <a href="privacy-policy/index.html">
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row final-row">
                      <div className="col-md-4">
                        <small>
                          Registered Charity Number 1139086
                          <br />© Eton College 2024
                        </small>
                      </div>

                      <div className="col-md-5 offset-md-1">
                        <form
                          action="https://www.etoncollege.com/"
                          id="searchform"
                          className="search"
                          method="get"
                        >
                          <div>
                            <input
                              type="search"
                              id="s"
                              name="s"
                              value=""
                              placeholder="Search..."
                            />

                            <input
                              type="submit"
                              value="Search"
                              id="searchsubmit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__block">
          <div className="pillar background-secondary"></div>

          <div className="credit">
            <a href="https://thewebkitchen.co.uk/">Web design</a> by
            <a href="https://thewebkitchen.co.uk/">TWK</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
