//import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import GamePage from './pages/GamePage';
import { useEffect, useState } from 'react';
import ThemeContext from './utils/ThemeContext';

const route = createBrowserRouter([
  {
    path:"/",
    element: <MainPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path:"/game/:id",
        element: <GamePage/>
      }
    ],
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
]);


function App() {  
  const themeLight = "theme-light", themeDark = "theme-dark";
  const [light, setLight] = useState(true);
  
  useEffect(()=>{
    const lightOn = !(localStorage.getItem(themeLight) === "off");
    setLight(lightOn);
    const res = document.body.classList.contains(lightOn ? themeLight : themeDark);
    !res && document.body.classList.add(lightOn ? themeLight : themeDark);
  }, []);

  return (
    <ThemeContext.Provider value={{
      isLight: light,
      toggleTheme: ()=>{
        document.body.classList.replace(light ? themeLight : themeDark, !light ? themeLight : themeDark);
        setLight((light=>{
          try {
            localStorage.setItem(themeLight, !light ? "on" : "off");
          } catch (error) {}
          return !light
        }))
        
      }
    }}>
      <RouterProvider router={route}/>
    </ThemeContext.Provider>
  );
}

export default App;
