import React from "react";
import "./bottomSection.css"
import {GitHub,LinkedIn,Twitter} from "@mui/icons-material"

export default function BottomSection(){
    return(
        <div className="bottomContainer">
            <div className="bottomSectionDesc">
                <div className="aboutDesc">
                    <span>Hello, I am</span>
                    <h1>Eswararao Balaga</h1>
                    <p>A passionate individual who thrives to create sustainable and scalable solutions.</p>
                    <div className="socialMedia">
                        <a href="https://github.com/ESWARARAO-MAKER"><GitHub/></a>
                        <a href="https://www.linkedin.com/in/eswararao-balaga-03911723b/"><LinkedIn/></a>
                        <a href="/#" target="_blank"><Twitter/></a>
                    </div>
                    <div className="starMeOnGithubBtn">
                        <a href="https://github.com/ESWARARAO-MAKER"><button>Star Me On Github</button></a>
                    </div>
                </div>
                <div className="aboutProfile">
                    <img src="https://st2.depositphotos.com/4111759/47712/v/450/depositphotos_477127596-stock-illustration-bearded-man-make-restaurant-dish.jpg" className="aboutImg" alt=""/>
                </div>
            </div>
            <h1 className="whatIDo">What I Do</h1>
            <div className="bottomWhatIDo">
                <div className="webdev">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/559/614/small/illustration-of-web-development-and-coding-in-computer-screen-with-codes-development-process-making-a-website-can-be-used-for-web-landing-page-animation-presentation-etc-vector.jpg" alt=""/>
                    <h4>Web Development</h4>
                    <p>Expertise in responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Angular.</p>
                </div>
                <div className="webdev">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/559/614/small/illustration-of-web-development-and-coding-in-computer-screen-with-codes-development-process-making-a-website-can-be-used-for-web-landing-page-animation-presentation-etc-vector.jpg" alt=""/>
                    <h4>Web Development</h4>
                    <p>Expertise in responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Angular.</p>
                </div>
                <div className="webdev">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/559/614/small/illustration-of-web-development-and-coding-in-computer-screen-with-codes-development-process-making-a-website-can-be-used-for-web-landing-page-animation-presentation-etc-vector.jpg" alt=""/>
                    <h4>Web Development</h4>
                    <p>Expertise in responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Angular.</p>
                </div>
            </div>
        </div>
    )
}