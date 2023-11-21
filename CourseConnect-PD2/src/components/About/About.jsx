import React from 'react'
import "./About.css"
import Profile from "./Profile/Profile"
import Rushikesh from "./Developer_Images/Rushikesh.jpg"
import Shailesh from "./Developer_Images/Shailesh.jpg"
import Suyash from "./Developer_Images/Suyash.jpg"
import Koustubh from "./Developer_Images/Koustubh.jpg"
import NavbarEg from '../Homeeg/NavbarEg'

export default function About() {
  return (
    <div className='about-wrapper'>
      <NavbarEg />
        <h1 className='aboutHeading' >Developers</h1>
      <div className='profiles'>
        <Profile image={Rushikesh} 
        heading="Rushikesh Biradar" 
        github="https://github.com/rishikeshbiradar" 
        linkedin="https://www.linkedin.com/in/rushikesh-biradar-1b620722a/" 
        gmail="" 
        instagram="https://www.instagram.com/rushisb.55/" 
        />

        <Profile image={Shailesh} 
        heading="Shailesh Kaliya" 
        github="https://github.com/shaileshkaliya" 
        linkedin="https://www.linkedin.com/in/shailesh-kaliya/" 
        gmail="" 
        instagram="https://www.instagram.com/rushisb.55/" 
        />

        <Profile image={Suyash} 
        heading="Suyash Gadhave" 
        github="#" 
        linkedin="https://www.linkedin.com/in/suyash-gadhave-59778422a/" 
        gmail="" 
        instagram="https://www.instagram.com/rushisb.55/" 
        />

        <Profile image={Koustubh} 
        heading="Koustubh Kulkarni" 
        github="#" 
        linkedin="https://www.linkedin.com/in/koustubh-kulkarni-937b2122b/" 
        gmail="" 
        instagram="https://www.instagram.com/rushisb.55/" 
        />
      </div>

      <div className="abt-footer">
          Copyright © Group 8 | 2023 All Rights Reserved.
        </div>
    </div>
  )
}
