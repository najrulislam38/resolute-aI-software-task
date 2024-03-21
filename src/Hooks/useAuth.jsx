import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const allAuthInfo = useContext(AuthContext);
  return allAuthInfo;
};

export default useAuth;
