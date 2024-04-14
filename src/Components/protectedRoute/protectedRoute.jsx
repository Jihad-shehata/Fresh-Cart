import React, { useContext } from "react"
import { authContext } from "../contexts/AuthContext"
import Login from "../Login/Login"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}){
      // Check if user logged or not 
  const {setUserIsLoggedIn,userIsLoggedIn}=useContext(authContext)
    return(
        <> {userIsLoggedIn?children:<Login/>}</>
       
    )
}