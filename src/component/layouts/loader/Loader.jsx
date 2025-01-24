import React from "react";
import logo2 from "../../../Image/logo2.jpeg";
import "./Loader.css";

const CricketBallLoader = () => (
  <div className="cricket-ball-loader">
    <img src={logo2} alt="Loading..." className="spinner" />
  </div>
);

export default CricketBallLoader;
