import React from "react";
import { Route, Routes } from 'react-router-dom';

import "./App.css"


import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Mystery from "./components/Mystery";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
          <Route className="route" exact path="/" element={<Home />}/>
          <Route className="route" path="/about" element={<About />}/>
          <Route className="route" path="/mystery" element={<Mystery />}/>
        </Routes>
    </div>
  );
}

export default App;
