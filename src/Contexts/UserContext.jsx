import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [listPaciente, setListPaciente] = useState({})

  const submitLogin = (data) => {
    const updatedLoginData = { ...userData, ...data, ...listPaciente };
    setUserData(updatedLoginData);
    setListPaciente(listPaciente)
  };

  return (
    <UserContext.Provider value={{ userData, submitLogin, listPaciente }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
