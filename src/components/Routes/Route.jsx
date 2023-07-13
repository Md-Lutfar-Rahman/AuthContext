import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Home/Home/Home";
import Layout from "../../Layouts/FrontEnd/Layout";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement:"<p>This is from error page</p>",
      children:[
        {
            path:'/',
            element:<Home></Home>,
            errorElement:"<p>This is from error page</p>",
        },
        {
          path:'/dashboard',
          element:
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>,
          errorElement:"<p>This is from error page</p>",
        },
        {
            path:'/login',
            element:<Login/>,
            errorElement:"<p>This is from error page</p>"
        },
        {
            path:'/register',
            element:<Register/>,
            errorElement:"<p>This is from error page</p>"
        }

      ]
    },
  ]);