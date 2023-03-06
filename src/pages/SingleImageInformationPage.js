import React from 'react'
import "./SingleImageInformationPage.css"
import testImage from "./Buzz - Size_ 18-12 - Materials_ Watercolor, acrylic.jpg"
import CloseButton from 'react-bootstrap/CloseButton';


export default function SingleImageInformationPage(props) {
  const [loadStatus, setLoadStatus] = React.useState(false);

  console.log(props.fileName);

  return (
    <>
      {loadStatus ? <CloseButton onClick={console.log("close button clicked")}/> : null}

      <div className="main-image">
        <div className="main-image-container">
          <img src={testImage} alt="description" />
        </div>

        <div className="main-image-description">
          <p>This project, I used Modernist sculpture as our core object to continue our study and analysis of aspects and critical aspects. I selected a designed object. The sculptural and designed objects are from the Art Institute Museum. 
            I analyzed the physical visual aspects and characteristics of a designed object, the way it looks, its size and dimensions, dominant shape. I defined aspects and critical aspects while trying to maintain and reduce complexity while creating a focus. The approach is organic, intuitive, and more free form with type and image compositions. For this assignment, we used the type and image compositions to design an announcement for a lecture with the chosen artist and sculptural piece that incorporates an underlying grid structure.</p>
        </div>

      </div>
      <p style={{textAlign:"center", padding: "30px"}}>Below are some of the previous iterations and versions</p>


      <div className="previous-iterations-container">
        <div class="row">
          {/* FIRST COLUMN */}
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
          </div>
          <div class="column">
            <div class="img-container">
              <img src={testImage} alt="testimage"></img>
            </div>
          </div>
      

        </div>
      </div>
    </>
  )
}
