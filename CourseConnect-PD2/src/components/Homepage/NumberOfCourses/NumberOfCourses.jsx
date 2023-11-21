import "./no_of_courses.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const NumberOfCourses = ({number, platform}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="platformNo" data-aos="flip-left" data-aos-duration="1000">
        <div id="number_of_courses">
            {number}
        </div>

        <div id="name_of_platform">
            {platform}
        </div>
    </div>
  )
}

export default NumberOfCourses;