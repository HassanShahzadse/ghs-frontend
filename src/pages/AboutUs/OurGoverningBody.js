import React,{useState, useEffect} from 'react';
import "../../components/footer.css"


const OurGoverningBody = () => {
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
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article>
                <section className="banner">
                  <div className="breadcrumbs-desktop">
                    <p id="breadcrumbs">
                      <span>
                        <span>
                          <a className="my-class" href="/">
                            Home
                          </a>
                        </span>
                        <span className="breadcrumbs-separator"></span>
                        <span className="breadcrumb_last" aria-current="page">
                          Our Governing Body
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="container make-full-width">
                    <div className="row">
                      <div
                        className="image-container js-image-move grey-background" >
                          <img
                    src="/assets/11/263599925_2949755145271285_6770598982686416049_n.jpg"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: imageHeight,
                      objectFit: "fill",
                    }}
                  />
                      </div>
                    </div>
                  </div>

                  <div className=" background-primary color-white" style={{paddingLeft:"20px" , paddingBottom:"20px"}}>
                  <h1 className="banner__title title color-white ">
                          Our Governing Body
                        </h1>
                  </div>
                 
                </section>
                </article>
                </div>


                <div className="breadcrumbs-mobile">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="/">
                          Home
                        </a>
                      </span>
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page">
                        Our Governing Body
                      </span>
                    </span>
                  </p>
                </div>
<div style={{padding:"20px", fontFamily: "'Nunito Sans', sans-serif"}}>
                  <p>
                  The Governing Body of Global Hub School Karachi comprises 10 distinguished board members from diverse walks of life, including education, philanthropy, and medicine. This group of visionary leaders is united by their unwavering commitment to the school’s mission of delivering world-class education.

                  </p>
                  <p>
                  Their combined expertise and experience drive the school forward with zeal and zest, ensuring it continually evolves and competes with leading international schools across the globe. By setting ambitious goals, maintaining high standards, and fostering innovation, the Governing Body plays a vital role in shaping the future of GHS Karachi.
                  </p>
                  <p>
                  Through their strategic oversight and passionate advocacy, the board ensures that the school reaches its greatest heights, offering students unparalleled opportunities for growth and excellence. Their dedication to continuous improvement guarantees that GHS remains at the forefront of educational institutions, both locally and internationally.
                  </p>
                  </div>
            </div>
        </div>
        
        
      </main>
    </div>
  );
};

export default OurGoverningBody;
