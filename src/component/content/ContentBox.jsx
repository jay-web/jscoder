import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import {ContentBoxTheme} from "../theme/theme.component";

// import "./card.css";


const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "white",
    cursor: "pointer",
    marginTop: "0rem",
    fontSize: ".9rem",
    background: "none",
    borderRadius: "10px",
    color: "inherit",
    fontFamily: 'Sansita Swashed, cursive'
 
  

  },

  textBox: {
    marginBottom: `${theme.spacing(2)}px`,
    paddingLeft: ".1rem",
    fontSize: ".9rem",
    color: "inherit"
  },
  techBox: {
      fontWeight: "800",
      marginBottom: `${theme.spacing(2)}px`,
      paddingLeft: ".1rem",
      fontSize: ".9rem",
      color: "inherit"
  },
  
  avatar: {
    backgroundColor: "#d81b60",
    // color: "inherit"
    
  },
  liveButton:{
      backgroundColor: "#2979ff",
      color: "#fff",
      marginRight: ".5rem",
      fontSize: ".9rem",
      "&:hover":{
          color:"#000",
          backgroundColor: "#2979ff",
      },
     
  },
  postmanButton:{
      backgroundColor: "#d81b60",
      color: "#fff",
      fontSize: ".9rem",
      "&:hover":{
        color:"#000",
        backgroundColor: "#d81b60",
    }
  },
  buttonAnchor: {
    textDecoration: "none",
    color: "white"
  }
  
}));

function ContentBox(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [overlay, setOverlay] = React.useState(false);
  const { name, technology, summary, imageUrl, showAPI, title, button } = props;
  const handleExpandClick = () => {
    setOverlay(!overlay);
  };

  

  return overlay ? (
    <div className={`overlay ${overlay && "show"}`} />
  ) : (
    <ContentBoxTheme>
    <Card className={classes.root} elevation={0}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={ <Typography variant="h6">
        {name}
         </Typography>}
        subheader={
          <Typography variant="subtitle1">
              {title}
          </Typography>
        }
       
      />
      <Grid container >
        <Grid item container xs={12}>
          <CardContent>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              alignItems="stretch"
            >
              <Grid item className={classes.textBox}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                  className={classes.techBox}
                  
                >
                  Summary: {summary}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.techBox}
                  gutterBottom
                >
                  Technology: {technology}
                </Typography>
              </Grid>
              <Grid item container justify="space-between">
                <Grid item style={{ marginBottom: ".5rem"}}>
                  <Button className={classes.liveButton} >
                    <a href={button.liveURL} target="blank" className={classes.buttonAnchor}>Go Live</a>
                  </Button>
                </Grid>
                <Grid item>
                { showAPI ?
                 <Button className={classes.postmanButton}>Api with Postman</Button>
                 : null }
                </Grid>
                
              
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </ContentBoxTheme>
  );
}

export default ContentBox;
