import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  const submitLogin = (data) => {
    const updatedLoginData = { ...userData, ...data };
    setUserData(updatedLoginData);
    
    // Adicione um console.log para verificar as mudanças nos dados
    console.log('Dados do formulário atualizados:', updatedLoginData);


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
