import React, { useContext } from "react";
import Navbar from "../header/navbar.component";
import { withStyles, Paper, Button } from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme.contexts";
import style from "../Aboutme/about.style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const Aboutme = (props) => {
  const { classes } = props;
  const { isDarkMode } = useContext(ThemeContext);
  const textColor = isDarkMode ? "#37474f" : "#064cd5";
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.aboutme}>
        <Paper className={classes.content} elevation={0}>
          <Paper
            className={classes.innerText}
            style={{ color: `${textColor}` }}
          >
            <span>About & Contact</span>
            <h1>Jay Sharma</h1>
            <p>
              {" "}
              Hello, I am full stack javascript developer. I live in New Delhi,
              India.
            </p>
            <p>
              Expert in creating frontend react based application, creating
              backend nodejs server side rendered web applications.
            </p>
            <br />
            <p>Feel free to connect me on +919958345009</p>
            <div className={classes.contact}>
              <span className="socialIcons">
                <a
                  href="https://www.linkedin.com/in/jay-sharma-developer"
                  target="blank"
                  className={classes.social}
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://github.com/jay-web"
                  target="blank"
                  className={classes.social}
                >
                  <GitHubIcon />
                </a>

                <a
                  href="https://twitter.com/jaywords7"
                  target="blank"
                  className={classes.social}
                >
                  <TwitterIcon />
                </a>
              </span>
              <a href="./js.docx" className={classes.social}>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<CloudDownloadIcon />}
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </Paper>
        </Paper>
        <div className={classes.image}>
          <img
            className={classes.img}
            src="./placeholder-image.jpeg"
            alt="Jay Sharma"
          />
        </div>
      </div>
    </div>
  );
};

export default withStyles(style)(Aboutme);
