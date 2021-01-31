import React, {useContext} from "react";
import {ThemeContext } from "../../contexts/theme.contexts";

export function DarkThemeMode(props) {
    const { isDarkMode } = useContext(ThemeContext);

  const style = {
    backgroundColor: !isDarkMode ? "white" : "#37474f",
    
  };

  return <div style={style}>{props.children}</div>;
}


export function ContentBoxTheme(props) {
  const { isDarkMode } = useContext(ThemeContext);

const style = {
  backgroundColor: !isDarkMode ? "white" : "#62727b",
  borderRadius: "10px",
  color: !isDarkMode  ? "#37474f" : "white" 
  
};

return <div style={style}>{props.children}</div>;
}

export function CardBoxTheme(props) {
  const { isDarkMode } = useContext(ThemeContext);

const style = {
  backgroundColor: !isDarkMode ? "white" : "#62727b",
};

return <div style={style}>{props.children}</div>;
}