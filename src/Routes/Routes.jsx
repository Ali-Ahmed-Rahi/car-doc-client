import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CheckOut from "../CheckOut/CheckOut";
import PrivetRoute from "./PrivetRoute";
import Orders from "../components/Orders/Orders";
import Service from "../Pages/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivetRoute>
            <Service></Service>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-mocha-sigma.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-mocha-sigma.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
