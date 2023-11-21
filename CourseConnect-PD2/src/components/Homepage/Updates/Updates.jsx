import React, { useState } from 'react';
import logo from  "../Images/logo.png";
import banner1 from "../Images/banner1.png";
import "./updates.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Updates = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    let newsArr = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit ad maiores. Unde laborum ea nostrum eius accusamus soluta alias?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit ad maiores. Unde laborum ea nostrum eius accusamus soluta alias?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit ad maiores. Unde laborum ea nostrum eius accusamus soluta alias?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit ad maiores. Unde laborum ea nostrum eius accusamus soluta alias?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit ad maiores. Unde laborum ea nostrum eius accusamus soluta alias?",
        // Add more news items here
    ];

    let imgs = [logo, banner1, logo, banner1, logo, banner1];

    let images = <div className="images-div">
        {imgs.map((item) => (
            
                <img src={item} alt="images" />
            
        ))}
    </div>

let news = <ul>
    {newsArr.map((item, index) => (
        <li key={index}> {item} </li>
    ))}
</ul>

    const handlePhotos = () => {
        setNavTabs(images);
    };

    const handleUpdates = () => {
        setNavTabs(news);
    };

    const [navTabs, setNavTabs] = useState(news);

    return (
        <div className='updates'>
            <div className="updates-nav">
                <ul>
                    <li onClick={handleUpdates}>Latest Updates</li>
                    <li onClick={handlePhotos}>Photos</li>
                </ul>
            </div>

            <div className="updates-main" data-aos='fade-left' data-aos-duration="1500" >
                {navTabs}
            </div>
        </div>
    );
};

export default Updates;