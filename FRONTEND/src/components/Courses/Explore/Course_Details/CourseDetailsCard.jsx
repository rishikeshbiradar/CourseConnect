import React, { useEffect, useState } from "react";
import "./course_details.css";
import Rating from "@mui/material/Rating";
import NavbarEg from "../../../Homeeg/NavbarEg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from "react-router-dom";
import axios from 'axios'
import loading2 from '../../../../Animation3.json'
import Lottie from "lottie-react";

const CourseDetailsCard = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const { courseId } = useParams();
  // const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://courseconnectapi-production.up.railway.app/api/courses?ID=${courseId}`
      )
      .then((response) => {
        const data = response.data.Courses;
        setCourse(data[0]);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, [courseId]); // Use ID as a dependency


  const description = course.description || ""; // Use an empty string as a fallback
 const [desc, setDesc] = useState(description.substring(0, 200));
  const [readMore, setReadMore] = useState(true);

  const handleClick = () => {
    if (!readMore) {
      setDesc(description.substring(0, 200));
      setReadMore(!readMore);
    } else {
      setDesc(description);
      setReadMore(!readMore);
    }
  };

  const domain = course.domain;
  const certificationType = course.course_certification_type;
  const instructor = course.instructor ;
  const organization = course.organization;
  const prerequisites = course.prerequisites;
  const skills = course.skills ;
  const platform = course.platform;
  const lecturesCount = course.lectures_count;
    
  return (
    <div className="card-details-wrapper">
      <div className="card-details-navbar">
        <NavbarEg />
      </div>

      <div className="card-details-container">
        {
          loading ? (
            <Lottie animationData={loading2} />
          ) : (
            <div className="card-square">
          <div className="card-square-left">
            <div className="left-logo-name">
              <a href="#" data-aos='fade' data-aos-duration="1000">{platform}</a>
            </div>
            <div className="left-logo" data-aos='fade'  data-aos-duration="1000">
              <img 
                src="https://www.mooclab.club/showcase/coursera.40/cover-image"
                alt=".."
              />
            </div>
            <div className="left-img ">
              {/* <a href="#"> */}
                <img style={{height:"200px",width:"200px"}}
                  src={course.images}
                  alt=".."
                  // data-aos='fade-up' data-aos-duration="1000"
                />
              {/* </a> */}
            </div>
            {/* <div className="left-btn">
              <a className="course_url" href="#" target="_blank">
                <button className="button-55" role="button">
                  Go to Course
                </button>
              </a>
            </div> */}
          </div>
          <div className="card-square-right">
            <div className="card-right-title">
              <a href="#">
                <h1 data-aos='fade-left' data-aos-duration="1000">{course.title}</h1>
              </a>
            </div>

            <div className="card-right-desc" onClick={handleClick}>
              {readMore ? desc : description}
              <span onClick={handleClick}>
                {readMore ? " Read more ..." : " Read less"}
              </span>
            </div>

            <div className="card-right-numbers">
              <div id="right-ratings" className="card-right-flex">
                <span className="right-span">
                  <Rating
                    name="half-rating-read"
                    defaultValue={parseInt(course.ratings, 10)}
                    precision={0.1}
                    size="large"
                    readOnly
                  />
                  <p>{course.ratings} out of 5</p>
                </span>
                <span
                  id="reviews-count"
                  className="right-span"
                  style={{ height: "fit-content" }}
                >
                  Number of Reviews : {course.reviews_count}
                </span>
              </div>

              <div id="level-students" className="card-right-flex">
                <span className="right-span" >Difficulty Level : Hard</span>
                <span className="right-span">
                  No of Enrolled Students : {course.students_count}
                </span>
              </div>

              <div id="duration-lecturesCount" className="card-right-flex">
                <span className="right-span">
                  Duration of Course : {course.duration}
                </span>

                
                <span className="right-span">
                {lecturesCount !== "Image Not Found" && (
                    <div className="details-card-domain common_shadow">
                      No of Lectures: {lecturesCount}
                    </div>
                  )}
                </span>
              </div>

              <div id="domain-certificationType" className="card-right-flex">
                <span className="right-span" >
                  {domain !== "Not Available" && (
                    <div className="details-card-domain common_shadow">
                      Domain: {domain}
                    </div>
                  )}
                </span>

                <span className="right-span">
                  {certificationType !== "Not Available" && (
                    <div className="details-card-certificationType common_shadow">
                      Certification Type: {certificationType}
                    </div>
                  )}
                </span>
              </div>

              <div
                id="paid"
                className="card-right-flex right-span"
                style={{ display: "block" }}
              >
                Paid : Yes
                <p>
                  (As prices changes continuously, so price is not given here)
                </p>
              </div>

              <div
                id="organization-instructor"
                className="card-right-flex right-span"
              >
                {organization !== "Not Available" &&
                  `Organization: ${organization}`}
                {instructor !== "Not Available" && `Instructor: ${instructor}`}
              </div>

              <div id="prerequisites" className="card-right-flex right-span">
                {prerequisites !== "Image Not Found" &&
                  `Prerequisites: ${prerequisites}`}
              </div>
            </div>

            <div className="right-skills">
              {skills === "Not Available" ? (
                ""
              ) : (
                <div className="details-card-actual-skills">
                  <span>Skills you can gain are from this course : </span>
                  <br />
                  {skills}
                </div>
              )}
            </div>
          </div>
        </div>
          )
        }
        
      </div>
      <div className="card-details-footer">
        Copyright © Group 8 | 2023 All Rights Reserved.
      </div>
    </div>
  );
};

export default CourseDetailsCard;
