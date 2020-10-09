import React from "react";
import CanvasBox from "../canvas/canvas";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <CanvasBox />
        <div className="titleBox">
          <span className="title">Javascript Developer</span>
          <span className="name">Jay Sharma</span>

          <Link to="/projects" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-8 rounded-full">
            Explore Projects
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
