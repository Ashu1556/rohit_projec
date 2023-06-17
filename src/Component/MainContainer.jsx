import React from "react";
import "./main.css";

const MainContainer = () => {
  return (
    <div className="website_layout">
      <div className="navbar">
        <p>navbar</p>
      </div>
      <div className="sidebar">
        <p>sidebar</p>
      </div>
      <div className="container">
        <div className="box1">
          <div className="box11">box11</div>
          <div className="box12">box12</div>
        </div>
        <div className="box2">
          <div className="box22">box22</div>
        </div>
        <div className="box3">
          <div className="box31">box31</div>
          <div className="box32">box32</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
