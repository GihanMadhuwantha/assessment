import React from "react";
import "../home/home.css";
import CoverImage from "./heroImage.png";
import CoverText from "../freeConsultant/freeConsultant";

function Home() {
  return (
    <div className="home-cover">
      <img src={CoverImage} alt="Home Cover Image" />
      <div className="cover-text-container">
        <CoverText />
      </div>
    </div>
  );
}

export default Home;
