import React, { useEffect , useState} from "react";

import "./css/header.css"


function Header({timesClicked}){
    let multiplyClicks = timesClicked ** 2

    return (
        <div className="Header">
            <h1>Header {multiplyClicks !== 0 ? <span>{multiplyClicks}</span> : ""}</h1>
        </div>
    )
}

export default Header