import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import "./navbar.css";
import {Dehaze} from "@mui/icons-material"

export default function Navbar(){
    const [showOption, setShowOption] = useState(false);
    return (
        <div className="navBar">
            <nav className="navbarSection navMobSec">
                <div>
                    <NavLink to="/"><h2 className="logo">Portifolio</h2></NavLink>
                </div>
                <div className={showOption ? "hideNavbar" : "navbarLinks"}>
                    <ul className="navLink">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/education">Education</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact Me</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div className="toggleBtn">
                <button onClick={()=>setShowOption(!showOption)}><Dehaze/></button>
            </div>
        </div>
    )
}