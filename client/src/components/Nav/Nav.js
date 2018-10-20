//Nav Bar 
import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Find Work</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Post Work</a>
        </li>
        </ul>
    </div>
);

export default Nav;