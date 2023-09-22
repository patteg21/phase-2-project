import React, {useEffect,useState}from "react";

import "./css/header.css"


function Header({timesClicked}){
    const [multiplyClicks, setMultiplyClick] = useState(0)

    useEffect(() => {
        setMultiplyClick(timesClicked**2)
        console.log(multiplyClicks)
    },[timesClicked])

    return (
        <div className="Header">
            <h1>Header {multiplyClicks !== 0 ? <span>{multiplyClicks}</span> : ""}</h1>
        </div>
    )
}

export default Header