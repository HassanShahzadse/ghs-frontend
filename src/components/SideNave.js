import React, { useState } from "react";
import "./SideNave.css";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";

const SideNave = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const phoneNumber = "0324-4717777";

  const handlePhoneClick = () => {
    if (navigator.userAgent.match(/iPhone|Android/i)) {
      // For mobile devices, the `tel:` protocol will open the dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // For desktop devices, let's copy the number to clipboard
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert("Phone number copied to clipboard!");
        })
        .catch((error) => {
          alert("Failed to copy phone number: " + error);
        });
    }
  };

  return (
    <>
      <div className="top-navbar mbile-nav">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <div className="navbar-logo">
          <img
            src="/assets/img/Final GHS.png"
            alt=""
            style={{ width: `${40}px`, height: "auto" }}
          />
        </div>
        <div className="search-icon">
          {" "}
          <FiPhone
            size={25}
            strokeWidth={"1px"}
            onClick={handlePhoneClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul className="main-menu">
          {/* <div class="title title--sm fw-bold">Main Menu</div> */}
          <li>
            <div className="menu-item">
              <Link to="/" onClick={closeMenu}>
                Home{" "}
              </Link>
            </div>
          </li>
          <li>
            <div className="menu-item" onClick={() => toggleSubMenu("about")}>
              About Us{" "}
              <span>
                {" "}
                {activeSubMenu === "about" ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </span>
            </div>
            {activeSubMenu === "about" && (
              <ul className="sub-menu">
                <li>
                  <Link to="/AboutUs/OurPurpose" onClick={closeMenu}>
                    Our Purpose
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs/OurStrategy" onClick={closeMenu}>
                    Our Strategy
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs/OurHistory" onClick={closeMenu}>
                    Our History
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs/OurLeadership" onClick={closeMenu}>
                    Our Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs/OurGoverningBody" onClick={closeMenu}>
                    Our Governing Body
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="menu-item" onClick={() => toggleSubMenu("inside")}>
              Inside the Classroom{" "}
              <span>
                {activeSubMenu === "inside" ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </span>
            </div>
            {activeSubMenu === "inside" && (
              <ul className="sub-menu">
                <li>
                  <Link
                    to="/InsideClassroom/AcadmicCurriculum"
                    onClick={closeMenu}
                  >
                    The Academic Curriculum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/InsideClassroom/LearningSupport"
                    onClick={closeMenu}
                  >
                    Learning Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/InsideClassroom/AcadmicFacilities"
                    onClick={closeMenu}
                  >
                    Academic Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/InsideClassroom/ExamResults" onClick={closeMenu}>
                  The Examination System
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="menu-item" onClick={() => toggleSubMenu("outside")}>
              Outside the Classroom{" "}
              <span>
                {activeSubMenu === "outside" ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </span>
            </div>
            {activeSubMenu === "outside" && (
              <ul className="sub-menu">
                <li>
                  <Link to="/OutsideClassroom/CoCurriculum" onClick={closeMenu}>
                    The Co-Curriculum
                  </Link>
                </li>
                <li>
                  <Link to="/OutsideClassroom/Sport" onClick={closeMenu}>
                    Sport
                  </Link>
                </li>
                <li>
                  <Link to="/OutsideClassroom/Boarding" onClick={closeMenu}>
                    Boarding
                  </Link>
                </li>
                <li>
                  <Link to="/OutsideClassroom/PastoralCare" onClick={closeMenu}>
                    Pastoral Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/OutsideClassroom/CommunityEngagement"
                    onClick={closeMenu}
                  >
                    Community Engagement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/OutsideClassroom/ReligiousLife"
                    onClick={closeMenu}
                  >
                    Religious Life
                  </Link>
                </li>
                <li>
                  <Link
                    to="/OutsideClassroom/EnvironmentalEducation"
                    onClick={closeMenu}
                  >
                    Environmental Education
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="menu-item"
              onClick={() => toggleSubMenu("admissions")}
            >
              Admissions{" "}
              <span>
                {activeSubMenu === "admissions" ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </span>
            </div>
            {activeSubMenu === "admissions" && (
              <ul className="sub-menu">
                <li>
                  <Link to="/Admissions/EntryToGHS" onClick={closeMenu}>
                    Entry To GHS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Admissions/ScholarshipFinancialAid"
                    onClick={closeMenu}
                  >
                    Scholarships and Financial Aid
                  </Link>
                </li>
                <li>
                  <Link to="/Admissions/Fees" onClick={closeMenu}>
                    Fees
                  </Link>
                </li>
                <li>
                  <a
                    href="https://app.ghskarachi.com/student/online/reg2"
                    target="blank"
                  >
                    Apply Online{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            )}
          </li>
          {/* <li>
            <div className="menu-item" onClick={() => toggleSubMenu("news")}>
            News <span>{activeSubMenu === "news" ? <BiChevronUp size={25}/> : <BiChevronDown size={25}/>}</span>
            </div>
            {activeSubMenu === "news" && (
              <ul className="sub-menu">
            <li>
              <Link to="/News/NewsEvents" onClick={closeMenu}>News & Events</Link>
            </li>
            <li>
              <Link to="/News/PrincipalLetters" onClick={closeMenu}>Principals Letters</Link>
            </li>
            <li>
              <Link to="/News/AcadmicCalender" onClick={closeMenu}>Academic Calendar</Link>
            </li>
              </ul>
            )}
          </li> */}
          <li>
            <div className="menu-item" onClick={() => toggleSubMenu("support")}>
              Support Us{" "}
              <span>
                {activeSubMenu === "support" ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </span>
            </div>
            {activeSubMenu === "support" && (
              <ul className="sub-menu">
                <li>
                  <Link to="/SupportUs/NeedYourSupport" onClick={closeMenu}>
                    Why We Need Your Support
                  </Link>
                </li>
                <li>
                  <Link to="/SupportUs/WaysToSupport" onClick={closeMenu}>
                    Ways to Support
                  </Link>
                </li>
                <li>
                  <Link to="/SupportUs/GiftOfEducation" onClick={closeMenu}>
                    The Gift of Education
                  </Link>
                </li>
                <li>
                  <Link to="/SupportUs/ContactUs" onClick={closeMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="menu-item" onClick={() => toggleSubMenu("contact")}>
              Contact Us{" "}
              <span>
                {activeSubMenu === "contact" ? (
                  <BiChevronUp size={25} />
                ) : (
                  <BiChevronDown size={25} />
                )}
              </span>
            </div>
            {activeSubMenu === "contact" && (
              <ul className="sub-menu">
                <li>
                  <Link to="/ContactUs/ContactDetails" onClick={closeMenu}>
                    Contact Details
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUs/VisitUs" onClick={closeMenu}>
                    Visit Us
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="menu-item">

            <a
              href="https://app.ghskarachi.com/student/online/reg2"
              target="blank"
              >
              Apply Online{" "}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
              </div>
          </li>
          <div className="social-icons">
            <a
              href="https://x.com/ghskarachi?s=21&t=i_hlnbuZYNwkgAtrgNSrEQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/social/twitter_circle_stroke.svg"
                alt="instagram Icon"
                style={{ filter: "brightness(0) invert(0)" }}
              />
            </a>
            <a
              href="https://www.instagram.com/ghskarachi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/social/instagram_circle_stroke.svg"
                alt="instagram Icon"
                style={{ filter: "brightness(0) invert(0)" }}
              />
            </a>
            <a
              href="https://facebook.com/GHSKarachi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/social/facebook_circle_stroke.svg"
                alt="facebook Icon"
                style={{ filter: "brightness(0) invert(0)" }}
              />
            </a>
            <a
              href="http://Linkedin.com/company/ghskarachi"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                padding: "8px 13px",
                border: "1px solid black",
                display: "inline-block",
              }}
            >
              <i className="fa-brands fa-tiktok" style={{ color: "black" }}></i>
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SideNave;
