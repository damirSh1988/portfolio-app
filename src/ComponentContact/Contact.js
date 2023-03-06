import React from "react";
import './Contact.css';

function Contact(){
    return(
        <div className="Contact">
            <div className="ContactFrame-5">
                <div className="ContactTitle">
                    <p style={{fontFamily: 'Courier Prime', 
                               color: 'white',
                               fontSize: 60, 
                               textAlign: 'left',
                               lineHeight: '25px' 
                               }}>Say Hello</p>
                    <p style={{fontFamily: 'Kanit', 
                               color: 'white',
                               fontSize: 20, 
                               textAlign: 'left',
                               lineHeight: '25px' }}>I’m software developer and this is my portfolio.</p>
                </div>
                <button className="buttonContact">
                    <p>Get In Touch</p>
                </button>
            </div>
        </div>
    )
}

export default Contact;