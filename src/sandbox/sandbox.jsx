import React from 'react';
import mockImageData from '../data/GalleryData/images';
import "./sandbox.css";
//import gallPic1 from '../assets/SupremeGalleryPics/'

const Sandbox = () => {

   return (
      <div className='gallContainer'>
         {mockImageData.map(mockImageData =>
            <div className='divvy'>
               <a href={mockImageData.href}><img src={mockImageData.src} alt={mockImageData.desc}/></a>
            </div>
            )}
      </div>
   );
};

export default Sandbox;