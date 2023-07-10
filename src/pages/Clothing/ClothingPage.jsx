import React from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import mockHoodieData from "../../data/HoodieData/images";
import suplogo from "../../assets/supreme@2x.png";
import SupremePic from "../../components/SupremePic";
import "./ClothingPage.css";

const ClothingPage = () => {
  const [index, setIndex] = useState(0);
  const length = 10;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="hoodieContainer">
      <div className="carouselContainer">
        <div className="hoodieImgDiv">
          <div className="midDiv">
            <img className="hoodieImg" src={mockHoodieData[index].src} alt="" />
          </div>
          <div className="underHoodie">
            <div className="supImgDiv">
                <a href="/" target="home">
                  <img src={suplogo} className="supLogo2" alt="Sup logo" />
                </a>
            </div>
            <div className="midTextDiv">
               <p className="boldedText"><b>Faux Shearling Hooded Jacket</b><br />Bonded faux shearling with ful zip closure and welt hand<br/> pockets at lower front. Debossed logo at back hem.</p>
               <p className="midText"></p>
            </div>
            <div className="pickerDiv">
            <IconButton onClick={handlePrevious}>
              <ArrowBackIcon />
            </IconButton>
            <p className="midNums">{index+1} of 10</p>
            <IconButton onClick={handleNext}>
              <ArrowForwardIcon />
            </IconButton>
            </div>
            <div className="backBtn">
              <ul className="backUl"><li className="backLi"><a className="liA" href="/previews/springsummer2023/">back</a></li></ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingPage;
