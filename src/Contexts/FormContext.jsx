import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // Defina o estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({});

  // Função para atualizar os dados do formulário
  const submitForm = (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
    // Adicione um console.log para verificar as mudanças nos dados
    // console.log('Dados do formulário atualizados:', updatedData);


  };


  // Forneça o contexto e o estado para os componentes filhos
  return (
    <FormContext.Provider value={{ formData, submitForm}}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
}
