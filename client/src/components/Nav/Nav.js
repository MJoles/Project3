//Nav Bar 
import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav">
        <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Find Work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Post Work</a>
        </li>
        </ul>
    </div>
);

export default Nav;