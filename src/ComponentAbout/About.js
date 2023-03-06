import React from "react";
import './About.css';
import avatar from './aboutImage.jpg';



function About(){
    return(
        <>
        <span id="about" style={{display: 'block', height: '60px'}}></span>
        <div className="About">
            <div className="AboutInfo">
                <div className="Title">
                    <p style={{color: 'white', fontFamily:'Courier Prime', fontSize: '60px' }}>About me</p>
                    <p style={{color: 'white', fontSize: '20px'}}>
                        I’m software developer and this is my portfolio.
                       I’m software developer and this is my portfolio. 
                       I’m software developer and this is my portfolio. 
                       I’m software developer and this is my portfolio.</p>
                </div>
            </div>
            <div className="Frame-21">
                <img src={avatar} className="avatar"></img>
            </div>

        </div>
        </>
    )
}

export default About;