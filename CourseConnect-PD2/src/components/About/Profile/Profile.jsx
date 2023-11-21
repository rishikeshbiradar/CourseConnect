import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import Github from './github.gif'
import Linkedin from './linkedin.gif'
import Mail from './mail.gif'
import Insta from './insta.gif'

export default function Profile(props) {
    return (
        <div>
            <div className="profileCard">
                <img src={props.image} className="profileImage" alt="..." />
                <h5 className="profileHeading" >{props.heading} </h5>
                <div className="profileLinks" >
                    <Link to={props.linkedin} target='_blank' class="linkedin"><img src={Linkedin} alt=".." /></Link>
                    <Link to={props.github} target='_blank'  class="github"><img src={Github} alt=".." /></Link>
                    <Link to={props.gmail} target='_blank' ><img src={Mail} alt=".." /></Link>
                    <Link to={props.instagran} target='_blank'  class="instagram"> <img src={Insta} alt=".." /></Link>
                </div>
            </div>
        

        </div>
    )
}
