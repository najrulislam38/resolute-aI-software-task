import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddApplications from "../Pages/AddApplications";

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
        element: <p>All Users</p>,
      },
      {
        path: "/application-list",
        element: <p>application-list</p>,
      },
      {
        path: "/add-application",
        element: <AddApplications />,
      },
      {
        path: "/video-applications",
        element: <p>Video Applications</p>,
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
