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
    
  },
  pname:{
    // fontFamily: 'Sansita Swashed, cursive !important'
    fontFamily: 'Akaya Telivigala, cursive',
    fontWeight: "bold",
    letterSpacing: "2px"
    

  },
  tname:{
    fontFamily: 'Akaya Telivigala, cursive',
  },

  textBox: {
    marginBottom: `${theme.spacing(2)}px`,
    paddingLeft: ".1rem",
    fontSize: ".9rem",
    color: "inherit",
    // fontFamily: 'Akaya Telivigala, cursive'
    
    

  },
  summary: {
      fontWeight: "800",
      marginBottom: `${theme.spacing(2)}px`,
      paddingLeft: ".1rem",
      fontSize: "1.1rem",
      color: "inherit",
      fontFamily: 'Akaya Telivigala, cursive'
  },
  tag:{
    fontWeight: "normal"
  },
  
  avatar: {
    backgroundColor: "#d81b60",
    // color: "inherit"
    
  },
  liveButton:{
      backgroundColor: "#064cd5",
      color: "#fff",
      marginRight: ".5rem",
      fontSize: ".9rem",
      fontFamily: 'Akaya Telivigala, cursive',
    
      "&:hover":{
          color:"#000",
          backgroundColor: "#2979ff",
      },
      
     
  },
  postmanButton:{
      backgroundColor: "#d81b60",
      color: "#fff",
      fontSize: ".9rem",
      fontFamily: 'Akaya Telivigala, cursive',
      "&:hover":{
        color:"#000",
        backgroundColor: "#ef4873",
    }
  },
  githubButton:{
    backgroundColor: "#414849",
    fontFamily: 'Akaya Telivigala, cursive',
    fontSize: ".9rem",
    "&:hover":{
     
      backgroundColor: "#000",
  }
  },
  buttonAnchor: {
    textDecoration: "none",
    color: "white"
  },
  gitButtonAnchor:{
    textDecoration: "none",
    color: "#fff",
    "&:hover":{
      color: "#fff"
    }
  }
  
}));

function ContentBox(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [overlay, setOverlay] = React.useState(false);
  const { name, technology, summary, imageUrl, showAPI, title, button, showCode } = props;
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
        title={ <Typography variant="h6" className={classes.pname}>
        {name}
         </Typography>}
        subheader={
          <Typography variant="subtitle1" className={classes.tname}>
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
                  className={classes.summary}
                  
                >
                  Summary: <span className={classes.tag}>{summary}</span>
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.summary}
                  gutterBottom
                >
                  Technology: <span className={classes.tag}>{technology}</span>
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
                 <Button className={classes.postmanButton}>
                    <a href={button.postmanURL} target="blank" className={classes.buttonAnchor}> Api with Postman</a>
                   </Button>
                 : null }
                </Grid>
                <Grid item>
                { showCode ?
                 <Button className={classes.githubButton} >
                    <a href={button.githubURL} target="blank" className={classes.gitButtonAnchor}> Code on Github</a>
                   </Button>
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
