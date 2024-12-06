import React, { useEffect, useState } from "react";

const Banner = ({
  breadcrumbs = [],
  title,
  introText,
  imageSrc,
  imageAlt = "Banner Image",
}) => {
    const [imageHeight, setImageHeight] = useState("auto");
    useEffect(() => {
      const updateImageHeight = () => {
        if (window.innerWidth >= 768) {
          setImageHeight("720px");
        } else {
          setImageHeight("auto");
        }
      };
      updateImageHeight();
      window.addEventListener("resize", updateImageHeight);
      return () => window.removeEventListener("resize", updateImageHeight);
    }, []);
  return (
    <section className="banner">
      {/* Breadcrumbs Section */}
      <div className="breadcrumbs-desktop">
        <p id="breadcrumbs">
          <span>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span>
                  {crumb.url ? (
                    <a className="my-class" href={crumb.url}>
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="breadcrumb_last" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </span>
                {index < breadcrumbs.length - 1 && (
                  <span className="breadcrumbs-separator"></span>
                )}
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      {/* Blue Bar Section */}
      <div className="banner__blue-bar banner__blue-bar--first">
        <div className="blue-bar-hidden">
          <div className="slide-up slide-up--static slide-up--loaded">
            <div>
              <span>
                <h1 className="banner__title title color-white title--xl2">
                  {title}
                </h1>
              </span>
            </div>
          </div>
          {introText && (
            <div className="banner__intro background-primary color-white">
              <p className="intro">{introText}</p>
            </div>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div className="container make-full-width">
        <div className="row">
          <div className="image-container js-image-move grey-background">
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{
                width: "100%",
                height: imageHeight,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Placeholder Section */}
      <div className="banner__blue-bar">
        <div>
          <div>
            <span>
              <h1 className="banner__title title color-white title--xl2">
                {title}
              </h1>
            </span>
          </div>
        </div>
        <div className="banner__intro background-primary color-white"></div>
      </div>
      <div
        className="placeholder-for-banner background-primary color-white"
        style={{ paddingLeft: "20px", paddingBottom: "20px" }}
      >
        <h1 className="banner__title title color-white title--xl2">{title}</h1>
      </div>
    </section>
  );
};

export default Banner;
