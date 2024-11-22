import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import { HomePage } from './pages/homepage.jsx';
 import InsideTheClassroom from './pages/InsideTheClassroom';
import OutsideTheClassroom from './pages/OutsideTheClassroom';
import Admissions from './pages/Admissions';
import SupportUs from './pages/SupportUs';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/inside-the-classroom" element={<InsideTheClassroom />} />
        <Route path="/outside-the-classroom" element={<OutsideTheClassroom />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    </Router>
  );
}

export default App;