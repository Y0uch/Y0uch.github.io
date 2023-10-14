import React from "react";
import "./TypeBook.css";

// Images
// Main
import type_book_main1 from "/img/Designs/typebook/main2/typebook_main1.png";

import fp1 from "/img/Designs/typebook/following_pages2/book_spread1.png";
import fp2 from "/img/Designs/typebook/following_pages2/book_spread2.png";
import fp3 from "/img/Designs/typebook/following_pages2/book_spread3.png";
import fp4 from "/img/Designs/typebook/following_pages2/book_spread4.png";
import fp5 from "/img/Designs/typebook/following_pages2/book_spread5.png";
import fp6 from "/img/Designs/typebook/following_pages2/book_spread6.png";
import fp7 from "/img/Designs/typebook/following_pages2/book_spread7.png";
import fp8 from "/img/Designs/typebook/following_pages2/book_spread8.png";


export default function TypeBook() {
  return (
    <>
      <div className="type-book-main-container">
        <div className="type-book-main-image-container">
          <img src={type_book_main1} alt="Type book 1"></img>
        </div>


        
          <div className="type-book-flex-container">

            <div className="type-book-desc-container">
              <h4><strong>Type Book</strong></h4>
              <p>
              I generated type drawings and read closely the content for our booklet. Now we will bring these elements together into a multi-page experience in which the various pieces integrate formally to create a meaningful reading experience. Although there are many opportunities to explore the conceptual relationships between the elements, we are most concerned with the aesthetic combination, organization and flow of elements. Give particular attention to: the play of spatiality (a reader’s journey across a single spread or ‘tableau’) and sequence(a reader’s movement across a chain of spreads); typographic hierarchy and details; the grid and compositonal polarities we explored in previous projects to organize the whole and provide a logic for information.
              </p>
            </div>
          </div>

          
          <div className="type-book-following-pages-container">
              <h4><strong>Following Pages</strong></h4>
              <img src={fp1} alt="Following Page 1"></img>
              <img src={fp2} alt="Following Page 2"></img>
              <img src={fp3} alt="Following Page 3"></img>
              <img src={fp4} alt="Following Page 4"></img>
              <img src={fp5} alt="Following Page 5"></img>
              <img src={fp6} alt="Following Page 6"></img>
              <img src={fp7} alt="Following Page 7"></img>
              <img src={fp8} alt="Following Page 8"></img>
          </div>



        </div>
    </>
  );
}
