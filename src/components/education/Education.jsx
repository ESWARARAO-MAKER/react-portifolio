import React from "react";
import "./education.css";
import {Computer,School,Code} from "@mui/icons-material";

export default function Education(){
    return (
        <div className="education">
            <div className="educationDesc">
                <div className="educationImg">
                    <img src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1691490595/uploads/portfolio/education_l7igfv.png" alt=""/>
                </div>
                <div className="eduDesc">
                    <h1>Education</h1>
                    <h4>Basic Qualification and Certification</h4>
                    <div className="compImg">
                        <Computer />
                    </div>
                </div>
            </div>
            <div className="eduCard">
                <div className="eduContainer">
                    <p class="eduHeading"><School/> <h2>NxtWave</h2></p>
                    <p>NxtWave CCBP 4.0 Academy - smart</p>
                    <p>(March 2023 to July 2024)</p>
                </div>
                <div className="eduContainer">
                    <p class="eduHeading"><School/> <h2>University College of Engineering Narasaraopet</h2></p>
                    <p>Bachelor of Technology - BTech, CSE</p>
                    <p>(Aug 2019 to May 2023)</p>
                </div>
                <div className="eduContainer">
                    <p class="eduHeading"><School/> <h2>Sri Chaitanya Junior College, Visakhapatnam</h2></p>
                    <p>AP Intermediate Board Education, MPC</p>
                    <p>(2017 to 2019)</p>
                </div>
                <div className="eduContainer">
                    <p class="eduHeading"><School/> <h2>Sri Jayendra School, Kotturu</h2></p>
                    <p>Secondary School Certification</p>
                    <p>(Upto 2017)</p>
                </div>
            </div>
            <h1 className="certication">Certifications</h1>
            <div className="eduCard">
                <div className="certificationContainer">
                    <p class="certificationHeading"><Code/> <h2>Python Certification</h2></p>
                    <p>Obtain Certification from NxtWave CCBP 4.0</p>
                </div>
                <div className="certificationContainer">
                    <p class="certificationHeading"><Code/> <h2>SQL Certification</h2></p>
                    <p>Obtain Database(MySQL) Certification from NxtWave CCBP 4.0</p>
                </div>
                <div className="certificationContainer">
                    <p class="certificationHeading"><Code/> <h2>HTML, CSS and JavaScript Certifications</h2></p>
                    <p>NxtWave certified by the HTML, CSS and JavaScript for Beginners From Basic to Advance</p>
                </div>
            </div>
            
        </div>
    )
}