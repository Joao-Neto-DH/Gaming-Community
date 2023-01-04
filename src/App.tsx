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

  return (
    <>
      
    </>
  );
}

export { App, RouterProvider, route };
