import React from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css"

function NavBar(){

    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to="/mystery">Myst</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar