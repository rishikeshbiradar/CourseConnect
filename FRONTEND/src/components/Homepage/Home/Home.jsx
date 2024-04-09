import logo from "../Images/logo.png"
import banner1 from "../Images/banner1.png"
import banner2 from "../Images/banner2.png"
import "./Home.css";
import Banner from "../Banner"
import No_box from "../NumberBoxes/NumberBoxes";
import Updates from "../Updates/Updates"
import NoOfCourses from "../NumberOfCourses/NumberOfCourses"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="homepage_main">
      <div className="logo-bar" >
        <Banner src={logo} desc="logo" />
        <Banner src={banner1} desc="banner1" />
        <Banner  src={banner1} desc="banner2" />
      </div>

        <div className="homepage_scroll">
            <div className="homepage_scroll_subdiv1">
                <div className="rightToLeft">
                    <p>Artificial Intelligence</p>
                    <p>Cloud Computing</p>
                    <p>Machine Learning</p>
                    <p>Data Structures</p>
                    <p>Web Development</p>
                    <p>Programming Languages</p>
                    <p>Data Science</p>
                    <p>MLOPS</p>
                    <p>DevOps</p>
            <p>Web Development</p>
            <p>Business Studies</p>
            <p>Finance</p>
            <p>Marketing</p>
                </div>
            </div>
        </div>
      <div className="middle_sec">
        <div className="middle_div_1">
          <div className="count-boxes">
            <No_box title="No of Courses" number="6500" color="orange" data-aos="fade-up" />
            <No_box title="No of Users" number="100" color="green" data-aos="fade-up"/>
            <No_box title="No of Platforms" number="4" color="blue" data-aos="fade-up"/>
          </div>

          <div className="middle_div_2">
            <div>
            <h1>About <span style={{color:"purple"}}>Course</span>
            <span style={{color:"blue"}}>Connect</span>...</h1>
            </div>
            <div className="extraLine"></div>
            <div className="homepage_about">
                <h2>A reservoir of Online Courses</h2>
                <p data-aos="fade-right"data-aos-duration="1500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minima dicta ipsum suscipit enim aspernatur quas! Dignissimos, vitae magnam, incidunt fugiat reiciendis animi omnis dolores, rem fuga quisquam accusamus molestiae. Natus unde omnis magnam! Itaque tenetur recusandae eveniet optio nam consequatur facilis soluta modi deleniti, reiciendis debitis quod molestiae beatae voluptatum ut commodi, ullam nobis nisi. Autem reiciendis, sed unde, nostrum eos minima, magnam eius soluta possimus repellendus tempore. Quia quis, sint, tempora quisquam, blanditiis sunt cupiditate necessitatibus quas rem dignissimos minima nam a quasi cum fugiat nulla delectus impedit voluptatem temporibus eius? Illum explicabo enim exercitationem ipsam, libero laboriosam nisi minima eius ipsa vitae dolores itaque consequuntur optio architecto voluptas non! Inventore odit, molestias voluptatibus, neque expedita similique repellat cumque itaque ea error adipisci. Nobis deleniti dolorem unde eius asperiores nulla, eum quo odio fugit eveniet debitis ducimus voluptas dicta. Non error velit commodi, amet dolor dolorum officiis omnis a est soluta beatae consequatur nesciunt sequi enim! Aut ea cumque, eius non est dolorum commodi voluptas similique culpa a modi quo itaque impedit voluptate delectus, atque aperiam expedita debitis assumenda iusto, vitae odio recusandae adipisci beatae! Fuga porro rem blanditiis atque, doloribus repellendus ipsum iusto ipsam, perspiciatis, quae hic.
                </p>
            </div>
          </div>
        </div>

        <div className="div1_2">
          <Updates></Updates>
        </div>
      </div>

      <div className="courses_on_platform">
        <NoOfCourses number={1000}  platform="CourseEra" />
        <NoOfCourses number={5000}  platform="Udemy" />
        <NoOfCourses number={100}  platform="GFG" />
        <NoOfCourses number={300}  platform="Udacity" />
      </div>

      <div className="explore_button">
        <Link to='/explore'><button>EXPLORE</button></Link>
      </div>

      <div className="homepage_tail">
        Copyright © Group 8 | 2023 All Rights Reserved.
      </div>
    </div>
  );
};

export default Home;