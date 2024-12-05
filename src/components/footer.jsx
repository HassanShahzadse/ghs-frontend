
import React, { useState } from "react";
import "./footer.css"; 
import { Link } from "react-router-dom";




const Footer = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);  
  const [isSearchVisible, setIsSearchVisible] = useState(false);  

   
  const toggleSubMenu = () => {
    setIsSubMenuVisible((prev) => !prev);
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(true);
  };
 
  const closeSearchBar = () => {
    setIsSearchVisible(false);
  };

  
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeSearchBar();
    }
  };

  return (
    <footer className="site-footer ">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-11">
						<div className="site-footer__content">
							<div className="row">
								<div className="col-lg-3">
									<div style={{ width: '50px', height: '50px' }}>
									<img	src="/assets/img/Final GHS.png"/>
											</div>

									<div className="social-icons">
									<a href="https://x.com/ghskarachi?s=21&t=i_hlnbuZYNwkgAtrgNSrEQ" target="_blank"> 
									<img
												src="/assets/img/social/twitter_circle_stroke.svg"
												alt="twitter Icon" />
												</a>
												<a href="https://www.instagram.com/ghskarachi/" target="_blank"> 
												<img
												src="/assets/img/social/instagram_circle_stroke.svg"
												alt="instagram Icon" />
												</a>
												<a href="https://facebook.com/GHSKarachi/" target="_blank"> 
												<img
												src="/assets/img/social/facebook_circle_stroke.svg"
												alt="facebook Icon" /></a>
												<a href="http://Linkedin.com/company/ghskarachi" target="_blank">
												<img
												style={{ height:"40px",width:"40px"}}
												src="/assets/img/social/linkedin_circle_stroke.svg"
												alt="linkedin Icon" />
												</a>
												<a href="https://www.tiktok.com/@ghskarachi" target="_blank" style={{borderRadius:"50%",padding:"10px 12px",border:"2px solid white"}} className="">
												<i className="fa-brands fa-tiktok fs-5 text-white"></i>
												</a>
									</div>
								</div>
								<div className="col-lg-8 offset-lg-1">
									<p className="intro">
									Global Hub School Karachi strives to nurture well-rounded, compassionate leaders by providing exceptional education, fostering critical thinking, and empowering students to make a meaningful impact on the world.
									</p>

									<div className="row pad-med-top">
										<div className="col-md-4">
											<h3 className="title title--sm">Contact Us</h3>
											<p>Global Hub School<br />
											Hub Dam Road (5 KM from Hamdard University), Karachi, Sindh, Pakistan</p>
											<p>0300 8410040</p>
											<p>0324 4717777</p>
											<p>021 36440300</p>
											<p><a
													href="cdn-cgi/l/email-protection.html#10757e616579627975635075647f7e737f7c7c7577753e7f62773e657b"><span
														className="__cf_email__"
														data-cfemail="dbbeb5aaaeb2a9b2bea89bbeafb4b5b8b4b7b7bebcbef5b4a9bcf5aeb0">info@ghskarachi.com</span></a>
											</p>

										</div>
										<div className="col-md-5 offset-md-1 ">
											<h3 className="title title--sm">Quick Links</h3>
											<ul>
												<li> <a href="/AboutUs/OurPurpose" >Our Purpose</a></li>
												<li>  <a href="/AboutUs/OurLeadership"> Our Leadership</a></li>
												<li><a href="/OutsideClassroom/CoCurriculum">The Co-Curriculum</a></li>
												<li> <a href="/OutsideClassroom/Boarding">Boarding</a></li>
												<li><a href="/Admissions/EntryToGHS">Entry To GHS</a></li>
												<li><a href="/ContactUs/ContactDetails">Contact Us</a></li>
											</ul>
										</div>
									</div>
									<div className="row final-row">
										<div className="col-md-4">
											<small>Registered Number <br/>
												© Global Hub School 2024</small>
										</div>

										{/* <div className="col-md-5 offset-md-1 ">
											<form action="" id="searchform" className="search"
												method="get">
												<div>
													<input type="search" id="s" name="s" value=""
														placeholder="Search..." />

													<input type="submit" value="Search" id="searchsubmit" />
												</div>
											</form>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div className="site-footer__block">

				<div className="pillar background-secondary"></div>

				<div className="credit">Web design by comeleit</div>
			</div>
		</footer>
  );
};

export default Footer;
