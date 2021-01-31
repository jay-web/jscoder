import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 700,
    // width: "95%",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: "5px",
    // marginBottom: "0px",
    padding: "0px"
    
  },
  textBox: {
    marginBottom: `${theme.spacing(2)}px`,
  },

  imageBox:{
    // background: `url("./dummy.jpeg")`,
    // background: "black",
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    

  }
}));

function ProjectCards(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [overlay, setOverlay] = React.useState(false);
  const { imageURL } = props;
  const handleExpandClick = () => {
    setOverlay(!overlay);
  };

  return overlay ? (
    <div className={`overlay ${overlay && "show"}`} />
  ) : (
   
    <div>
      <img src={imageURL} className={classes.imageBox} />
      </div>
   
  );
}

export default ProjectCards;
