import React from "react";
import './Animalspage.css';
 // using props we can get data from main component 
function Animalspage(props){
    return(
        <div>
            <div className="head-div">
                <h1>{props.pageTitle}</h1> 
            </div>
            <div className="content-container">
                <div className="Nilgiri">
                    <h1>{props.animal1Title}</h1>
                    <div className="Nilgiricontent">
                        <img src={props.animal1Logo} className="nilgiri-logo" alt={props.animal1Alt}></img>
                        <h1 className="nilgiri-state">{props.animal1Subtitle}</h1>
                        <h4 className="nilgiri-para">{props.animal1Description}</h4>
                    </div>
                </div>
                <div className="cheetah">
                    <h1>{props.animal2Title}</h1>
                    <div className="cheetahcontent">
                        <img src={props.animal2Logo} className="cheetah-logo" alt={props.animal2Alt}></img>
                        <h1 className="cheetah-fastest">{props.animal2Subtitle}</h1>
                        <h4 className="cheetah-para">{props.animal2Description}</h4>
                    </div>
                </div>
                <div className="elephant">
                    <h1>{props.animal3Title}</h1>
                    <div className="elephantcontent">
                        <img src={props.animal3Logo} className="elephant-logo" alt={props.animal3Alt}></img>
                        <h1 className="elephant-largest">{props.animal3Subtitle}</h1>
                        <h4 className="elephant-para">{props.animal3Description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Animalspage;
