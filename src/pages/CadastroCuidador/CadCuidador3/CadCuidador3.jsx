import React, { useState } from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

import * as yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { useNavigation } from '@react-navigation/native';
import { useFormContext } from '../../../Contexts/FormContext';
import { useUser } from '../../../Contexts/UserContext';

import { Ionicons } from '@expo/vector-icons'


import { View } from './style';
import {
  FormInput,
  Container,
  Form,
  Title,
  SubTitle,
  NextButton,
  TextButton
} from '../../../../styleGlobal';



const schema = yup.object().shape({
  email: yup.string().email().required("Digite o seu Email"),
  senha: yup.string().required("Digite o sua Senha"),
  apelido: yup.string().max(50)
});


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CadastroCuidador3 = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [apelido, setApelido] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  //declaração do estado showPassword
  const [showPassword, setShowPassword] = useState(false);

  const { submitForm, formData } = useFormContext();
  const { submitLogin } = useUser();
  const navigation = useNavigation();

  async function handleSignIn(formData) {
    let body = {
      cpf: formData.cpf,
      dtNascimento: formData.dataNascimento,
      email: email,
      telefone: formData.telefone,
      telefoneReserva: formData.telefoneRes,
      nomeSocial: apelido,
      nome: formData.nomeComp,
      senha: senha,
      rua: formData.rua,
      cep: formData.cep,
      bairro: formData.bairro,
      numeroCasa: formData.numero,
      cidade: formData.cidade,
      uf: formData.uf,
      complementoCasa: formData.complemento,
      pontoReferencia: formData.pontRef,
    }
    let headers = {
      "Acces-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }

    try {

      const response = await axios.post('https://oblivio-api.vercel.app/cuidador/cad/', body, headers);

      const userData = response.data;

      await AsyncStorage.setItem('@oblivioApp:userData', JSON.stringify(userData));
      submitLogin(userData);


    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  }

  const handleCadastro3 = () => {
    setFormSubmitted(true);

    schema
      .validate({ email, senha, apelido })
      .then(() => {
        const userData = {
          email,
          senha,
          apelido
        };

        submitForm(userData);
        handleSignIn(formData);

        navigation.navigate('TelaInicial');

        setErrors({});
      })
      .catch((error) => {
        setErrors({ [error.path]: error.message });
      });
  }



  return (
    <Container>
      <Title> Cadastre-se </Title>
      <SubTitle> Crie uma conta para continuar </SubTitle>
      <Form>

        <FormInput
          style={[(errors.email && formSubmitted) && styles.inputError]}
          placeholder="Digite seu Email"
          onChangeText={(text) => setEmail(text)}
          value={email}

        />
        {(errors.email && formSubmitted) && <Text style={styles.labelError}> {errors.email} </Text>}

        <View>
          <FormInput
            style={[(errors.senha && formSubmitted) && styles.inputError]}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={!showPassword} //Usando a propriedade secureTextEntry para ocultar/mostrar a senha 
          />

          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            style={{
              color: "#000000",
              fontSize: 22,
              marginRight: 50,
              marginTop: 20,
            }}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        {(errors.senha && formSubmitted) && <Text style={styles.labelError}> {errors.senha} </Text>}

        <FormInput
          style={[(errors.apelido && formSubmitted) && styles.inputError]}
          placeholder="Digite como quer ser chamado"
          onChangeText={(text) => setApelido(text)}
          value={apelido}
        />
        {(errors.apelido && formSubmitted) && <Text style={styles.labelError}> {errors.apelido} </Text>}



        <NextButton onPress={handleCadastro3}>
          <TextButton> Cadastrar </TextButton>
        </NextButton>
      </Form>

    </Container>

  );
};

const styles = StyleSheet.create({
  inputError: {
    borderColor: '#ff375b',
  },
  labelError: {
    color: '#ff375b',
    marginBottom: windowHeight * 0.02, // Use uma porcentagem da altura da tela para a margem inferior
  }
});

export default CadastroCuidador3;