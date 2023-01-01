//import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

const route = createBrowserRouter([
  {
    path:"/",
    element: <MainPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  }
]);


function App() {

  return (
    <>
      
    </>
  );
}

export { App, RouterProvider, route };
