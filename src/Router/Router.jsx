import { createBrowserRouter, data, Router } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Marathons from "../components/Pages/Marathons/Marathons";
import Dashboard from "../components/Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/marathons",
        element: <Marathons />,
        
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
