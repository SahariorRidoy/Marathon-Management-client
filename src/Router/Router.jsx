import { createBrowserRouter, data, Router } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Marathons from "../components/Pages/Marathons/Marathons";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import AddMarathon from "../components/Pages/Dashboard/AddMarathon";
import MyMarathon from "../components/Pages/Dashboard/MyMarathon";
import MyApplyList from "../components/Pages/Dashboard/MyApplyList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MarathonDetails from "../components/MarathonDetails/MarathonDetails";
import MarathonRegistration from "../components/Pages/MarathonRegistration/MarathonRegistration";
import ContactUs from "../components/Pages/Contact Us/ContactUs";
import FaqSection from "../components/Pages/Home/FAQSection";

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
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/faq",
        element: <FaqSection></FaqSection>,
      },
      {
        path: "/marathons",
        element: (
          <PrivateRoute>
            <Marathons />
          </PrivateRoute>
        ),
      },
      {
        path: "/marathons/:id",
        element: (
          <PrivateRoute>
            <MarathonDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/marathons/:id/marathon-registration",
        element: (
          <PrivateRoute>
            <MarathonRegistration />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <AddMarathon></AddMarathon>,
          },
          {
            path: "my-marathon",
            element: <MyMarathon></MyMarathon>,
          },
          {
            path: "my-apply",
            element: <MyApplyList></MyApplyList>,
          },
          
        ],
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
