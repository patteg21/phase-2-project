import React, {useState} from "react";

function Home({timesClicked, setTimesClicked}){

    function handleClick(){
        console.log("Wow! I was clicked")
        
        setTimesClicked(prevTimesClicked => prevTimesClicked + 1)

        console.log(timesClicked)
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