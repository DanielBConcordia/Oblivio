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
    console.log('Dados do formulário atualizados:', updatedData);


  };

  async function signIn(email, senha){
    await auth().signInWithEmailAndPassword(email, senha)
    .then( async (value) => {
        let uid = value.user.uid;

        const userProfile = await firestore().collection('users')
        .doc(uid).get();

        console.log(userProfile.data().nome)
    })  

    .catch((error) => {
        console.log(error)
    })
}

  // Forneça o contexto e o estado para os componentes filhos
  return (
    <FormContext.Provider value={{ formData, submitForm, signIn }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
