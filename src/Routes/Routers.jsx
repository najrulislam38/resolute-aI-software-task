import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddApplications from "../Pages/AddApplications";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Users";
import Applications from "../Pages/Applications";
import VideoApplications from "../Pages/VideoApplications";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "/application-list",
        element: (
          <PrivateRoute>
            <Applications />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-application",
        element: (
          <PrivateRoute>
            <AddApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/video-applications",
        element: (
          <PrivateRoute>
            <VideoApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

export default Routers;
