//Nav Bar 
import React from "react";
import "./Nav.css";
import logo from '../../images/LogoMakr_4Tq9vR.png'

const Nav = props => (
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo"> UBERHELPS!
                <img id="image" src={logo}/>
            </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="badges.html">Find Work</a></li>
                    <li><a href="collapsible.html">Post Work</a></li>
                </ul>
        </div>
    </nav>
);

export default Nav;