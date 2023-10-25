import React from "react";
import "./contactMe.css"
import {GitHub,LinkedIn,Twitter} from "@mui/icons-material"


export default function ContactMe(){
    return (
        <div className="contactMe">
            <div className="contanctMeDesc">
                <div>
                    <img src="/assets/eswar.jpg" alt="" className="contactImg"/>
                </div>
                <div className="conDesc">
                    <h2>Contact Me</h2>
                    <p>I am available on almost every social media. You can message me. A passionate individual <br/>who thrives to create sustainable and scalable solutions.</p>
                    <div className="socialMedia">
                        <a href="https://github.com/ESWARARAO-MAKER"><GitHub/></a>
                        <a href="https://www.linkedin.com/in/eswararao-balaga-03911723b/"><LinkedIn/></a>
                        <a href="https://github.com/ESWARARAO-MAKER"><Twitter/></a>
                    </div>
                    <div>
                        <button className="resume">See My Resume</button>
                    </div>
                </div>
            </div>
            <div className="addressContainer">
                <div className="addressDesc">
                    <h2>Address</h2>
                    <p>Pedda Goluguvalasa, Therlam(Mandal), Vizianagaram(District)</p>
                    <p>Andhra Pradesh, 532455</p>
                    <p>India</p>
                    <p>Phone Numvber: +91 8688424915</p>
                    <p>Email: balagaeswararao2002@gmail.com</p>
                </div>
                <div className="addressImg">
                    <img src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1691490594/uploads/portfolio/adress_o81s9u.png" alt=""/>
                </div>
            </div>
        </div>
    )
}