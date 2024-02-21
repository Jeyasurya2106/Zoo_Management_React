import React from "react";
import './Aboutpage.css';
import tigerreseve from './tigerreserve image.webp';
 // using props we can get data from main component 
function Aboutpage(props){
    

    return(
        <div>
            <header className="header-about">
                <h1 className="reserveheading">{props.reserveTitle}</h1>
                <img src={tigerreseve} className="tigerreserveimg" alt="Tiger Reserve Image"></img>
            </header>
           
               
            <div id="about-container">
                <h1 className="abt">{props.aboutTitle}</h1>
                <h4>{props.aboutDescription1}</h4>
                <div className="empty1">
                    <h4>{props.aboutDescription2}</h4>
                </div>
                <div className="empty2"> 
                    <h4>{props.aboutDescription3}</h4>
                </div>
            </div>
           
        </div>
    );
}
export default Aboutpage;
