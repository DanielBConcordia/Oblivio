import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider2 = ({ children }) => {
  // Defina o estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({});

  // Função para atualizar os dados do formulário
  const updateFormData = (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
  };

  // Forneça o contexto e o estado para os componentes filhos
  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
