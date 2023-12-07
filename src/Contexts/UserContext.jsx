import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [listPaciente, setListPaciente] = useState({})
  const [pacienteSelecionado, setPacienteSelecionado] = useState({})
  const [cuidadoresList, setCuidadoresList] = useState([]);

  const submitLogin = (data, pacienteList) => {
    const updatedLoginData = { ...userData, ...data };
    setUserData(updatedLoginData);
    setListPaciente(pacienteList);

  };

  const selecionarPaciente = (paciente) => {
    setPacienteSelecionado(paciente);
  };

  const updateCuidadoresList = (cuidadores) => {
    setCuidadoresList(cuidadores);
  };

  return (
    <UserContext.Provider value={{
      userData, submitLogin, listPaciente, selecionarPaciente, pacienteSelecionado, cuidadoresList,
      updateCuidadoresList
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
