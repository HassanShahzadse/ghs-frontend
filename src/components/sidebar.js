import React, {useState,useEffect} from "react";
import {Link, useLocation } from "react-router-dom";
// import { FaPhone } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import "./footer.css";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    closeMenu();
  }, [location]);
  const phoneNumber = '0324-4717777';

  const handlePhoneClick = () => {
    if (navigator.userAgent.match(/iPhone|Android/i)) {
      // For mobile devices, the `tel:` protocol will open the dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // For desktop devices, let's copy the number to clipboard
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Phone number copied to clipboard!');
      }).catch((error) => {
        alert('Failed to copy phone number: ' + error);
      });
    }
  };
  return (
    <>
    <div >
      <div id="page-wrap" className="sidebar-container" >
      <div className="top-nav">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`nav-icon ${isMenuOpen ? "open" : "close"}`}>
            <div></div>
          </div>
          {/* <span>{isMenuOpen ? "Close" : "Menu"}</span> */}
        </div>

        <a href="/">
          <div className="top-nav__logo">
            <img
              fetchpriority="high"
              src="/assets/img/Final GHS.png"
            />
          </div>
        </a>

        <div className="top-nav__search-contact">
          {/* <div className="top-nav__search">
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
          </div> */}
          <div className="top-nav__contact">
          {/* <FaPhone size={30} /> */}
            
          <FiPhone size={25} strokeWidth={"1px"} onClick={handlePhoneClick} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

        <nav className={`nav-menu ${isMenuOpen ? "open" : "close"}`}>
        <div>
          <div className="title title--sm">Main Menu</div>

          <ul className="nav__top-level" id="main-menu">
            <li >
              <a href="/" onClick={closeMenu}>Home</a>
            </li>
            <li className="parent-page" >
              <Link to="" id="5" className="">
                About Us
              </Link>
            </li>
            <li className="parent-page">
              <Link to="" id="6" className="">
                Inside the Classroom
              </Link>
            </li>
            <li className="parent-page">
              <Link to="" id="7" className="">
                Outside the Classroom
              </Link>
            </li>
            <li className="parent-page">
              <Link to="" id="11" className="">
                Admissions
              </Link>
            </li>
            {/* <li className="parent-page">
              <Link to="" id="20" className="">
                News
              </Link>
            </li> */}
            <li className="parent-page">
              <Link to="" id="10" className="">
                Support Us
              </Link>
            </li>
            <li className="parent-page">
              <Link to="" id="13" className="">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-icons" style={{position:"absolute",bottom:"0px"}}>
    <a href="https://x.com/ghskarachi?s=21&t=i_hlnbuZYNwkgAtrgNSrEQ" target="_blank" rel="noopener noreferrer">
        <img
            src="/assets/img/social/twitter_circle_stroke.svg"
            alt="instagram Icon"
            style={{ filter: "brightness(0) invert(0)" }}
        />
    </a>
    <a href="https://www.instagram.com/ghskarachi/" target="_blank" rel="noopener noreferrer">
        <img
            src="/assets/img/social/instagram_circle_stroke.svg"
            alt="instagram Icon"
            style={{ filter: "brightness(0) invert(0)" }}
        />
    </a>
    <a href="https://facebook.com/GHSKarachi/" target="_blank" rel="noopener noreferrer">
        <img
            src="/assets/img/social/facebook_circle_stroke.svg"
            alt="facebook Icon"
            style={{ filter: "brightness(0) invert(0)" }}
        />
    </a>
    <a href="http://Linkedin.com/company/ghskarachi" target="_blank" rel="noopener noreferrer">
        <img
            src="/assets/img/social/linkedin_circle_stroke.svg"
            alt="linkedin Icon"
            style={{ filter: "brightness(0) invert(0)" }}
        />
    </a>
    <a
        href="https://www.tiktok.com/@ghskarachi"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            borderRadius: "50%",
            padding: "0px 9px",
            border: "1px solid black",
            display: "inline-block",
        }}
    >
        <i className="fa-brands fa-tiktok" style={{ color: "black",fontSize:"12px" }}></i>
    </a>
</div>

      </nav>
      </div>

      <div className= {`sub-menu-wrapper ${isMenuOpen ? "open" : "close"}`}>
        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : "close"}`} id="sub_5">
          <div className="title title--sm">About Us</div>
          <ul>
            <li className="menu-item">
              <Link to="/AboutUs/OurPurpose" onClick={closeMenu}>Our Purpose</Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurStrategy" onClick={closeMenu}>Our Strategy</Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurHistory" onClick={closeMenu}>Our History</Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurLeadership" onClick={closeMenu}>
                Our Leadership
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurGoverningBody" onClick={closeMenu}>
                Our Governing Body
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_6">
          <div className="title title--sm" >Inside the Classroom</div>
          <ul>
            <li className="menu-item">
              <Link to="/InsideClassroom/AcadmicCurriculum" onClick={closeMenu}>
                The Academic Curriculum
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/InsideClassroom/LearningSupport" onClick={closeMenu}>
                Learning Support
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/InsideClassroom/AcadmicFacilities" onClick={closeMenu}>
                Academic Facilities
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/InsideClassroom/ExamResults" onClick={closeMenu}>
                Exam Results
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_7">
          <div className="title title--sm">Outside the Classroom</div>
          <ul>
            <li className="menu-item">
              <Link to="/OutsideClassroom/CoCurriculum" onClick={closeMenu}>
                The Co-Curriculum
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/Sport" onClick={closeMenu}>Sport</Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/Boarding" onClick={closeMenu}>
                Boarding
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/PastoralCare" onClick={closeMenu}>
                Pastoral Care
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/CommunityEngagement" onClick={closeMenu}>
                Community Engagement
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/ReligiousLife" onClick={closeMenu}>
                Religious Life
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/EnvironmentalEducation" onClick={closeMenu}>
                Environmental Education
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_11">
          <div className="title title--sm" >Admissions</div>
          <ul>
            <li className="menu-item">
              <Link to="/Admissions/EntryToGHS" onClick={closeMenu}>Entry To GHS</Link>
            </li>
            {/* <li className="menu-item">
              <Link to="/Admissions/ApplyOnline" onClick={closeMenu}>Apply Online</Link>
            </li> */}
            <li className="menu-item">
              <a href="https://app.ghskarachi.com/student/online/reg2" target="blank">Apply Online <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </li>
            {/* <li className="menu-item">
              <Link to="/Admissions/AdmissionForm">Admission Form</Link>
            </li> */}
            <li className="menu-item">
              <Link to="/Admissions/ScholarshipFinancialAid" onClick={closeMenu}>Scholarships and Financial Aid</Link>
            </li>
            <li className="menu-item">
              <Link to="/Admissions/Fees" onClick={closeMenu}>Fees</Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>

        {/* <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_20">
          <div className="title title--sm" >News</div>
          <ul>
            <li className="menu-item">
              <Link to="/News/NewsEvents" onClick={closeMenu}>News & Events</Link>
            </li>
            <li className="menu-item">
              <Link to="/News/PrincipalLetters" onClick={closeMenu}>Principals Letters</Link>
            </li>

            <li className="menu-item">
              <Link to="/News/AcadmicCalender" onClick={closeMenu}>Acadmic Calender</Link>
            </li>
  
          </ul>
          <div className="back-button">Back</div>
        </div> */}





        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_10">
          <div className="title title--sm">Support Us</div>
          <ul>
            <li className="menu-item">
              <Link to="/SupportUs/NeedYourSupport" onClick={closeMenu}>
                Why We Need Your Support
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/SupportUs/WaysToSupport" onClick={closeMenu}>Ways to Suport</Link>
            </li>
            <li className="menu-item">
              <Link to="/SupportUs/GiftOfEducation" onClick={closeMenu}>The Gift of Education</Link>
            </li>
            <li className="menu-item">
              <Link to="/SupportUs/ContactUs" onClick={closeMenu}>Contact Us</Link>
            </li>
            
          </ul>
          <div className="back-button" >Back</div>
        </div>
        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_13">
          <div className="title title--sm">Contact Us</div>
          <ul>
            <li className="menu-item">
              <Link to="/ContactUs/ContactDetails" onClick={closeMenu}>
                Contact Details
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ContactUs/VisitUs" onClick={closeMenu}>
                Visit Us
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
      </div>
      </div>
      </>

  );
};
export default Sidebar;