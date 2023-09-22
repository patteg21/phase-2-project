import React, { useState, useEffect } from "react";

function About({setFormData}){
    const [displayData, setDisplayData] = useState([{}])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{

        fetch("http://localhost:3000/random")
        .then(res => res.json())
        .then(data => {

        // intervalId = setInterval(()=>{
            console.log(data)
            setDisplayData(data)
            setIsLoading(false)
        // },3000)
    })
    },[setFormData]);


    const display = displayData.map((data, index) =>(
    <div key={index}>
        <h3>Title: {data.title}</h3>
        <p>Description: {data.description}</p>
        <p>Why: {data.why}</p>
      </div>
    ))



    return (
        <div>
            <h1>About</h1>
            { isLoading ? "Loading..." : display}
        </div>

    )
}


export default About