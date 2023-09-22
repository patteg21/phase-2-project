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
                    <Link className="link" to="/albums">Albums</Link>
                </li>
                <li>
                    <Link className="link" to="/form">Form</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar