import React, {createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider (props){
    const [isDarkMode, setMode] = useState(false);

    const changeMode = () => {
        setMode(!isDarkMode);
    }

    return (
        <ThemeContext.Provider value={{isDarkMode, changeMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}