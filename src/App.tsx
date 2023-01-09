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
import { useState } from 'react';
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
        path:"/game",
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
  const [light, setLight] = useState(true);
  
  return (
    <ThemeContext.Provider value={{
      isLight: light,
      toggleTheme: ()=>{
        const res = document.body.classList.contains(light ? "theme-light" : "theme-dark");
        if(!res)
            document.body.classList.add(light ? "theme-light" : "theme-dark");
        document.body.classList.replace(light ? "theme-light" : "theme-dark", !light ? "theme-light" : "theme-dark");
        setLight((light=>!light))
      }
    }}>
      <RouterProvider router={route}/>
    </ThemeContext.Provider>
  );
}

export default App;
