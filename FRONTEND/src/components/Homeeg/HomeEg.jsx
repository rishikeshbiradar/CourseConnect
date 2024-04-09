import "./homeeg.css";
import svg1 from "./Online_learning.gif";
import Numbers1 from "./Numbers1";
import AOS from "aos";
import { useEffect, useRef } from "react";
import Piechart from "./Piechart";
import NavbarEg from "./NavbarEg";
import { NavLink } from "react-router-dom";
import Scroll from "./scroll.png";

const HomeEg = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const analysisRef = useRef(null);
  const handleScroll = () => {
    if (analysisRef.current) {
      analysisRef.current.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling animation
      });
    }
  };

  return (
    <div className="HomeEg-wrapper">
      <div className="egHome-navbar">
        <NavbarEg />
      </div>
      <div className="eg-home">
        <div className="eg-title">
          <div className="eg-hero-title">
            <h1>
              <span data-aos="fade-right" data-aos-duration="1000">
                CourseConnect
              </span>
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Bringing You to the Top Rated Courses
            </h1>
          </div>

          <div
            className="eg-hero-desc"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p>
              CourseConnect serves as a comprehensive platform, offering a
              centralized solution for accessing a diverse array of courses from
              various online learning platforms. By consolidating educational
              offerings in one place, it simplifies the search and enrollment
              process for learners, providing a seamless and efficient
              experience. This streamlined approach enhances accessibility,
              allowing users to explore, compare, and choose courses tailored to
              their needs from a multitude of sources.
            </p>
          </div>

          <div className="eg-button-2">
            <NavLink to={"/get_started"}>
              <button
                className="button-24"
                role="button"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
              >
                Get Started
              </button>
            </NavLink>
          </div>

          <div className="eg-numbers">
            <Numbers1 number={500} title={"Users"} />
          </div>
          <div className="scroll-btn-wrapper">
            <div className="scroll-btn" onClick={handleScroll}>
              <img src={Scroll} alt=".." />
            </div>
          </div>
        </div>
        <div className="eg-svg1">
          <img
            src={svg1}
            alt=".."
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>

      <div className="eg-analysis" ref={analysisRef}>
        <div className="eg-piechart">
          <h3 data-aos='fade-right' data-aos-duration='500' style={{fontWeight:'600'}}>Courses Information</h3>
          <Piechart />
        </div>

        <div className="eg-info-wrapper">
          <div className="eg-courses-info">
            <div className="course-name-no">
              <img src='https://logowik.com/content/uploads/images/coursera4660.jpg' alt="Coursera" data-aos='fade-right' data-aos-duration='500'/>
              <p data-aos='fade-right' data-aos-duration='500' >Number of Courses : 1200</p>
            </div>
            <div className="course-name-no">
              <img src='data:image/png;base64,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' alt="Udemy" data-aos='fade-down' data-aos-duration='500' />
              <p data-aos='fade-up' data-aos-duration='500'>Number of Courses : 5500</p>
            </div>
            <div className="course-name-no">
              <img src='data:image/png;base64,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' alt=".." style={{height:'149.8px'}} data-aos='fade-left' data-aos-duration='500'/>
              <p data-aos='fade-left' data-aos-duration='500'>Number of Courses : 300</p>
            </div>
          </div>

          <div className="abt-courses">
            <p data-aos='fade'>
              We have brought all the courses in various domains like software engineering, web developement, artificial intelligence, machine learning, finance, marketing, etc at one place so that students can find convinience to compare with other courses while choosing the courses. They will get more ease of comparision with other similar courses from various platforms.This will help students to take better decision while choosing course for themself. <br />
              <span>Features of our platform : </span>
              <ul>
                <li>Comprehensive Course Catalog</li>
                <li>Streamlined Decision-Making</li>
                <li>User-Friendly Interface</li>
                <li>Cross-Platform Comparisons</li>
                <li>Personalized Recommendations</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <p className="homeeg-copyright">
      Copyright © Group 8 | 2023 All Rights Reserved.
      </p>
      
    </div>
  );
};

export default HomeEg;
