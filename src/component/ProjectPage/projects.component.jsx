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
import { CardBoxTheme } from "../theme/theme.component";

const useStyles = makeStyles({
  content: {
    padding: "0px 10px",
  },
  box: {
    margin: "2rem 0rem 2rem 0rem",
  },
  root: {
    marginBottom: "2rem",
    borderRadius: "45px",
    transition: "all 700ms ease-in-out",
    "&:hover": {
      // background: "#75a7ff"
    },
  },
});

const Projectpage = () => {
  const classes = useStyles();
  const renderProjects = () => {
    return projects.map((pro) => {
      return (
        <Paper elevation={1} key={pro.id} className={classes.root}>
          <Grid item container justify="space-around" alignContent="center" direction={pro.id % 2 === 0 ? "row-reverse" : "row"}>
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
    console.log(projects);
  }, []);
  return (
    <Grid container direction="column">
      <Navbar />
      <Grid item container>
        <Grid xs={1} item />

        {/* Center box */}

        <Grid xs={10}  item container>
          {renderProjects()}
        </Grid>

        <Grid xs={1} item />
      </Grid>
    </Grid>
  );
};

export default Projectpage;
