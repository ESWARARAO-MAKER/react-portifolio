import React from "react";
import "./backendSkills.css";

export default function BackendSkills(){
    return (
        <div className="skills">
            <div className="skillsSection">
                <h2>Back End Developer</h2>
                <p>Frontend Developers work closely with designers to make websites beautiful, functional, and fast. This learning path includes:</p>
                <div className="cards-container">
                    <div class="card border-green">
                        <p>Basics of HTML5</p>
                    </div>
                    <div className="card border-dark-green">
                        <p>CSS Specificity</p>
                    </div>
                    <div className="card border-dark-yellow">
                        <p>CSS Box Model</p>
                    </div>
                    <div className="card border-orange">
                        <p>Bootstrap Flex Utilities</p>
                    </div>
                    <div className="card border-blue">
                        <p>Bootstrap Grid System</p>
                    </div>
                    <div className="card border-violet">
                        <p>CSS Cascading</p>
                    </div>
                    <div className="card border-pink">
                        <p>Website Layout</p>
                    </div>
                    <div className="card border-red">
                        <p>DOM Manipulation</p>
                    </div>
                </div>
                <button className="backend">Front End Section</button>
            </div>
        </div>
    )
}