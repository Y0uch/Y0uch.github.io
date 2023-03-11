import './App.css';
import NavigationBar from "./components/NavigationBar.js"
import React, { useState } from 'react';
import Illustrations from './pages/Illustrations';
import About from './components/About';
import SingleImageInformationPage from './pages/SingleImageInformationPage';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
    <NavigationBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Illustrations/>}/>
        <Route path="about" element={<About/>} />
        <Route path="singleImageInfo/img/design/:card_name" element={<SingleImageInformationPage/>} />
        {/* <Route path="singleImageInfo/4Bv2_page assignment2.png" element={<SingleImageInformationPage/>} /> */}
      </Routes>
    </BrowserRouter>


    </div>
  );
}



export default App;
