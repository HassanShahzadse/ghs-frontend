import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactDetails from "./ContactDetails"; // Separate contact details file
import SearchComponent from "./SearchComponent"; // Separate search component
import "./footer.css"; // CSS file with updated hover effects

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the main menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For toggling the search bar

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <Router>
      <div id="page-wrap" className="sidebar-container">
        {/* Top Navigation */}
        <div className="top-nav">
          <div className="hamburger" onClick={toggleMenu}>
            <div className="nav-icon">
              <div></div>
            </div>
            <span>Menu</span>
          </div>

          <Link to="/Search">
            <div className="top-nav__logo">
              <img src="/assets/Final-GHS-logo.jpg" alt="Eton College Logo" />
            </div>
          </Link>

          <div className="top-nav__search-contact">
          
            <div className="search-box-button" onClick={toggleSearchBar}>
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
                    strokeWidth="1.25"
                  />
                  <path
                    d="M10.6504 20.3225L1.30575 29.6672"
                    stroke="#223C59"
                    strokeWidth="1.25"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </div>

        
            <Link to="/contact">
              <div className="top-nav__contact">
                <img src="/assets/img/icons/phone.svg" alt="Contact" />
              </div>
            </Link>
          </div>
        </div>

       
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav__top-level">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/inside-the-classroom">Inside the Classroom</Link>
            </li>
            <li>
              <Link to="/outside-the-classroom">Outside the Classroom</Link>
            </li>
            <li>
              <Link to="/college-life">College Life</Link>
            </li>
            <li>
              <Link to="/eton-outwards">Eton Outwards</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/support-us">Support Us</Link>
            </li>
            <li>
              <Link to="/news-and-diary">News and Diary</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

     
      {isSearchOpen && (
        <div id="search-full-screen" className="menu-search-form-container">
          <form
            action="https://www.etoncollege.com/"
            id="searchform"
            method="get"
          >
            <div className="inputs-container">
              <label htmlFor="s" className="sr-only">
                Search for:
              </label>
              <input
                type="search"
                id="s"
                name="s"
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
              Hit enter to search <span className="optional">or ESC to close</span>
            </footer>
          </form>
          <button onClick={toggleSearchBar} className="close-search-btn">
            Close
          </button>
        </div>
      )}      

   
      <Routes>
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/contact" element={<ContactDetails />} />
       
       
      </Routes>
    </Router>
  );
};

export default Sidebar;
