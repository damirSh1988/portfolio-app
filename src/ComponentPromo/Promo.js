import React from "react"
import './Promo.css';

const axios = require('axios');
const cheerio = require('cheerio');

function handleBtnCV(){
axios.get('https://cgr.qoldau.kz/ru/information/public-list').then(html => {
    const $ = cheerio.load(html.data)
    // let text ='';
    // $('body > div.wrap > div:nth-child(3) > div > div:nth-child(1) > div > a.prazdnik_info > span').each((i, elem) =>{
    //     text += `${$(elem).text()}\n`
    // })
    console.log($);
});
}

function Promo(){
    return(
        <div className="Promo">
            <div className='Frame-5'>
                <div className="Title">
                     <p style={{fontFamily: 'Courier Prime', 
                                color: 'white',
                                fontSize: "40px",
                                textAlign: 'left',
                                width: '1280px',}}>
                        Hi, I’m Shayakhmet Damir, 
                        I build things for the web. 
                     </p>
                     <p style={{color:'white', fontSize: 20,textAlign: 'left'}}> I’m software developer and this is my portfolio.</p>
                </div>
                <div>
                    <button onClick={handleBtnCV} className="btnCV">
                        <p>Check out my CV</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Promo;