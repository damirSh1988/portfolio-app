import React from "react";
import './Experience.css'

const experience = [
    {
        year: "2008 - 2009",
        company: 'JSC "Kazakhstan Temir Zholy" branch station Dostyk',
        role: "Station technology center operator",
    },
    {
        year: "2009 - 2015",
        company: 'JSC "Kazakhstan Temir Zholy" branch station Dostyk',
        role: "Engineer Technologist of the Department of Automated System Control",
    },
    {
        year: "2016 - 2017",
        company: 'JSC "Kazakhstan Temir Zholy" branch station Dostyk',
        role: "Сargo and baggage handler",
    },
    {
        year: "2017 - 2022",
        company: 'JSC "Kazakhstan Temir Zholy" branch station Dostyk',
        role: "Transit document processing agent",
    },
    {
        year: "2022 - 2023",
        company: 'JSC "Kedentransservis" branch station Dostyk',
        role: "System Administrator",
    },
]

function Experience(){
    return(
        <div className="Experience">
            <div className="Info">
                <div className="Title">
                    <p className="Text">Experience</p>
                </div>
                <div className="ListExperience">
                    {experience.map(item =>(
                        <div className="ItemExperience">
                        <div className="Year"> <p>{item.year}</p></div>
                        <div className="Frame-22">
                            <div className="Info-1">
                                <div className="Role">
                                    <div className="Pointer"></div>
                                    <p>{item.company}</p>
                                </div>
                            </div>
                            <div className="Info-2">
                                <div className="Role-2"> 
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>

            </div>
        </div>
    )
}

export default Experience;
