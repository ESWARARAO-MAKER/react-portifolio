import React from "react";
import "./projects.css"


export default function Projects(){
    return (
        <div className="projects">
            <div className="projectsDes">
                <div className="des">
                    <h2>Projects</h2>
                    <p>My projects make use of a vast variety of the latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</p>
                </div>
                <div>
                    <img src="https://trinomialtechnologies.com/assets/img/services-details/software-development-1.jpg" alt="" className="projImg"/>
                </div>
            </div>

            <div className="projectsList">
                <div className="project">
                    <a href="https://eswar-portifilio.netlify.app/"><h2>Calculator Using React</h2></a>
                    <p>HTML, CSS and React</p>
                </div>
                <div className="project">
                    <a href="https://eswar-portifilio.netlify.app/"><h2>TodoList Dynamic Application</h2></a>
                    <p>HTML, CSS and JavaScript</p>
                </div>
                <div className="project">
                    <a href="https://eswar-portifilio.netlify.app/"><h2>Responsive Restaurent Application</h2></a>
                    <p>HTML, CSS and JavaScript</p>
                </div>
                <div className="project">
                    <a href="https://eswar-portifilio.netlify.app/"><h2>Tourism Static Site Application</h2></a>
                    <p>HTML and CSS</p>
                </div>
                
            </div>
            <div className="showMoreBtn">
                <a href="https://github.com/ESWARARAO-MAKER"><button>Show More</button></a>
            </div>
        </div>
    )
}