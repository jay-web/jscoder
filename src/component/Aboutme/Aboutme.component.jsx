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
  const textColor = isDarkMode ? "#fff" : "#37474f";
  const background = isDarkMode ? "#37474f" : "#fff";
  const background2 = isDarkMode ? "#fff" : "#fff";

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.aboutme} >
        <Paper className={classes.content} elevation={0} style={{background: `${background}`}} >
          <Paper
            className={classes.innerText}
            elevation={3}
            style={{ color: `${textColor}` ,background: `${background}`}}
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
            <p>Feel free to connect me on <span style={{ fontFamily: "normal", fontWeight: "bold"}}>+919958345009</span></p>
            <div className={classes.contact}>
              <span className="socialIcons">
                <a
                  href="https://www.linkedin.com/in/jay-sharma-developer"
                  target="blank"
                  className={classes.social}
                >
                  <LinkedInIcon  className={classes.socialIcon} fontSize="large" style={{ color: `${isDarkMode ? "white" : "black"}` }}/>
                </a>

                <a
                  href="https://github.com/jay-web"
                  target="blank"
                  className={classes.social}
                >
                  <GitHubIcon className={classes.socialIcon} fontSize="large" style={{ color: `${isDarkMode ? "white" : "black"}` }}/>
                </a>

                <a
                  href="https://twitter.com/jaywords7"
                  target="blank"
                  className={classes.social}
                >
                  <TwitterIcon className={classes.socialIcon} fontSize="large" style={{ color: `${isDarkMode ? "white" : "black"}` }}/>
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
        <div className={classes.image}  style={{ background: `${background2}`}}>
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
