import React from 'react';
import { useLocation } from 'react-router-dom';

const Prospectus = () => {
    const location = useLocation();
    let heading = '';
    let pdfSrc = '';

    if (location.pathname === '/Admissions/boysProspectus') {
        heading = 'Boys Prospectus';
        pdfSrc = 'https://drive.google.com/file/d/1-edMQIeliwkNDxAcLIqOD5AA_ZsGe1VA/preview';
    } else if (location.pathname === '/Admissions/girlsProspectus') {
        heading = 'Girls Prospectus';
        pdfSrc = 'https://drive.google.com/file/d/1k4ugig63Qujh28L6KLMQsE9xsQjIdVju/preview';
    }

    return (
        <div id="content-wrap">
        <main className="main">
          <div className="container-fluid">
            <h2>{heading}</h2>
            <iframe 
                src={pdfSrc} 
                width="640" 
                height="480" 
                allow="autoplay"
                title={heading}
            ></iframe>
        </div>
        </main>
        </div>
    );
};

export default Prospectus;
