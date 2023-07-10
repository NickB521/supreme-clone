import React from "react";
import mockImageData from "../../data/GalleryData/images";
import GalleryComp from "../../components/GalleryComp";
import SupremePic from "../../components/SupremePic";
import suplogo from "/supreme@2x.png";
import { useState } from "react";
import "./Gallery.css";

const MyGallery = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="secContainer">
      <div className="headerPic">
        <ul className="headerList">
          <li>
            <SupremePic />
          </li>
          <li>
            <p className="timetext2">{date.toLocaleString()} NYC</p>
          </li>
        </ul>
      </div>
      <div className="galleryContainer">
        <GalleryComp />
      </div>
      <div className="btmTextDiv">
        <div className="btmLeftTextDiv">
          <ul>
            <li className="btmTextLi">
              <a href="/" className="liA2">
                home
              </a>
            </li>
            <li className="btmTextLi">shop</li>
            <li className="btmTextLi">news</li>
            <li className="btmTextLi">spring/summer 2023 preview</li>
            <li className="btmTextLi">random</li>
            <li className="btmTextLi">about</li>
            <li className="btmTextLi">stores</li>
          </ul>
        </div>
        <div className="btmRightTextDiv">
          <ul>
            <li className="btmRightTextLi">
              <a>view all</a>
            </li>
            <li className="btmRightTextLi2">
              <a>*lookbook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
