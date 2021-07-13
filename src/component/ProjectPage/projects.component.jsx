import React, { useEffect } from "react";
import ProjectCard from "../projectCard/card";
import ProjectCards from "../projectCard/card";
import ContentBox from "../content/ContentBox";
import "./projects.styles.css";
// import Header from "../header/header.component";
import Navbar from "../header/navbar.component";
import Footer from "../footer/footer.component";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import projects from "../../projects";
import AOS from "aos";

const useStyles = makeStyles({
  content: {
    padding: "0px 10px",
   
  },
  box: {
    margin: "2rem 0rem 2rem 0rem",
  },
  root: {
    marginBottom: "8rem",
    marginTop: "2rem",
    borderRadius: "20px",
    transition: "all 800ms ease-in-out",
    "&:hover": {
      // transform: "scaleX(1.0134)"
    },
    fontFamily: 'Sansita Swashed, cursive'

  },
});

const Projectpage = () => {
  const classes = useStyles();


  const renderProjects = () => {
    return projects.map((pro) => {
      return (
        <Paper elevation={3} key={pro.id} className={classes.root} data-aos="zoom-out" data-aos-duration="1000">
          <Grid
            item
            container
            justify="space-around"
            alignContent="center"
            direction={pro.id % 2 === 0 ? "row-reverse" : "row"}
            
          >
            <Grid item xs={10} md={5} className={classes.box}>
              <ContentBox {...pro} />
            </Grid>
            <Grid item xs={10} md={5} className={classes.box}>
              <ProjectCards imageURL={pro.imageURL} />
            </Grid>
          </Grid>
        </Paper>
      );
    });
  };
  
  useEffect(() => {
    // console.log(projects);
    AOS.init()
  });



  return (
    <Grid container direction="column"  >
      <Navbar />
      <Grid item container >
        <Grid xs={1} item />

        {/* Center box */}

        <Grid xs={10} item container >
          {renderProjects()}
        </Grid>

        <Grid xs={1} item />
      </Grid>
    </Grid>
  );
};

export default Projectpage;
