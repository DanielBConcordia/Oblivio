import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  const submitLogin = (data) => {
    const updatedLoginData = { ...userData, ...data };
    setUserData(updatedLoginData);
  };

  return (
    <UserContext.Provider value={{ userData, submitLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
