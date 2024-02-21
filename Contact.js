import React from "react";
import './Contact.css';
 // using props we can get data from main component 
function Contactus(props){
    return(
        <div>
            <h1 className="contact">{props.pageTitle}</h1>
            <div id="header-contact">
                <img src={props.logo} className="mg-logo" alt="Megamalai Logo"></img>
                <h1 className="mt">{props.organizationName}</h1>
                <h3 className="hd">{props.division}</h3>
                <h4 className="hd-cont">Located in {props.location}<br></br>{props.addressLine1}<br></br>{props.addressLine2}<br></br>Pincode - {props.pincode}</h4>
                <iframe src={props.mapSrc}></iframe>
                <h1 className="tnq">{props.thankYouMessage}</h1>
                <h2 className="tnq2">{props.visitAgainMessage}</h2>
            </div>
        </div>
    );
}
export default Contactus;
