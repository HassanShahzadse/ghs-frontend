import React, {useState} from "react";
import {Link } from "react-router-dom";
import "./footer.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <>
    <div className={`${isOpen ? "open" : "closed"}`}>
      <div id="page-wrap" className="sidebar-container" >
      <div className="top-nav">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="nav-icon">
            <div></div>
          </div>
          <span>Menu</span>
        </div>

        <Link to="index">
          <div className="top-nav__logo">
            <img
              fetchpriority="high"
              src="assets/img/Final GHS logo.png"
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
            <Link to="contact-us/contact-details/index">
              <img src="wp-content/themes/eton-college/assets/img/icons/phone.svg" />
            </Link>
          </div>
        </div>
      </div>

        <nav className="nav-menu">
        <div>
          <div className="title title--sm">Main Menu</div>

          <ul className="nav__top-level" id="main-menu">
            <li>
              <Link to="" onClick={closeSidebar}>Home</Link>
            </li>
            <li className="parent-page">
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

      <div className="sub-menu-wrapper">
        <div className="sub-menu-wrap" id="sub_5">
          <div className="title title--sm">About Us</div>
          <ul>
            <li className="menu-item">
              <Link to="/AboutUs/OurPurpose">Our Purpose</Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurStrategy">Our Strategy</Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurHistory">Our History</Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurLeadership">
                Our Leadership
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/AboutUs/OurGoverningBody">
                Our Governing Body
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_6">
          <div className="title title--sm">Inside the Classroom</div>
          <ul>
            <li className="menu-item">
              <Link to="/InsideClassroom/AcadmicCurriculum">
                The Academic Curriculum
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/InsideClassroom/LearningSupport">
                Learning Support
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/InsideClassroom/AcadmicFacilities">
                Academic Facilities
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/InsideClassroom/ExamResults">
                Exam Results
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_7">
          <div className="title title--sm">Outside the Classroom</div>
          <ul>
            <li className="menu-item">
              <Link to="/OutsideClassroom/CoCurriculum">
                The Co-Curriculum
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/Sport">Sport</Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/Boarding">
                Boarding
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/PastoralCare">
                Pastoral Care
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/CommunityEngagement">
                Community Engagement
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/ReligiousLife">
                Religious Life
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/OutsideClassroom/EnvironmentalEducation">
                Environmental Education
              </Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_11">
          <div className="title title--sm">Admissions</div>
          <ul>
            <li className="menu-item">
              <Link to="/Admissions/EntryToGHS">Entry To GHS</Link>
            </li>
            <li className="menu-item">
              <Link to="/Admissions/ApplyOnline">Apply Online</Link>
            </li>
            <li className="menu-item">
              <Link to="/Admissions/AdmissionForm">Admission Form</Link>
            </li>
            <li className="menu-item">
              <Link to="/Admissions/ScholarshipFinancialAid">Scholarships and Financial Aid</Link>
            </li>
            <li className="menu-item">
              <Link to="/Admissions/Fees">Fees</Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_10">
          <div className="title title--sm">Support Us</div>
          <ul>
            <li className="menu-item">
              <Link to="/SupportUs/NeedYourSupport">
                Why We Need Your Support
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/SupportUs/WaysToSupport">Ways to Suport</Link>
            </li>
            <li className="menu-item">
              <Link to="/SupportUs/GiftOfEducation">The Gift of Education</Link>
            </li>
            <li className="menu-item">
              <Link to="/SupportUs/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <div className="back-button">Back</div>
        </div>
        <div className="sub-menu-wrap" id="sub_13">
          <div className="title title--sm">Contact Us</div>
          <ul>
            <li className="menu-item">
              <Link to="/ContactUs/ContactDetails">
                Contact Details
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ContactUs/VisitUs">
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