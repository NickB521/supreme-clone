import React from "react";
import mockImageData from "../data/GalleryData/images";
import "./GalleryComp.css";

const GalleryComp = () => {
  return (
    <div className='galleryContainer'>
       {mockImageData.map(mockImageData =>
          <div className='imgDiv'>
             <a href={mockImageData.href}><img src={mockImageData.src} alt={mockImageData.desc}/></a>
          </div>
          )}
    </div>
 );
};

export default GalleryComp;
