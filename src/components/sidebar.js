import React, {useState} from "react";
import {Link } from "react-router-dom";
// import { FaPhone } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import "./footer.css";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
 

  return (
    <>
    <div >
      <div id="page-wrap" className="sidebar-container" >
      <div className="top-nav">
        <div className="hamburger" >
          <div className="nav-icon">
            <div></div>
          </div>
          <span>Menu</span>
        </div>

        <Link to="index">
          <div className="top-nav__logo">
            <img
              fetchpriority="high"
              src="assets/img/Final GHS.png"
            />
          </div>
        </Link>

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
          <div className="top-nav__contact">
          {/* <FaPhone size={30} /> */}
          <FiPhone size={25} />
          </div>
        </div>
      </div>

        <nav className={`nav-menu ${isMenuOpen ? "open" : "close"}`}>
        <div>
          <div className="title title--sm">Main Menu</div>

          <ul className="nav__top-level" id="main-menu">
            <li >
              <Link to="" onClick={closeMenu}>Home</Link>
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
      </nav>
      </div>

      <div className= {`sub-menu-wrapper ${isMenuOpen ? "open" : ""}`}>
        <div className={`sub-menu-wrap ${isMenuOpen ? "open" : ""}`} id="sub_5">
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