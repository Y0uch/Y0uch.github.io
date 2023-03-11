import React from 'react'
import "./SingleImageInformationPage.css"
import testImage from "./Buzz - Size_ 18-12 - Materials_ Watercolor, acrylic.jpg"
import CloseButton from 'react-bootstrap/CloseButton';
import { useParams } from "react-router-dom";
import ImageData from "../images.json";


export default function SingleImageInformationPage() {
  const [loadStatus, setLoadStatus] = React.useState(false);
  let { card_name } = useParams();

  const cardJSONS = Object.keys(ImageData["design-images"]).map(key => {
    if (ImageData["design-images"][key].name === card_name){
        return ImageData["design-images"][key];
    }       
  })
  var cardJSON = {};
  
  for (let i = 0; i < cardJSONS.length; i++){
    if (cardJSONS[i] !== undefined){
      cardJSON = cardJSONS[i];
      break;
    }
  }
  console.log(cardJSON.file_name)
  
  const cardImage = require("../../public/img/design/" + cardJSON.file_name);

  return (
    <>
      {loadStatus ? <CloseButton onClick={console.log("close button clicked")}/> : null}

      <div className="main-image">
        <div className="main-image-container">
          <img src={cardImage} alt="description" />
        </div>

        <div className="main-image-description">
          <p>Project Name: {cardJSON.project_name}</p>
          <p>{cardJSON.description}</p>
        </div>

      </div>
      <p style={{textAlign:"center", padding: "30px"}}>Below are some of the previous iterations and versions</p>


      <div className="previous-iterations-container">
        <div class="row">
          {/* FIRST COLUMN */}


          {/* {cardJSON.previous_iterations.forEach(prev_iter_fileName => {
            return <h1>test</h1>
          })} */}

          {cardJSON.previous_iterations.map(prev_iter_fileName => {
            var prev_iter_image = require("../../public/img/design/" + prev_iter_fileName.file_name);
            return (
            <div class="column">
              <div class="img-container">
                <img src={prev_iter_image} alt="testimage"></img>
              </div>
            </div>
            )
          })}


          {/* <div class="column">
            <div class="img-container">
              <img src={testImage} alt="testimage"></img>
            </div>
          </div>
          <div class="column">
            <div class="img-container">
              <img src={testImage} alt="testimage"></img>
            </div>
          </div>
          <div class="column">
            <div class="img-container">
              <img src={testImage} alt="testimage"></img>
            </div>
          </div>
          <div class="column">
            <div class="img-container">
              <img src={testImage} alt="testimage"></img>
            </div>
          </div> */}
      

        </div>
      </div>
    </>
  )
}
