import React from "react";
import './Birdspage.css';
import birdshead from './birdshead.png';
 // using props we can get data from main component 
function Birdspage(props){
    return(
        <div>
            <div className="birds-header">
                    <img src={birdshead} className="birds-logo" alt="Birds Logo"></img>
                    <h1 className="birds-meghamalai">{props.pageTitle}</h1>
            </div>
            <div id="birds">    
                <div className="peacock">
                    <div className="peacock-content">
                        <h1>{props.bird1Title}</h1>
                        <h4 className="p-cont">{props.bird1Description}</h4>
                    </div>
                </div>
                <div className="dove">
                    <div className="dove-content">
                        <h1 className="sb">{props.bird2Title}</h1>
                        <h4 className="d-cont">{props.bird2Description}</h4>
                    </div>
                </div>
                <div className="cormorants">
                    <div>
                        <h1>{props.bird3Title}</h1>
                        <h4 className="c-cont">{props.bird3Description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Birdspage;
