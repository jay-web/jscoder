import React, { useContext, useEffect } from "react";
import Navbar from "../header/navbar.component";
import { withStyles, Paper, Button } from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme.contexts";
import style from "../social/social.style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import AOS from "aos";

const SocialSection = (props) => {
    const { classes, background } = props;
    const { isDarkMode } = useContext(ThemeContext);
    // const textColor = isDarkMode ? "#fff" : "#37474f";
    // const background = isDarkMode ? "#37474f" : "#fff";
    // const background2 = isDarkMode ? "#fff" : "#fff";

    let color = `${isDarkMode && background === "dark" ? "white" : "black" }`

    useEffect(() => {
        AOS.init();
    })


  return (
    <div className={classes.contact} >
      <span className="socialIcons">
        <a
          href="https://www.linkedin.com/in/jay-sharma-developer"
          target="blank"
          className={classes.social}
        >
          <LinkedInIcon
            className={classes.socialIcon}
            fontSize="large"
            style={{color}}
          />
        </a>

        <a
          href="https://github.com/jay-web"
          target="blank"
          className={classes.social}
        >
          <GitHubIcon
            className={classes.socialIcon}
            fontSize="large"
            style={{color}}
          />
        </a>

        <a
          href="https://twitter.com/jaywords7"
          target="blank"
          className={classes.social}
        >
          <TwitterIcon
            className={classes.socialIcon}
            fontSize="large"
            style={{color}}
          />
        </a>
      </span>
      <a href="./Jay-Resume.pdf" target="blank" className={classes.social}>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudDownloadIcon />}
        >
          Download Resume
        </Button>
      </a>
    </div>
  );
};


export default withStyles(style)(SocialSection);