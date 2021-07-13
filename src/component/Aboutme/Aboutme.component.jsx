import React, { useContext, useEffect } from "react";
import Navbar from "../header/navbar.component";
import { withStyles, Paper, Button } from "@material-ui/core";
import { ThemeContext } from "../../contexts/theme.contexts";
import style from "../Aboutme/about.style";

import AOS from "aos";
import SocialSection from "../social/social.component";

const Aboutme = (props) => {
  const { classes } = props;
  const { isDarkMode } = useContext(ThemeContext);
  const textColor = isDarkMode ? "#fff" : "#37474f";
  const background = isDarkMode ? "#37474f" : "#fff";
  const background2 = isDarkMode ? "#fff" : "#fff";


  useEffect(() => {
    AOS.init();
  })

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
            <p>Feel free to connect me on <span style={{ fontFamily: "normal", fontWeight: "bold"}}>+919958345009</span> Or say hi at jay.developer12@gmail.com. You may also join me on</p>
            
             <SocialSection background="dark" />
          </Paper>
        </Paper>
        <div className={classes.image}  style={{ background: `${background2}`}}>
          <img
            className={classes.img}
            src="./about2.png"
            alt="Jay Sharma"
            data-aos="zoom-out" data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default withStyles(style)(Aboutme);
