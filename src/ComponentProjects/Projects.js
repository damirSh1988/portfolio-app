import React from "react";
import './Projects.css';
import appImage from './appImage.jpg';
import appImage2 from './appImage2.jpg';

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
                    <p style={{fontFamily: 'Kanit', 
                               fontSize: 20, 
                               textAlign: 'left',
                               lineHeight: '25px' }}>For the delivery and acceptance of railway documents between customs brokers and employees of the Dostyk station</p>
                    <p style={{fontFamily: 'Kanit', 
                               fontSize: 20, 
                               textAlign: 'left',
                               lineHeight: '25px' }}>Stack used: Java/JavaFX</p>           
                </div>

            </div>

        </div>
        <div className="Project-1" >
            
            <div className="ProjectInfo">
                <div className="InfoTitle">
                    <p>Vagon List</p>
                    <p style={{fontFamily: 'Kanit', 
                               fontSize: 20, 
                               textAlign: 'left',
                               lineHeight: '25px' }}>For the formation of an electronic wagon list by employees of the Dostyk station</p>
                    <p style={{fontFamily: 'Kanit', 
                               fontSize: 20, 
                               textAlign: 'left',
                               lineHeight: '25px' }}>Stack used: Delphi</p>           
                </div>

            </div>
            <div className="ProjectFrame-21">
                <img alt="" src={appImage2}></img>
            </div>

        </div>
        </>
    )
}

export default Projects;