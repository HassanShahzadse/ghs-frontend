import React from "react";
import "../../components/footer.css";
import Banner from "../../components/Banner";

const LeadershipCard = ({ title, name, imageUrl, targetId }) => (
  <div className="col-md-6">
    <a className="inline-popup" href={`#${targetId}`}>
      <div className="teaser teaser--community">
        <span
          className="teaser__inner"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></span>
        <span>
          <h3 className="title title--small color-white">{title}</h3>
          <small clas>{name}</small>
        </span>
      </div>
    </a>
    <div className="modal-item modal-item--admissions mfp-hide" id={targetId}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="mobile-title">
              <div className="title title--md color-primary">{title}</div>
              <p className="intro">{name}</p>
            </div>
            <div
              className="author-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OurLeadership = () => {
  const leadershipData = [
    {
      title: "CEO",
      name: "Lt Cdr (r) Suhaib Farooq",
      imageUrl:
        "/assets/11/ceo.jpeg",
      targetId: "target-1",
    },
    {
      title: "Principal",
      name: "Mr. Khuzaema Gauhar Siddiqui",
      imageUrl:
        "/assets/11/principle.jpeg",
      targetId: "target-1",
    },
    // Add more objects as needed
  ];
  return (
    <div id="content-wrap" className="page-id-21">
      <main className="main ">
        <Banner
          breadcrumbs={[
            { label: "Home", url: "/" },
            { label: "Our Leadership" },
          ]}
          title="Our Leadership"
          introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
          imageSrc="/assets/11/leadership.jpeg"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
                <div className="breadcrumbs-mobile">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="/">
                          Home
                        </a>
                      </span>{" "}
                      <span className="breadcrumbs-separator"></span>{" "}
                      <span className="breadcrumb_last" aria-current="page">
                        Our Leadership Team
                      </span>
                    </span>
                  </p>{" "}
                </div>
                <div className="container">
                  <div className="row">
                    <div className="title title--lg">
                      {/* <h1
                          className="banner__title title color-black title--xl2" style={{color:"#223C59", marginTop:"18px"}}
                        >
                          Our Leadership
                        </h1> */}
                      <p className="mt-1 pt-3">
                        At Global Hub School Karachi, our leadership is founded
                        on the belief that the best educators inspire the best
                        outcomes. That’s why we gather the finest teaching
                        professionals from across the country, uniting diverse
                        expertise and experiences under one roof. Our educators
                        are not just teachers—they are mentors, role models, and
                        innovators who ignite a passion for learning in our
                        students. Each faculty member brings a unique
                        perspective and specialized knowledge, creating a rich
                        and varied educational experience for every child. By
                        learning from educators with diverse skills and
                        backgrounds, our students are exposed to multiple ways
                        of thinking, problem-solving, and understanding the
                        world. This dynamic exchange of ideas equips them to
                        become responsible, capable, and global citizens. As
                        leaders in education, we are committed to fostering
                        excellence, innovation, and inclusion, ensuring that
                        every student at GHS Karachi is inspired to reach their
                        full potential. Through our leadership, we aim to build
                        a community where ambition, creativity, and resilience
                        thrive.
                      </p>
                    </div>
                  </div>
                </div>
                <section className="leadership-grid">
                  <div className="container">
                    <div className="row">
                      {leadershipData.map((item, index) => (
                        <LeadershipCard
                          key={index}
                          title={item.title}
                          name={item.name}
                          imageUrl={item.imageUrl}
                          targetId={item.targetId}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurLeadership;
