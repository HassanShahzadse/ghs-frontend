import React from "react";
import "../../components/footer.css"
import Banner from "../../components/Banner";


const OurStrategy = () => {
  return (
    <div id="content-wrap">
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <article className="">
              <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Our Strategy" },
                  ]}
                  title="Our Strategy"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/300435996_172020862062507_4477850517123929161_n.jpg"
                />

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
                        Our Strategy
                      </span>
                    </span>
                  </p>
                </div>

                <p style={{ fontFamily: 'Nunito Sans'}}>
                At Global Hub School Karachi, our strategy is a dynamic, forward-thinking approach designed to deliver excellence in education while fostering personal and societal growth. Rooted in our core values, our strategy outlines how we empower students, embrace innovation, and build a sustainable future.
                </p>
                <ol style={{ fontFamily: 'Nunito Sans'}}>
                  <li><strong>Encourage Creativity and Individuality:</strong></li>
                  <ul>
                    <li>By offering a diverse range of academic and co-curricular opportunities, we foster an environment where students can explore their passions and develop unique perspectives.</li>
                  </ul>
                  <li><strong>Promote Empathy and Cultural Appreciation:</strong></li>
                  <ul>
                    <li>We emphasize understanding and respect for diverse cultures and viewpoints, preparing our students to be compassionate global citizens.</li>
                  </ul>
                  <li><strong>Foster Independent Thinking:</strong></li>
                  <ul>
                    <li>Through a curriculum that encourages inquiry and critical analysis, we instill a lifelong love for learning and independent thought.</li>
                  </ul>
                  <li><strong>Support Holistic Well-being:</strong></li>
                  <ul>
                    <li>Recognizing the importance of physical, mental, and spiritual health, we provide resources and programs that nurture the overall well-being of our students.</li>
                  </ul>
                  <li><strong>Instill Leadership and Service:</strong></li>
                  <ul>
                    <li>We encourage students to take on leadership roles and engage in community service, understanding the value of contributing to society.</li>
                  </ul>
                  <li><strong>Uphold Core Values:</strong></li>
                  <ul>
                    <li>Kindness, integrity, determination, and gratitude are at the heart of our community, guiding our students in their personal and academic journeys.</li>
                  </ul>

                </ol>

                <p>
                  <img
                    src="/assets/11/464498630_980572330772559_1755386396991265517_n.jpg"
                    alt="Image"
                    className="image-our-purpose"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurStrategy;
