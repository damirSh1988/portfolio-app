import React from "react";
import './Header.css';


function Header(){
    return(
        <div className="Logo d-flex justify-content-between mx-5 mt-3">
            <div>
                <p style={{color: "white", fontSize: 25, fontFamily: 'Courier Prime'}}>Damir Shayakhmet</p>
            </div>
            <div className="Menu">
                <button>About</button>
                <button>Experience</button>
                <button>Projects</button>
                <button>Contacts</button>

            </div>
    
        </div>
    )
}

export default Header;