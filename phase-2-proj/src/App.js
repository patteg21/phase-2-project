import React from "react";
import { Route, Routes } from 'react-router-dom';


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
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mystery" element={<Mystery />} />
        </Routes>
    </div>
  );
}

export default App;
