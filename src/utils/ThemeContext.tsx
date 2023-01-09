import { createContext } from "react";


const ThemeContext = createContext({
    isLight: true,
    toggleTheme: ()=>{}
});

export default ThemeContext;