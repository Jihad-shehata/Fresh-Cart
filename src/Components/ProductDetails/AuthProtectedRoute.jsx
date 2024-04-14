import React, { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import Home from "../Home/Home";
import { Navigate } from "react-router-dom";


export default function AuthProtectedRoute({children})
  // Check if user logged or not 
  {
    const {setUserIsLoggedIn,userIsLoggedIn}=useContext(authContext)
    return(
        <>
            {userIsLoggedIn?<Navigate to={'/home'}/>:children}
        </>
    )
}