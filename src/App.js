import React from "react";
import { Switch, Route } from "react-router-dom";
// import from './component/canvas/threeCanvas';
import "./App.css";
import Homepage from "./component/HomePage/homePage.component";
import Projectpage from "./component/ProjectPage/projects.component";
import {DarkThemeMode} from "./component/theme/theme.component";
import { ThemeProvider } from "./contexts/theme.contexts";
import { createMuiTheme, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1565c0",
      light: "#5e92f3",
      dark: "#003c8f",
    },
    secondary: {
      main: "#d84315",
      light: "#ff7543",
      dark: "#9f0000",
    },
  },
  props:{
    MuiCardHproeader: {
      // Name of the rule
      
      title:{
        color: 'white',
        fontSize: "2rem",
      }
        // Some CSS
       
      
    },
  }
 
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DarkThemeMode>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/projects" component={Projectpage} />
        </Switch>
      </DarkThemeMode>
      <CssBaseline />
    </ThemeProvider>
    
  );
}

export default App;
