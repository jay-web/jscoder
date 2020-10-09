import React from "react";
import {Switch, Route} from "react-router-dom";
// import from './component/canvas/threeCanvas';
import "./App.css";
import Homepage from "./component/HomePage/homePage.component";
import Projectpage from "./component/ProjectPage/projects.component";

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/projects" component={Projectpage} />
    </Switch>
    </div>
  );
}

export default App;
