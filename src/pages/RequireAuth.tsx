import React, { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const RequireAuth: FC = (children: React.ReactNode) => {
  // ({ children }: { children: JSX.Element }) {
    
  let auth = useAuth();
  let location = useLocation();

  console.log("Auth: ", auth);

  if (!auth.user && localStorage.getItem("user") === null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <div>{children}</div>;
}

export default RequireAuth;