import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(){
    return (
        <div className="navbarSection">
            <div>
                <Link to="/"><h2 className="logo">Portifolio</h2></Link>
            </div>
            <ul className="navbarLinks">
                <Link to="/"><li>Home</li></Link>
                <Link to="/education"><li>Education</li></Link>
                <Link to="/skills"><li>Skills</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/contact"><li>Contact Me</li></Link>

            </ul>
        </div>
    )
}