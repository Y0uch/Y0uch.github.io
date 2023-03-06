import Carousel from '../components/HorizontalCarousel';
import Grid from '../components/Grid';
import "./Illustrations.css";
import {useState} from 'react'

export default function Illustrations() {
    const [isCarousel, setIsCarousel] = useState(true);
    const [portfolioButton, setPortfolioButton] = useState("View all Projects");

    const switchPortfolioDisplay = () => {
        if (isCarousel){
        setIsCarousel(false);
        setPortfolioButton("Condense Projects");
        } else {
        setIsCarousel(true);
        setPortfolioButton("View all Projects");
        }
    }
  return (
    <div>
      <div className="background-container">
        <div class="switchPortfolioButton">
          <button 
            onClick={switchPortfolioDisplay} style={{border: "white"}}>{portfolioButton}  
          </button>
        </div>
        {(isCarousel) ? <Carousel/> : <Grid/>}
      </div>

      {/* Horizontal line */}
      <hr style={{background: "#000000", height: "3px", border: "none" }}
      />

    </div>
  )
}
