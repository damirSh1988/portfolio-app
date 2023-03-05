import React from "react";
import './Projects.css';
import appImage from './appImage.jpg';

function Projects(){
    return(
        <>
        <div className="Projects">
            <div className="TitleProject">
                <p>Projects I’ve Worked On</p>
            </div>
        </div>
        <div className="Project-1">
            <div className="ProjectFrame-21">
                <img alt="" src={appImage}></img>
            </div>
            <div className="ProjectInfo">
                <div className="InfoTitle">
                    <p>Accounting of cargo documents</p>
                </div>

            </div>

        </div>
        </>
    )
}

export default Projects;