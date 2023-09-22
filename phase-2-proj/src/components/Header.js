import React, { useEffect , useState} from "react";

import "./css/header.css"


function Header({timesClicked}){

    return (
        <div className="Header">
            {timesClicked !== 0 ? <h1>Blink-182 needs a comeback</h1> : <h1>Header</h1>}
        </div>
    )
}

export default Header