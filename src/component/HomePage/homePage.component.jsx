import React, {useContext} from "react";
import {ThemeContext } from "../../contexts/theme.contexts";
import CanvasBox from "../canvas/canvas";
import {Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./homepage.style.css";

const Homepage = () =>  {
  const { isDarkMode } = useContext(ThemeContext);
  const textColor = isDarkMode ? "#ffffff" : "rgb(19, 38, 101)"
    return (
      <div className="homepage">
        <span className="canvasbox">
        <CanvasBox />
        </span>
       
        <div className="titleBox">
          <span className="title" style={{ color: `${textColor}`, fontFamily: 'Akaya Telivigala, cursive'}}>Javascript Developer</span>
          <span className="name"  style={{ color: `${textColor}`, fontFamily: 'Akaya Telivigala, cursive'}}>Jay Sharma</span>

          <Link to="/projects" className="exploreButton" style={{ fontFamily: 'Akaya Telivigala, cursive', fontSize: "1rem"}}>
           Explore Projects
          </Link>
        </div>
      </div>
    );
  
}

export default Homepage;
