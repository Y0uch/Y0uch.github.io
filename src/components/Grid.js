import React from 'react'
import ImageData from "../images.json";
import "./Grid.css"

export default function Grid() {


    const cardJSONS = Object.keys(ImageData["view_all_projects"]).map(key => {
        return ImageData["view_all_projects"][key];      
      })
      console.log(cardJSONS);

  return (
    <div id="content">
        <div class="content-portfolio">
            <div class="row">

                {cardJSONS.map(imageObj => {
                    var fileName = "";
                    if (imageObj.type === "design"){
                        fileName = require("../../public/img/view_all_projects/" + imageObj.file_name);                        
                    }
                    else if (imageObj.type === "illustration"){
                        fileName = require("../../public/img/view_all_projects/" + imageObj.file_name);                        
                    }
                    
                    return (
                        <div class="column">
                            <div class="img-container">
                                <img src={fileName} alt="testimage"></img>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}
