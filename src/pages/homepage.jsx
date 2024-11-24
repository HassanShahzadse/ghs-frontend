import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import Footer from '../components/footer';
import AfterScrollingSection from '../components/AfterScrollingSection';
import ScrollingImagesSection from '../components/ScrollingImageSection';
import QuoteSection from '../components/QuoteSection';
import IntroSection from '../components/IntroSection';
import EducationSection from '../components/EducationSection';
import AfterEducationSection from '../components/AfterEducationSection';
import SpotlightSection from '../components/SpotlightSection';

export const HomePage = () => {
  return (
    <>
      <LandingPage />
      <AfterScrollingSection/>
      <ScrollingImagesSection/>
      <QuoteSection/>
      <IntroSection/>
      <EducationSection/>
      <AfterEducationSection/>
      <SpotlightSection/>
      <Footer />
      {/* <div>
        <h1>Welcome to the Home Page</h1>
        <nav>
          <ul>
            <li><Link to="/inside-the-classroom">Inside The Classroom</Link></li>
            <li><Link to="/outside-the-classroom">Outside The Classroom</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/support-us">Support Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </div> */}
    </>
  );
};
