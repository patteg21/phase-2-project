import React, { useState, useEffect }from "react";
import { Route, Routes } from 'react-router-dom';

import "./App.css"


import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Mystery from "./components/Mystery";

function App() {
  const [displayData, setDisplayData] = useState([{}])
  const [timesClicked, setTimesClicked] = useState(0)
  const [isLoading, setIsLoading] = useState(true)


  // I know it calls everytime it is updated
  useEffect(() =>{
    fetch("http://localhost:3000/random")
    .then(res => res.json())
    .then(data => {
      setDisplayData(data)
      setIsLoading(false)
    })
  },[]);
  


  return (
    <div className="App">
      <Header timesClicked={timesClicked}/>
      <NavBar />
      <Routes>
          <Route className="route" exact path="/" element={<Home timesClicked={timesClicked}  setTimesClicked={setTimesClicked}/>}/>
          <Route className="route" path="/about" element={<About displayData={displayData} isLoading={isLoading}/>}/>
          <Route className="route" path="/mystery" element={<Mystery displayData={displayData} setDisplayData={setDisplayData}/>}/>
        </Routes>
    </div>
  );
}

export default App;
