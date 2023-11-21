import './navbareg.css'
import logo from "./logo.png"
import { NavLink } from 'react-router-dom'

const NavbarEg = () => {
    return (

        <div className="eg-navbar" >
            <div className="eg-logo">
                <NavLink to={'/'}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            <div className="eg-nav-items ">
                <button className='eg-nav-btn'>
                    <NavLink to={'/'}
                        style={({ isActive }) => ({
                            color: isActive ? "pink" : "white",
                        })}
                        className='eg-nav-items-link'
                    > Home</NavLink>
                </button>
                <button className='eg-nav-btn'>
                    <NavLink to={'/about'}
                        style={({ isActive }) => ({
                            color: isActive ? "pink" : "white",
                        })}
                        className='eg-nav-items-link'
                    > About Us</NavLink>
                </button>
                <button className='eg-nav-btn'>
                    <NavLink to={'/contact'}
                        style={({ isActive }) => ({
                            color: isActive ? "pink" : "white",
                        })}
                        className='eg-nav-items-link'
                    > Contact Us</NavLink>
                </button>
            </div>

            <div className="get-started-btn">
                <NavLink to={'/get_started'}>
                    <button className="button-28" role="button">Get Started</button>
                </NavLink>
            </div>
        </div>
    )
}

export default NavbarEg