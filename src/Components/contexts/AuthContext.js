import { createContext, useState } from "react";



export const authContext=createContext()
export default function AuthContextProvider({children})
{
    const[userIsLoggedIn,setUserIsLoggedIn]=useState(!!localStorage.getItem('token'))

    return (
      <authContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn }}>
        {children}
      </authContext.Provider>
    );
}