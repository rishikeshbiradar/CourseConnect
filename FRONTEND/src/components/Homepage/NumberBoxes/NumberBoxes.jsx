import React from 'react'
import "./numberboxes.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from 'react';

const NumberBoxes = ({title, number,color}) => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <div>
        <div  className="no-box" style={{backgroundColor:color}}>
            <div className="box-title" >
                {title}
            </div>
            <div className="box-number">
                {number}
            </div>
        </div>
    </div>
  )
}

export default NumberBoxes