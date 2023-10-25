import React from "react";
import "./skills.css";
import FrontendSkills from "../frontendSkills/FrontendSkills";
import BackendSkills from "../backendSkills/BackendSkills";


export default function Skills(){
    return (
        <div className="skillsSection">
            <FrontendSkills className="fSec"/>
            <BackendSkills/>
        </div>
    )
}