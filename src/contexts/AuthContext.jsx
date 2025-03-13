import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    // Perform logout logic and clear user credentials
    localStorage.clear();
    setAuthUser(null);
    
  };

  const authContextValue = {
    setAuthUser,
    authUser,
    isLoading,
    logout,
  };

  useEffect(() => {
    let credentials = JSON.parse(localStorage.getItem("user"));
    console.log(credentials);
    setAuthUser(credentials);
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
