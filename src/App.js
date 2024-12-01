import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage.jsx';
// import ContactUs from './pages/ContactUs';
import "./App.css"
import OurPurpose from './pages/AboutUs/OurPurpose.js';
import OurStrategy from './pages/AboutUs/OurStrategy.js';
import OurHistory from './pages/AboutUs/OurHistory.js';
import OurLeadership from './pages/AboutUs/OurLeadership.js';
import OurGoverningBody from './pages/AboutUs/OurGoverningBody.js';
import AcadmicCurriculum from './pages/InsideClassroom/AcadmicCurriculum.js';
import LearningSupport from './pages/InsideClassroom/LearningSupport.js';
import AcadmicFacilities from './pages/InsideClassroom/AcadmicFacilities.js';
import ExamResults from './pages/InsideClassroom/ExamResults.js';
import CoCurriculum from './pages/OutsideClassroom/CoCurriculum.js';
import Sport from './pages/OutsideClassroom/Sport.js';
import Boarding from './pages/OutsideClassroom/Boarding.js';
import PastoralCare from './pages/OutsideClassroom/PastoralCare.js';
import CommunityEngagement from './pages/OutsideClassroom/CommunityEngagement.js';
import ReligiousLife from './pages/OutsideClassroom/ReligiousLife.js';
import EnvironmentalEducation from './pages/OutsideClassroom/EnvironmentalEducation.js';
import EntryToGHS from './pages/Admissions/EntryToGHS.js';
import ApplyOnline from './pages/Admissions/ApplyOnline.js';
import ScholarshipFinancialAid from './pages/Admissions/ScholarshipFinancialAid.js';
import Fees from './pages/Admissions/Fees.js';
import NeedYourSupport from './pages/SupportUs/NeedYourSupport.js';
import WaysToSupport from './pages/SupportUs/WaysToSupport.js';
import GiftOfEducation from './pages/SupportUs/GiftOfEducation.js';
import ContactUs from './pages/SupportUs/ContactUs.js';
import ContactDetails from './pages/ContactUs/ContactDetails.js';
import VisitUs from './pages/ContactUs/VisitUs.js';
import AdmissionForm from './pages/Admissions/AdmissionForm.js';
// import Sidebar from './components/sidebar.js';
import Footer from './components/footer.jsx';
import NextSection from './components/NextSection.js';
import SideNave from './components/SideNave.js';
// import WaysToSuppport from './pages/SupportUs/WaysToSupport.js';
function Layout({ children }) {
  return (
    <div className="layout">
      {/* <Sidebar /> */}
      <SideNave/>
      <main className="content">{children}</main>
      <NextSection/>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs/OurPurpose" element={<OurPurpose/>} />
        <Route path="/AboutUs/OurStrategy" element={<OurStrategy/>} />
        <Route path="/AboutUs/OurHistory" element={<OurHistory/>} />
        <Route path="/AboutUs/OurLeadership" element={<OurLeadership/>} />
        <Route path="/AboutUs/OurGoverningBody" element={<OurGoverningBody/>} />



        <Route path="/InsideClassroom/AcadmicCurriculum" element={<AcadmicCurriculum/>} />
        <Route path="/InsideClassroom/LearningSupport" element={<LearningSupport/>} />
        <Route path="/InsideClassroom/AcadmicFacilities" element={<AcadmicFacilities/>} />
        <Route path="/InsideClassroom/ExamResults" element={<ExamResults/>} />



        <Route path="/OutsideClassroom/CoCurriculum" element={<CoCurriculum/>} />
        <Route path="/OutsideClassroom/Sport" element={<Sport/>} />
        <Route path="/OutsideClassroom/Boarding" element={<Boarding/>} />
        <Route path="/OutsideClassroom/PastoralCare" element={<PastoralCare/>} />
        <Route path="/OutsideClassroom/CommunityEngagement" element={<CommunityEngagement/>} />
        <Route path="/OutsideClassroom/ReligiousLife" element={<ReligiousLife/>} />
        <Route path="/OutsideClassroom/EnvironmentalEducation" element={<EnvironmentalEducation/>} />



        <Route path="/Admissions/EntryToGHS" element={<EntryToGHS/>} />
        <Route path="/Admissions/ApplyOnline" element={<ApplyOnline/>} />
        <Route path="/Admissions/AdmissionForm" element={<AdmissionForm/>} />
        <Route path="/Admissions/ScholarshipFinancialAid" element={<ScholarshipFinancialAid/>} />
        <Route path="/Admissions/Fees" element={<Fees/>} />



        <Route path="/SupportUs/NeedYourSupport" element={<NeedYourSupport/>} />
        <Route path="/SupportUs/WaysToSupport" element={<WaysToSupport/>} />
        <Route path="/SupportUs/GiftOfEducation" element={<GiftOfEducation/>} />
        <Route path="/SupportUs/ContactUs" element={<ContactUs/>} />



        <Route path="/ContactUs/ContactDetails" element={<ContactDetails/>} />
        <Route path="/ContactUs/VisitUs" element={<VisitUs/>} />
        </Routes>
        </Layout>
  );
}

export default App;