import React from "react";

function About({displayData, isLoading }){


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