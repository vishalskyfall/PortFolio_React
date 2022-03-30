// import { createGlobalStyle } from "styled-components"

import { useEffect, useState } from "react";

// export const lightTheme ={
//     body:'#e9eaed',
//     fontColor :'#27292a'
// }

// export const darkTheme ={
//     body:'#0a192f',
//     fontColor :'#e9eaed'
// }

// export const GlobalStyles= createGlobalStyle`
// body{
//     background-color : ${props=>props.theme.body}
// }

// `

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme)
    root.classList.add(theme);
    localStorage.setItem('theme', theme)
  }, [theme,colorTheme]);
  return [colorTheme, setTheme];
}
