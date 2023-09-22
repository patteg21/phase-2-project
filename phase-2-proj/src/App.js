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
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    why: '',
});
  


  return (
    <div className="App">
      <Header timesClicked={timesClicked}/>
      <NavBar />
      <Routes>
          <Route className="route" exact path="/" element={<Home timesClicked={timesClicked}  setTimesClicked={setTimesClicked}/>}/>
          <Route className="route" path="/about" element={<About setFormData={setFormData}/>}/>
          <Route className="route" path="/mystery" element={<Mystery formData={formData} setFormData={setFormData} />}/>
        </Routes>
    </div>
  );
}

export default App;
