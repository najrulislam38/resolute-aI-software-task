import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

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
        path: "/video-applications",
        element: <p>Video Applications</p>,
      },
    ],
  },
]);

export default Routers;
