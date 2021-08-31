import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return userContext;
};
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");

  const value = {
    name,
    setName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
