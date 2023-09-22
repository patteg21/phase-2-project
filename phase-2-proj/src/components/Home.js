import React, {useState, useEffect} from "react";

function Home({timesClicked, setTimesClicked}){

    function handleClick(){
        setTimesClicked(prevTimesClicked => prevTimesClicked + 1)

    }

    

    return (
        <div>
            <h1>Home!</h1>
            <button onClick={handleClick}>Click Me!</button>
            <h1>{timesClicked}</h1>
        </div>

    )
}


export default Home