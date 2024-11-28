
import React, { useState } from "react";
import "./footer.css"; 




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
									<a href="index.html"><img
											src="assets/Gradient Fill 1 copy.jpg"/></a>

									<div className="social-icons">
										<a href="https://twitter.com/eton_college?lang=en" target="_blank"><img
												src="/assets/img/social/twitter_circle_stroke.svg"
												alt="twitter Icon" /></a><a
											href="https://www.instagram.com/eton.college/" target="_blank"><img
												src="/assets/img/social/instagram_circle_stroke.svg"
												alt="instagram Icon" /></a><a
											href="https://www.facebook.com/Eton-College-117613119649208"
											target="_blank"><img
												src="/assets/img/social/facebook_circle_stroke.svg"
												alt="facebook Icon" /></a><a
											href="https://www.linkedin.com/school/62841" target="_blank"><img
												src="/assets/img/social/linkedin_circle_stroke.svg"
												alt="linkedin Icon" /></a>
									</div>
								</div>
								<div className="col-lg-8 offset-lg-1">
									<p className="intro">
										A modern, forward-thinking school that embraces innovation and new opportunities
										to provide an outstanding, progressive and well-rounded education.
									</p>

									<div className="row pad-med-top">
										<div className="col-md-4">
											<h3 className="title title--sm">Contact Us</h3>
											<p>GHSCollege<br />
												Windsor, Berkshire, SL4 6DW</p>
											<p>(+44) 01753 370 100</p>
											<p><a
													href="cdn-cgi/l/email-protection.html#10757e616579627975635075647f7e737f7c7c7577753e7f62773e657b"><span
														className="__cf_email__"
														data-cfemail="dbbeb5aaaeb2a9b2bea89bbeafb4b5b8b4b7b7bebcbef5b4a9bcf5aeb0">[email&#160;protected]</span></a>
											</p>

										</div>
										<div className="col-md-5 offset-md-1 ">
											<h3 className="title title--sm">Quick Links</h3>
											<ul>

												<li><a href="news-and-diary/school-news/index.html">School News</a></li>

												<li><a href="news-and-diary/term-dates/index.html">Term Dates</a></li>

												<li><a href="about-us/employment-opportunities/index.html">Employment
														Opportunities</a></li>

												<li><a href="about-us/policies-and-reports/index.html">Policies and
														Reports</a></li>

												<li><a href="contact-us/index.html">Contact Us</a></li>

												<li><a href="privacy-policy/index.html">Privacy Policy</a></li>
											</ul>
										</div>
									</div>
									<div className="row final-row">
										<div className="col-md-4">
											<small>Registered Charity Number 1139086<br/>
												© GHSCollege 2024</small>
										</div>

										<div className="col-md-5 offset-md-1 ">
											<form action="https://www.etoncollege.com/" id="searchform" className="search"
												method="get">
												<div>
													<input type="search" id="s" name="s" value=""
														placeholder="Search..." />

													<input type="submit" value="Search" id="searchsubmit" />
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div className="site-footer__block">

				<div className="pillar background-secondary"></div>

				<div className="credit"><a href="https://thewebkitchen.co.uk/">Web design</a> by <a
						href="https://thewebkitchen.co.uk/"></a>comeleit</div>
			</div>
		</footer>
  );
};

export default Footer;
