import React from "react";
import "./AdmissionProcedure.css";
import { Link } from "react-router-dom";

const AdmissionProcedure = () => {
  return (
    <div className="admission-container">
      <h1 className="admission-heading">Admission Procedure</h1>
      <div className="procedure-list">
        <div>1. Online Registration</div>
        <div>2. Online Test</div>
        <div>3. Interview</div>
        <div>4. Medical Checkup</div>
        <div>5. Fee Deposit</div>
      </div>

      <div className="eligibility-container">
        <div className="eligibility-section">
          <h2>Eligibility & Age Criteria</h2>
          <p className="eligibility-text">
            To be eligible for admission, applicants must have passed the
            previous class by the date of admission, meet the specified age
            range, and be medically fit.
          </p>
        </div>
        <div className="scholarship-section">
          <h2>Looking For Scholarships?</h2>
          <Link to="/Admissions/ScholarshipFinancialAid"><button className="scholarship-buttonsss" >Fees & Scholarships</button></Link>
        </div>
      </div>

      <div className="documents-section">
        <h2>Documents to be Submitted</h2>
        <p>
          The following documents are required as part of an admission
          application to GHS Karachi:
          <ul>
            <li>Last academic report</li>
            <li>School leaving certificate</li>
            <li>2 passport-size photos</li>
            <li>NIC copies of Father & Mother/Guardian</li>
            <li>Medical Fitness Certificate</li>
            <li>Recent Eye Examination Certificate</li>
          </ul>
          <strong>
            Note: GHS Karachi will verify all application details. Any false
            information may result in refusal of admission at any stage.
          </strong>
        </p>
      </div>

      <div className="entry-test-section">
        <h2>Entry Test</h2>
        <p>
          GHS Karachi conducts entry tests online and in various cities across
          Pakistan. Detailed schedules are available on our website and at the
          information office. Students are admitted to grades foundation (6th
          to 8th), 9th and 1st Year for Federal Board and O-1 and A-1 for O and
          A Levels respectively.
        </p>
        <h3>Selection Criteria</h3>
        <ol>
          <li style={{fontWeight:"bold"}}>Online/Written Test</li>
        <ul>
            <li><strong>Passing Marks:</strong> 65%</li>
          <li>
            Class 8th, 9th: The test includes English, Maths and Science.
          </li>
          <li>
            Class 1st Year: The test includes English, Maths or Biology,
            Physics, and Chemistry or Computer.
          </li>
          </ul>
          <li>
          <strong>Physical Test:</strong>   Candidates must pass a physical test within the time
            set by the physical instructor, which includes:
            <ul>
              <li>Running (1 km)</li>
              <li>Chin Ups (10)</li>
              <li>Push Ups (20)</li>
              <li>Sit Ups (20)</li>
            </ul>
          </li>
          <li>
           <strong>Medical Test:</strong> Candidates must be medically fit and attach a medical
            report with their documents, including:
            <ul>
              <li>Blood Sugar Test</li>
              <li>CBC</li>
              <li>Immunization/Inoculation/Vaccination Report</li>
              <li>Anti-HCV Test</li>
            </ul>
          </li>
          <li>
            <strong>Interview:</strong> Successful candidates will be interviewed by the
            Principal and Faculty of GHS Karachi.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AdmissionProcedure;
