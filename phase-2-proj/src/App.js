import React, { useState, useEffect }from "react";
import { Route, Routes } from 'react-router-dom';

import "./App.css"


import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Mystery from "./components/Mystery";

function App() {
  const [timesClicked, setTimesClicked] = useState(0)
  


  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
          <Route className="route" exact path="/" element={<Home timesClicked={timesClicked}  setTimesClicked={setTimesClicked}/>}/>
          <Route className="route" path="/about" element={<About />}/>
          <Route className="route" path="/mystery" element={<Mystery />}/>
        </Routes>
    </div>
  );
}

export default App;
