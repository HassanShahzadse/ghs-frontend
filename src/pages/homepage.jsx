import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NextUp from '../components/NextUp';
import Footer from '../components/footer'; // or '../components/Footer' if that's the correct case

export const HomePage = () => {
  return (
    <>
      <Header />
      <NextUp />
      <Footer />
      <div>
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
      </div>
    </>
  );
};
