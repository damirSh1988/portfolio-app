import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="Footer">
            <div className="FooterFrame-22">
                <p style={{fontFamily: 'Inter',
                           fontSize: '14px',
                           color: 'white',
                           width:280}}>Made with 🤍 at nFactorial in 2023.</p>
                <p style={{fontFamily: 'Inter',
                           fontSize: '14px',
                           color: 'white',
                           width:500}}>Credits: photos from Unsplash.com, icons from Icons8.</p>
            </div>
        </div>
    )
}

export default Footer;