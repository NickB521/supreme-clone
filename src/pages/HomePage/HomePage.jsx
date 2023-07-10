import React from "react";
import { useState } from "react";
import SupremePic from "../../components/SupremePic";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./HomePage.css";

const HomePage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="container">
      <div className="div1">
        <ul className="headerList">
          <li>
            <SupremePic />
          </li>
          <li>
            <p className="timetext">{date.toLocaleString()} NYC</p>
          </li>
        </ul>
      </div>
      <div className="card">
        <nav>
          <ul className="HPlist">
            <li className="liStyle">
              <a className="liA" href="#" title="">
                news
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="/previews/springsummer2023/" title="">
                spring/summer 2023 preview
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="/" title="">
                spring/summer 2023 lookbook
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="#" title="">
                shop
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="#" title="">
                random
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="#" title="">
                about
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="#" title="">
                stores
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="#" title="">
                contact
              </a>
            </li>
            <li className="liStyle">
              <a className="liA" href="#" title="">
                mailing list
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="toolbar">
        <ul>
          <li className="btmTextLI">terms</li>
          <li className="btmTextLI">privacy</li>
          <li className="btmTextLI">f.a.q</li>
          <li className="btmTextLI">accessibility</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
