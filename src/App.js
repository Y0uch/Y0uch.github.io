import './App.css';
import NavigationBar from "./components/NavigationBar.js"
import React, { useState } from 'react';
import Illustrations from './pages/Illustrations';
import About from './components/About';
import SingleImageInformationPage from './pages/SingleImageInformationPage';

function App() {
  var fileName = "";
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Illustrations
      break
    case "/about":
      Component = About
      break


    // Scuffed way of doing this. Temporary solution until I figure out how to pass props to a component
    case "/singleImageInfo":
      Component = SingleImageInformationPage
      break
    case "/singleImageInfo/img/design/4Bv2%20page%20assignment2.png":
      Component = SingleImageInformationPage({fileName:"4Bv2 page assignment2.png"})
      break
    case "/singleImageInfo/img/design/Artboard%201.png":
      Component = SingleImageInformationPage(fileName="Artboard 1.png")
      break
    case "/singleImageInfo/img/design/don%20inforgraphic%20V10%20copy-1.png":
      Component = SingleImageInformationPage(fileName = "don inforgraphic V10 copy-1.png")
      break
    case "/singleImageInfo/img/design/imagedonjazzv2.png":
      Component = SingleImageInformationPage(fileName = "imagedonjazzv2.png")
      break
    case "/singleImageInfo/img/design/Theater%20assignment%204Ev3.png":
      Component = SingleImageInformationPage(fileName = "Theater assignment 4Ev3.png")
      break
    
    
  }

  return (
    <div className="App">
      
      <NavigationBar/>
      <Component/>
      
      
    </div>
  );
}



export default App;
