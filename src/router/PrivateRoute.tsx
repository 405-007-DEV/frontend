import {useState} from "react";
import {Navigate, Outlet} from "react-router-dom";

export function PrivateRoute() {
  const [isLogin] = useState(true);

  return isLogin ? <Outlet /> : <Navigate to="sign-in" />;
}
