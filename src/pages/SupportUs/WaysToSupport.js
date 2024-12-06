import React, { useEffect, useState } from 'react'
import "../../components/footer.css"

const WaysToSupport = () => {
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
    <div id="content-wrap" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article className=" " >
              <section className="banner">
                <div className="breadcrumbs-desktop">
                  <p id="breadcrumbs">
                    <span
                      ><span
                        ><a className="my-class" href="/"
                          >Home</a
                        ></span
                      >
                      
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page"
                        >Ways to Support</span
                      ></span
                    >
                  </p>
                </div>
                <div className="container make-full-width">
                  <div className="row">
                    <div
                      className="image-container js-image-move grey-background">
<img
    src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"
    alt="Image"
    style={{
      width: "100%",
      height: imageHeight,
      objectFit: "cover",
    }}
  />
                    </div>
                  </div>
                </div>
                  <div className="background-primary color-white" style={{paddingLeft:"10px",paddingBottom:"20px" }}>
                  <h1
                          className="banner__title title color-white title--xl2"
                        >
                        Ways to Support
                        </h1>
                  </div>
              </section>

              <div className="breadcrumbs-mobile">
                <p id="breadcrumbs">
                  <span
                    ><span
                      ><a className="my-class" href="/"
                        >Home</a
                      ></span
                    >
                    <span className="breadcrumbs-separator"></span>
                    <span className="breadcrumb_last" aria-current="page"
                      >Ways to Support</span
                    ></span
                  >
                </p>
              </div>

              <p>
              	<strong>Educational Supplies : </strong>Donate books, computers, lab equipment, or other essential learning tools to enhance the academic experience.

              </p>
              <p>
	<strong>Dedicated Facilities : </strong>Contribute towards the construction or improvement of key facilities such as science laboratories, the school mosque, or recreational spaces.
</p>
<p>
	<strong>Scholarships and Financial Aid : </strong>Fund a student’s education and give them the opportunity to reach their potential.</p>
  <p>
<strong>A School Block : </strong>Gift an entire academic block or wing, leaving a legacy that will impact generations of students.</p>
<p>
<strong>Recurring Donations (Sadaqah) : </strong>Make regular contributions towards operational costs, student meals, or facility maintenance to ensure the school runs smoothly.</p>
            

              <blockquote
                className="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"
              >
                <p>
                Your support, whether big or small, helps us continue to provide an exceptional educational experience for our students.
                </p>
                {/* <cite>Block</cite> */}
              </blockquote>


              <section className="image-with-statistic">
                <div>
                  <div className="animate-wrapper">
                    <div
                      className=" animate-deactive"
                    >
                      <div className="pillar background-primary"></div>
                    </div>
                    <div className="image-wrapper">
                      <div className="js-image-move">
                        <div
                          className="js-image-move__inner object-fit object-fit--cover"
                        >
                          <img
                            decoding="async"
                            src="/assets/11/90192471_2479260052320799_1132917114605142016_n.jpg"                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              </article>
            </div>
            </div>
            </div>
      </main>
    </div>
  )
}

export default WaysToSupport
