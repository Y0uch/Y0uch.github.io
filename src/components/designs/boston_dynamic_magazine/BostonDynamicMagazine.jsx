import React from "react";
import "./BostonDynamicMagazine.css";

// Images
// Main
import boston_dog_magazine_main from "/img/Designs/boston_dynamic_magazine/main2/boston_dog_magazine_main1.png"

// Additional Versions
import fp1 from "/img/Designs/boston_dynamic_magazine/following_pages2/initialv4_spread2.png"
import fp2 from "/img/Designs/boston_dynamic_magazine/following_pages2/initialv4_spread3.png"
import fp3 from "/img/Designs/boston_dynamic_magazine/following_pages2/initialv4_spread4.png"
import fp4 from "/img/Designs/boston_dynamic_magazine/following_pages2/initialv4_spread5.png"


// Initial Sketches
import init_sketch1 from "/img/Designs/boston_dynamic_magazine/initial_sketches/boston_dog_magazine_initial1.jpg";
import init_sketch3 from "/img/Designs/boston_dynamic_magazine/initial_sketches/boston_dog_magazine_initial3.jpg";

export default function BostonDogMagazine() {
  return (
    <>
      <div className="bdm-main-container">
        <div className="mainImageContainer">
          <img src={boston_dog_magazine_main} alt="Boston Dog Infographic Main"></img>
          

        </div>

        <div className="bdm-desc-container">
            <h4><strong>Boston Dynamic Magazine</strong></h4>
            <p>
            Originally titled "Silk and Feathers," this project evolved into an immersive magazine experience centered around Boston Dynamics' robotic dog, Spot. The magazine maintains clarity and focus while providing comprehensive information by utilizing a grid-based layout and repurposing images from the infographic. The seamless connection between the two pieces creates a cohesive narrative, engaging readers with captivating visuals and balanced composition. By striking a balance between informative content and accessibility, the magazine caters to a wide range of audiences. Its fusion of imagery and storytelling showcases Spot's capabilities, applications, and design intricacies. The reappropriated project offers an engaging experience that combines the best of infographics and magazine formats, inviting readers into the transformative world of Spot.
            </p>
          </div>



        <div className="bdm-following-pages-container">
            <h4><strong>Following Pages</strong></h4>
            <img src={fp1} alt="Following Page 1"></img>
            <img src={fp2} alt="Following Page 2"></img>
            <img src={fp3} alt="Following Page 3"></img>
            <img src={fp4} alt="Following Page 4"></img>
        </div>


        
        <div className="bdm-initial-sketches">
          <h4><strong>Initial Sketches</strong></h4>
          <img src={init_sketch1} alt="Initial Sketch 1"></img>
          <img src={init_sketch3} alt="Initial Sketch 3"></img>
        </div>


      </div>
    </>
  );
}
