import React from "react";
import CanvasBox from "../canvas/canvas";
import {Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./homepage.style.css";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <CanvasBox />
        <div className="titleBox">
          <span className="title">Javascript Developer</span>
          <span className="name">Jay Sharma</span>

          <Link to="/projects" className="exploreButton">
           Explore Projects
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
