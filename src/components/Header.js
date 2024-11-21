import React, { useState } from "react";
import "./footer.css"; 

const Header = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible((prev) => !prev);
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
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article>
              <section className="home-block-banner js-home-banner-full">
                <div className="js-home-banner-pin" />

                <div className="banner__container banner--desktop js-home-banner-container">
                
                  <div className="banner-col-1">
                    <div className="banner-text js-home-banner-text">
                      <h1>Honouring Tradition.</h1>
                    </div>
                    <div className="banner--column banner--column-1 js-home-banner-col-1" />

                    <div className="banner__image landscape">
                      <a
                        href="outside-the-classroom/sport/index.html"
                        className="banner__image--link"
                      >
                        <img
                          decoding="async"
                          src="/assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpg" 
                          alt="Sport"
                          srcSet="
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-1024x683.jpeg 1024w,
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-300x200.jpeg 300w,
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-768x512.jpeg 768w,
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-1536x1024.jpeg 1536w,
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-2048x1366.jpeg 2048w,
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-2000x1334.jpeg 2000w,
                            /assets/img/8d135f425b4e0766950e1c120964d11b-scaled-1-400x267.jpeg 400w
                          "
                          sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="banner__image--hover">
                          <div className="banner__image--hover-inner">
                            <p className="text">
                              An unparalleled <span className="text-secondary">breadth of sport on offer</span>
                            </p>
                            <div className="bottom">
                              <p>Sport</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
