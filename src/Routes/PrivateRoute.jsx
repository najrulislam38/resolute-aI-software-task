import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, Loading } = useAuth();
  const location = useLocation();

  if (Loading) {
    return (
      <div className="w-full mt-10 flex justify-center items-center">
        <span className="font-medium">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
