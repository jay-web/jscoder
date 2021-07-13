import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar, Switch } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import NavStyles from "../header/navbar.styles";

import { ThemeContext } from "../../contexts/theme.contexts";

class Navbar extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { classes } = this.props;
    const { isDarkMode, changeMode } = this.context;

    return (
      <div style={{ marginBottom: "100px" }}>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h5">
              <Link to="/" className={classes.link}>
                jsCoder
              </Link>
            </Typography>
            <Typography className={`${classes.modeText} ${classes.aboutme}`}>
              <Link to="/projects" className={classes.link}>
                Projects
              </Link>
            </Typography>
            <Typography className={`${classes.modeText} ${classes.aboutme}`}>
              <Link to="/aboutme" className={classes.link}>
                About me
              </Link>
            </Typography>
            <Typography className={classes.modeText}>
              {isDarkMode ? "Moon Mode" : "Sun Mode"}
              <Switch onChange={changeMode} color="secondary" />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(NavStyles)(Navbar);
