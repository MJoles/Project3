//Nav Bar 
import React from "react";
import "./Nav.css";
import logo from '../../images/LogoMakr_4Tq9vR.png'

const Nav = props => (
    <nav>
        <div class="nav-wrapper">
            <a href="/home" class="brand-logo">
                <img id="image" src={logo}/>
            </a>
            <div class="text">
                {props.text}
            </div>
<<<<<<< HEAD
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="badges.html">Find Work</a></li>
                <li><a href="/newjob">Post Work</a></li>
=======
            <ul id="nav-mobile" className="right hide-on-med-and-down ">
                <li><a className="indigo-text" href="/search">Find Work</a></li>
                <li><a className="indigo-text" href="/newjob">Post Work!</a></li> 
>>>>>>> 4cf96dedf1654dd68f629528d679019b60a739c9
            </ul>
        </div>
    </nav>
);

export default Nav;