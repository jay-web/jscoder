import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import from './component/canvas/threeCanvas';
import "./App.css";
import Homepage from "./component/HomePage/homePage.component";
import Projectpage from "./component/ProjectPage/projects.component";
import Aboutme from "./component/Aboutme/Aboutme.component";
import { DarkThemeMode } from "./component/theme/theme.component";
import { ThemeProvider } from "./contexts/theme.contexts";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { AnimatedSwitch } from "react-router-transition";

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
  props: {
    MuiCardHproeader: {
      // Name of the rule

      title: {
        color: "white",
        fontSize: "2rem",
      },
      // Some CSS
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DarkThemeMode>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/projects" component={Projectpage} />
              <Route exact path="/aboutme" component={Aboutme} />
              <Route component={Projectpage} />
            </Switch>
          </AnimatedSwitch>
        </DarkThemeMode>
        <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
