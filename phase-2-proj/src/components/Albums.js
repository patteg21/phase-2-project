import React from "react";

function Albums({displayData, isLoading }){


    const display = displayData.map((data) =>(
    <div key={data.id}>
        <h3>Title: {data.title}</h3>
        <p>Band: {data.band}</p>
        <p>Description: {data.description}</p>
      </div>
    ))



    return (
        <div>
            <h1>Albums</h1>
            { isLoading ? "Loading..." : display}
        </div>

    )
}


export default Albums