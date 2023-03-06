import React from 'react'
import ImageData from "../images.json";
import "./Grid.css"

export default function Grid() {

  return (
    <div id="content">
        <div class="content-portfolio">
            <div class="row">
                {/* FIRST COLUMN */}
                <div class="column">
                    <div class="img-container">
                        <a href="/img/illustration/Environment - Digital _.png" data-lightbox="image-1"><img src="/img/illustration/Environment - Digital _.png"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h2>Deforestation</h2>Save planet plz thank you</div>
                        </div>
                    </div>

                    <div class="img-container">
                        <a href="/img/illustration/Buzz - Size_ 18-12 - Materials_ Watercolor, acrylic.jpg" data-lightbox="image-1"><img src="/img/illustration/Buzz - Size_ 18-12 - Materials_ Watercolor, acrylic.jpg"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h1>Bee</h1>Bee goes bzzzzz....</div>
                        </div>
                    </div>
                
                    <div class="img-container">
                        <a href="/img/illustration/Colorful! - Size_15_17 - Materials_ Poster color.jpg" data-lightbox="image-1"><img src="/img/illustration/Colorful! - Size_15_17 - Materials_ Poster color.jpg"></img></a>
                        <div class="overlay">
                            <div class="overlay-text">What do we find at the end of a rainbow? A "W"</div>
                        </div>
                    </div>

                    <div class="img-container">
                        <a href="/img/illustration/Feet -Size_ 14-17 - Material_ Pencil.jpg" data-lightbox="image-1"><img src="/img/illustration/Feet -Size_ 14-17 - Material_ Pencil.jpg"></img></a>
                        <div class="overlay">
                            <div class="overlay-text">Ryan has a foot fetish</div>
                        </div>
                    </div>
                </div>

                {/* 2nd COLUMN */}
                <div class="column">
                    <div class="img-container">
                        <a href="/img/illustration/Light bulbs - Size_ 18-12 - Materials_ Watercolor, Pencil.jpg" data-lightbox="image-1"><img src="/img/illustration/Light bulbs - Size_ 18-12 - Materials_ Watercolor, Pencil.jpg"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h2></h2>Save planet plz thank you</div>
                        </div>
                    </div>

                    <div class="img-container">
                        <a href="/img/illustration/Rest_-_size_74,_40_-_Material__pastels.jpg" data-lightbox="image-1"><img src="/img/illustration/Rest_-_size_74,_40_-_Material__pastels.jpg"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h1>Bee</h1>Bee goes bzzzzz....</div>
                        </div>
                    </div>
                </div>

                {/* 3rd COLUMN */}
                <div class="column">
                    <div class="img-container">
                        <a href="/img/illustration/pracccc.png" data-lightbox="image-1"><img src="/img/illustration/pracccc.png"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h2></h2>Save planet plz thank you</div>
                        </div>
                    </div>

                    <div class="img-container">
                        <a href="/img/illustration/Skeletons - Size_ 22-28 - Material_ Acrylic.jpg" data-lightbox="image-1"><img src="/img/illustration/Skeletons - Size_ 22-28 - Material_ Acrylic.jpg"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h1>Bee</h1>Bee goes bzzzzz....</div>
                        </div>
                    </div>
                </div>

                {/* 4th COLUMN */}
                <div class="column">
                    <div class="img-container">
                        <a href="/img/illustration/pracccc1.png" data-lightbox="image-1"><img src="/img/illustration/pracccc1.png"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h2></h2>Save planet plz thank you</div>
                        </div>
                    </div>

                    <div class="img-container">
                        <a href="/img/illustration/IMG_0048.JPG" data-lightbox="image-1"><img src="/img/illustration/IMG_0048.JPG"></img></a>
                        <div class="overlay">
                            <div class="overlay-text"><h1>Bee</h1>Bee goes bzzzzz....</div>
                        </div>
                    </div>
                </div>
                
            </div>

                
            </div>
            
            
        </div>
    
  )
}
