import React, {useState, useEffect} from "react";
import NavigationBar from "../../components/NavigationBar";
import "./Design.css";
import {
  Link
} from "react-router-dom";

// import boston_dynamic_main from "../../assets/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main1.jpg";
// import boston_dynamic_infographic_main from "../../assets/img/Designs/boston_infographic/main/boston_dog_main.jpg";
// import don_infographic_main from "../../assets/img/Designs/don_infographic/main/don_infographic_main1.jpg";
// import don_jazz_poster_main from "../../assets/img/Designs/don_jazz_poster/main/donjazz_main1.jpg";
// import modernist_poster_main from "../../assets/img/Designs/modernist_poster/main/modernist_poster_main1.jpg";
// import type_theater_main from "../../assets/img/Designs/type_theater/main/type_theater_main1.jpg";
// import type_book_main1 from "../../assets/img/Designs/typebook/main/typebook_main1.jpg";
// import type_book_main2 from "../../assets/img/Designs/typebook/main/typebook_main2.jpg";

import PhotoAlbum from "react-photo-album";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

export default function Design() {
  const [isRendered, setIsRendered] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoAlbum, setPhotoAlbum] = useState(null);

  // const renderInThisOrder = [
  //   {
  //     image: modernist_poster_main,
  //     link: "/modernist-poster",
  //   },
  //   {
  //     image: boston_dynamic_infographic_main,
  //     link: "/boston-infographic",
  //   },
  //   {
  //     image: type_book_main1,
  //     link: "/type-book",
  //   },
  //   {
  //     image: don_jazz_poster_main,
  //     link: "/don-jazz-poster",
  //   },
  //   {
  //     image: boston_dynamic_main,
  //     link: "/boston-dog-magazine",
  //   },
  //   {
  //     image: don_infographic_main,
  //     link: "/don-infographic",
  //   },
  //   {
  //     image: type_theater_main,
  //     link: "/type-theater",
  //   },
  //   {
  //     image: type_book_main2,
  //     link: "/type-book",
  //   },
  // ];

  useEffect(() => {
    const photos = [
      { src: "/img/Designs/modernist_poster/main/modernist_poster_main1.jpg", width: 567, height: 906, href: "/modernist-poster" },
      { src: "/img/Designs/boston_infographic/main/boston_dog_main.jpg", width: 1176, height: 725, href: "/boston-infographic" },
      { src: "/img/Designs/type_theater/main/type_theater_main1.jpg", width: 567, height: 1006, href: "/type-theater" },
      // { src: "/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main1.jpg", width: 587, height: 883, href: "/boston-dog-magazine"},
      // { src: "/img/Designs/boston_dynamic_magazine/main/boston_dog_magazine_main2.jpg", width: 587, height: 883, href: "/boston-dog-magazine"},
            { src: "/img/Designs/boston_dynamic_magazine/main/connected_boston_dog_magazine.jpg", width: 1174, height: 883, href: "/boston-dog-magazine"},
      { src: "/img/Designs/don_jazz_poster/main/donjazz_main1.jpg", width: 568, height: 945, href: "/don-jazz-poster" },
      // { src: "/img/Designs/typebook/main/typebook_main1.jpg", width: 588, height: 484, href: "/type-book" },
      // { src: "/img/Designs/typebook/main/typebook_main2.jpg", width: 588, height: 484, href: "/type-book" },
            { src: "/img/Designs/typebook/main/connected_typebook.jpg", width: 1176, height: 484, href: "/type-book" },
      { src: "/img/Designs/don_infographic/main/don_infographic_main1.jpg", width: 1175, height: 781, href: "/don-infographic" },
    ];
    setPhotos(photos);

    const photoAlb = <PhotoAlbum layout="rows" photos={photos} 
      renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
        <Link to={photo.href} style={wrapperStyle} rel="noreferrer noopener">
            {renderDefaultPhoto({ wrapped: true })}
        </Link>
    )}/>
    setPhotoAlbum(photoAlb);
    setIsRendered(true);
  
  }, []);

  if (isRendered && photoAlbum) {
    return (
      <>
  
        <div id="content">
          <div className="content-portfolio">
            <div className="row">
              {photoAlbum}

              {/* Random but keep <p> tag or else photos will not render consistently */}
              <p></p>
          
            
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      null
    )
  }

}
