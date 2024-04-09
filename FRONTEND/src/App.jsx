import React,{useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home/Home";
import About from "./components/About/About";
import Explore from "./components/Courses/Explore/Explore";
import Contact from "./components/Contact/Contact";
import Search_Explore from "./components/Courses/Explore/Search_Explore";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import CourseDetailsCard from "./components/Courses/Explore/Course_Details/CourseDetailsCard";
import CourseDetailsCard from './components/Courses/Explore/Course_Details/CourseDetailsCard'
import  HomeEg  from "./components/Homeeg/HomeEg";
import CourseCard from "./components/Courses/Course_Card/CourseCard";
import LoadingBar from 'react-top-loading-bar'
import Compare_Emplore from "./components/Courses/Explore/Compare_Emplore";

export default function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Router>
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
            <Routes>
              <Route path="/" element={<HomeEg />} />
              <Route path="about/*" element={<About />} />
              <Route path="get_started/" element={<Explore setProgress={setProgress} />} />
              <Route path='get_started/:courseId' element={<CourseDetailsCard />} />
            <Route path="get_started/search" element={<Search_Explore />} />
            <Route path="get_started/compare" element={<Compare_Emplore/>} />
              <Route path='get_started/search/:courseId' element={<CourseDetailsCard />} />
              <Route path="contact/*" element={<Contact />} />
            </Routes>
        </Router>
      </SkeletonTheme>
{/* <CourseCard /> */}
    </div>
  );
}
