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
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Find Work</a></li>
                <li><a href="/newjob">Post Work</a></li>
            </ul>
        </div>
    </nav>
);

export default Nav;