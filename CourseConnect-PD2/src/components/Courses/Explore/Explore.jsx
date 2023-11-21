import React, { useState, useEffect } from 'react'
import CourseCard from '../Course_Card/CourseCard';
import axios from "axios"
import "./Explore.css"
import Downnav from './Downnav';
import SkeletonCard from '../Course_Card/SkeletonCard';
import NavbarEg from '../../Homeeg/NavbarEg';

export default function Explore(props) {

  const [isSearching, setIsSearching] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1);

  const FetchMoreData = (page) => {
    props.setProgress(10);
    const API = `https://courseconnectapi-production.up.railway.app/api/courses?page=${page}&limit=10`;
    setTimeout(
      () => {
        axios.get(API).then((response) => {
          props.setProgress(40);
          const data = response.data.Courses;
          props.setProgress(70);
          setCourses(data)
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setloading(false);
          props.setProgress(100);
        }).catch((error) => {
          console.log("Error fetching data", error)
          setloading(false)
        })
      }, 1000
    )
  }

  useEffect(() => {
    console.log(page)
    FetchMoreData(page);
  }, [page]);

  const handleOnNext = () => {
    setPage(page + 1);
  }
  const handleOnPrev = () => {
    setPage(page - 1);
  }

  return (
    <div className='explore-wrapper'>
      <NavbarEg />
      <div className="row my-3 mx-3">
        <h1 style={{ fontSize: '40px', textAlign: "center" }} >Courses List</h1>
        {loading && courses.length === 0 ? (
          <SkeletonCard />
        ) : (
          <div className="course_container">
            {courses.map((element) => {
              return (<div className='row' key={element.ID} >
                <CourseCard data={element} />
              </div>)
            })}
          </div>)}
      </div>
      <div className="container d-flex justify-content-between" style={{ height: "80px" }}>
        <button disabled={page <= 1} style={{ fontSize: "16px" }} type="button" className="btn btn-dark" onClick={handleOnPrev} > &larr; Previous</button>
        <button style={{ fontSize: "16px" }} type="button" className="btn btn-dark" onClick={handleOnNext} >Next &rarr;</button>
      </div>
      <div style={{ position: "fixed", bottom: "0px", zIndex: '1000' }}>
        <Downnav />
      </div>

    </div>
  )
}

