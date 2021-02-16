import React from "react";
import { AppBar} from "@material-ui/core";
import { Toolbar, Switch} from "@material-ui/core";
import { IconButton} from "@material-ui/core";
import {  Typography} from "@material-ui/core";
import {  InputBase} from "@material-ui/core";
import { Link } from "react-router-dom";
import  MenuIcon  from "@material-ui/icons/Menu";
import SearchIcon  from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import NavStyles from "../header/navbar.styles";

import {ThemeContext} from "../../contexts/theme.contexts";

class Navbar extends React.Component {
    static contextType = ThemeContext;

  render() {
    const { classes } = this.props;
    const { isDarkMode, changeMode} = this.context;
    
    return (
      <div style={{ marginBottom: "100px"}}>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
            
            </IconButton> */}
            
            <Typography className={classes.title} variant="h5">
             <Link to="/jscoder" className={classes.link}>jsCoder</Link>
            </Typography>
            <Typography className={classes.modeText}>
              {isDarkMode ? "Moon Mode" : "Sun Mode"}
            <Switch onChange={changeMode} color='secondary' />
            </Typography>
           
            
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(NavStyles)(Navbar);
