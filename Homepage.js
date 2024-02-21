import React from "react";
import './Homepage.css';
import Megamalailogo from './megamalailogo.png';
import Megamalaibg from './meghamalaibgimage.jpg';
import tiger from './tigerimage.jpg';
import { Link } from "react-router-dom";
function Homepage(){
     // Home page of a website 
    return(
        <div>
            <div id="header-home">
                <img src={Megamalailogo} id="megamalailogo" alt="megamalailogo"></img>
                <h1 className="meghamalai">மேகமலை புலிகள் காப்பகத்திற்கு வரவேற்கிறோம்</h1>
                <img src={tiger} id="zooheader" alt="tigerimage"></img>
            </div>
            <nav className="navbar">
                
                <ul className="navlinks">
                    <li className="links">Home</li> 
                    <li className="links"> <Link to="/About" className="routers">About Us </Link></li>
                    <li className="links"> <Link to="/Animals" className="routers">Animals</Link></li>
                    <li className="links"><Link to="/Birds" className="routers">Birds</Link></li>
                    <li className="links"><Link to="/Contactus" className="routers">Contact Us</Link></li>
                </ul>
                <div className="bgimage" alt="backgroundimageof Megamalai">
                    <img src={Megamalaibg} className="megamalaibg" ></img>
                </div>
            </nav>
        </div>
    );
}
export default Homepage;