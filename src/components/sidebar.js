import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./footer.css";

const Sidebar = () => {
  return (
    <Router>
      <div id="page-wrap" className="sidebar-container">
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
          {/* <div
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
          </div> */}

          {/* <div className="d-flex flex-wrap align-items-center justify-content-between">
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
          </div> */}
          <div className="top-nav__contact">
            <a href="contact-us/contact-details/index.html">
              <img src="wp-content/themes/eton-college/assets/img/icons/phone.svg" />
            </a>
          </div>
        </div>
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
      </div>

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

      {/* <Routes>
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/contact" element={<ContactDetails />} />
      </Routes> */}
    </Router>
  );
};

export default Sidebar;
