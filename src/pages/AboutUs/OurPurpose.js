import React from 'react'
import "../../components/footer.css"
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'

const OurPurpose = () => {
  return (
    <div id="content-wrap" >
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <article className="">
            <Banner
                  breadcrumbs={[
                    { label: "Home", url: "/" },
                    { label: "Our Purpose" },
                  ]}
                  title="Our Purpose"
                  introText="Our broad curriculum promotes academic excellence, the best habits of independent thought and a lifelong habit of intellectual curiosity and love of learning."
                  imageSrc="/assets/11/DSC_4385.JPG"
                />
              <section
                className="aims-ethos aims-ethos--banner"
                data-color="secondary"
              >
                <div className="">
                  <div className="row">
                    <div
                      className="offset-lg-1 col-lg-10 offset-md-1 col-md-10 "
                    >
                     
                <div className="breadcrumbs-mobile p-md-0 px-3">
                  <p id="breadcrumbs">
                    <span>
                      <span>
                        <a className="my-class" href="/">
                          Home
                        </a>
                      </span>
                      <span className="breadcrumbs-separator"></span>
                      <span className="breadcrumb_last" aria-current="page">
                        Our Purpose
                      </span>
                    </span>
                  </p>
                </div>
                      <div className="title title--lg p-md-0 px-3">
                        <p className="mt-40">
                        At Global Hub School Karachi, we are dedicated to providing a world-class education that inspires excellence, fosters individuality, and empowers students to become compassionate global citizens. Situated on a sprawling 250-acre campus, GHS combines an internationally recognized Cambridge-based curriculum with state-of-the-art facilities and a commitment to sustainable practices. Our experienced educators, drawn from diverse backgrounds, bring unique expertise to nurture critical thinking, creativity, and leadership in every student. Guided by a dynamic Governing Body of leaders from education, philanthropy, and medicine, we continually strive to set new benchmarks in academic and personal development, ensuring our students are prepared to thrive in a rapidly evolving world.
                        </p>
                        <p className="mt-40">
                        Our mission is to cultivate the inherent talents of young individuals, enabling them to thrive and positively impact society. Rooted in our foundational values are the key aims of the college that we hope to instill in each of our students:<br />
                          <p>
                            In advancing this purpose, GHS is committed to
                            an ethos which:
                          </p>
                        </p>
                      </div>

                      <div
                        className="row"
                        style={{ fontFamily: 'Nunito Sans'}}
                      >
                        <div className="col-lg-6">
                          <ol>
                            <li>
                          <strong> Fostering Academic Excellence : </strong> 
We provide an internationally recognized Cambridge-based curriculum delivered by expert educators. This rigorous academic framework develops critical thinking, creativity, and analytical skills, preparing students to excel in an ever-changing world.

                            </li>
                            <li>
                          <strong> Inspiring Lifelong Learning : </strong> 
Our approach encourages students to develop a love for learning, empowering them to pursue knowledge independently and confidently throughout their lives. By cultivating curiosity, we ensure our pupils stay adaptable and informed.

                            </li>
                          </ol>
                        </div>
                        <div className="col-lg-6">
                          <ol start="3">
                            <li>
                    <strong>       Creating Leaders of Tomorrow : </strong>
GHS nurtures leadership qualities in every student by offering opportunities to take initiative, work collaboratively, and lead with empathy. We prepare our pupils to make meaningful contributions both locally and globally.
                            </li>
                            <li>
                         <strong>  A Holistic Approach to Growth : </strong> 
Balancing academics, co-curricular activities, and well-being, we provide a well-rounded education that develops confident, compassionate, and competent individuals.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
                              <div className='flex justify-center text-center content-center '>
                           <Link className='button' to="/AboutUs/OurStrategy"> Our Strategy</Link>
                            <a className="button" href="https://app.ghskarachi.com/student/online/reg2" target='_blank'>Apply Now</a>
                            </div>

              <section className="aims-ethos aims-ethos--6" data-color="grey">
                <div className="container">
                  <div className="row">
                    <div
                      className=""
                    >
                      <h1>
                        <div className="title title--shadow horizontal-scroll--right" style={{marginLeft:'8px'}} >
                          Our Purpose
                        </div>
                      </h1>
                      <div className="title title--lg"></div>

                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {/* <img
                            fetchpriority="high"
                            decoding="async"
                            className='image-our-purpose'
                            style={{ objectFit:"contain"}}
                            src="/assets/11/464498630_980572330772559_1755386396991265517_n.jpg"
                          /> */}
                    <video
                      controls
                      autoPlay
                      loop
                      playsinline
                      muted
                      className="h-1/2 w-1/2 absolute object-cover"
                      style={{
                        width: "100%",
                        marginTop: "70px",
                      }}
                    >
                      <source
                        src="/assets/video/MVI_0263.MOV"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                        </div>
                        <div className="col-md-6" style={{ fontFamily: 'Nunito Sans' }}>
                          <p>
                            <span className="intro"
                              >In order to achieve this GHS:</span
                            >
                          </p>
                          <p>
                            a) is committed to establishing a supportive and
                            safe environment for its boys, its staff and the
                            wider school community; this is the foundation
                            of the trusting relationships formed between
                            boys and adults, which is a particular feature
                            of GHS life.
                          </p>
                          <p>
                            b) has a competitive school culture in which
                            boys are encouraged to pursue excellence in all
                            its differing forms, to develop their strengths
                            and to seek out new challenges. This often helps
                            to drive personal and collective achievement,
                            with the process being valued as much as the
                            outcome.
                          </p>
                          <p>
                            c) is more devolved and less centralised than
                            many institutions. This deliberately gives
                            greater autonomy to adults and to boys, who
                            accept that with that autonomy comes
                            responsibility and accountability. Rigorous
                            planning and attention to detail are central to
                            the school’s sustained success.
                          </p>
                          <p>
                            GHS is proud of its history and heritage and
                            honours many of its traditions; but the school
                            has always had a dynamic relationship with its
                            past and it is in balancing the old with the new
                            that it finds inspiration for change in the
                            future.
                          </p>
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

export default OurPurpose
