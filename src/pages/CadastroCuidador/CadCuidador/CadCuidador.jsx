import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, Platform, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from '../../../Contexts/FormContext';
 
import { 
  FormInput,
  Container,
  Form,
  Title,
  SubTitle,
  NextButton,
  TextButton
 } from '../../../../styleGlobal';

import {
  TextConta,
  LoginButton,
  TextLogin
} from './style'

const schema = yup.object().shape({
  nomeComp: yup.string().required("Digite o Nome Completo"),
  cpf: yup.string().min(11, "Digite corretamente o CPF").max(11, "Digite corretamente o CPF").required("Digite seu CPF"),
  telefone: yup.number().min(11, "Digite corretamente o número de telefone").required("Digite o número de telefone"),
  telefoneRes: yup.number().min(11, "Digite corretamente o número de telefone").required("Digite o número de telefone reserva"),
  dataNascimento: yup.string().required("Digite a Data de Nascimento").matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Digite uma data válida (dd/mm/yyyy)"),
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CadastroCuidador = () => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [nomeComp, setNomeComp] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [telefoneRes, setTelefoneRes] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


  // Use o hook useFormContext para acessar o contexto e as funções relacionadas ao formulário
  const { submitForm } = useFormContext();

  const navigation = useNavigation();

  const handleCadastro = () => {
    setFormSubmitted(true);

    schema
      .validate({ dataNascimento, nomeComp, cpf, telefone, telefoneRes })
      .then(() => {
        const formattedDataNascimento = dataNascimento.replace(/\//g, '');
        const userData = {
          dataNascimento: formattedDataNascimento,
          nomeComp,
          cpf,
          telefone,
          telefoneRes,
        };

        const birthYear = parseInt(formattedDataNascimento.slice(-4), 10);
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        if (age < 18) {
          setErrors({ dataNascimento: 'Você deve ter mais de 18 anos para se cadastrar' });
        } else if (age > 60) {
          setErrors({ dataNascimento: 'Você deve ter menos de 60 anos para se cadastrar' });
        } else {
          // Atualize os dados do formulário usando o contexto
          submitForm(userData);

          // Substitua a rota abaixo pela rota que você criou
          navigation.navigate('CadastroCuidador2'); 
          console.log('Dados do Usuário em JSON:', userData);
          setErrors({});
        }
      })
      .catch((error) => {
        setErrors({ [error.path]: error.message });
      });
  };

  const formatDataNascimento = (text) => {
    let formattedDate = text.replace(/\D/g, '');
    if (formattedDate.length > 2) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    }
    if (formattedDate.length > 5) {
      formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5, 9)}`;
    }
    setDataNascimento(formattedDate);
  };

  const switchPage = () => {
    navigation.navigate('Login');
  }

  const next = () => {
    navigation.navigate("RecuperarSenha");
  } 

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
   <Container>
      <Title> Cadastre-se</Title>
      <SubTitle>Crie uma conta para continuar</SubTitle>
      <Form> 
        <FormInput
          style={[(errors.nomeComp && formSubmitted) && styles.inputError && isFocused]}
          placeholder="Digite seu Nome Completo"
          onChangeText={(text) => setNomeComp(text)}
          value={nomeComp}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {(errors.nomeComp && formSubmitted) && <Text style={styles.labelError}> {errors.nomeComp} </Text>}

        <FormInput
          style={[(errors.dataNascimento && formSubmitted) && styles.inputError]}
          placeholder="Digite sua Data de Nascimento"
          value={dataNascimento}
          onChangeText={(text) => formatDataNascimento(text)}
          keyboardType="numeric"
          maxLength={10}
        />
        {(errors.dataNascimento && formSubmitted) && <Text style={styles.labelError}> {errors.dataNascimento} </Text>}

        <FormInput
          style={[(errors.cpf && formSubmitted) && styles.inputError]}
          placeholder="DIgite seu CPF"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
        />
        {(errors.cpf && formSubmitted) && <Text style={styles.labelError}> {errors.cpf} </Text>}

        <FormInput
          style={[(errors.telefone && formSubmitted) && styles.inputError]}
          placeholder="Digite seu Telefone"
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
          keyboardType="numeric"
        />
        {(errors.telefone && formSubmitted) && <Text style={styles.labelError}> {errors.telefone} </Text>}

        <FormInput
          style={[(errors.telefoneRes && formSubmitted) && styles.inputError]}
          placeholder="Digite um Telefone Reserva"
          onChangeText={(text) => setTelefoneRes(text)}
          value={telefoneRes}
          keyboardType="numeric"
        />
        {(errors.telefoneRes && formSubmitted) && <Text style={styles.labelError}> {errors.telefoneRes} </Text>}

        <NextButton onPress={handleCadastro}>
          <TextButton> Próximo </TextButton>
        </NextButton>

        <TextConta> Já possui uma conta? </TextConta>
          <LoginButton onPress={switchPage}>
            <TextLogin> Fazer login </TextLogin>
          </LoginButton>
        
        <NextButton onPress={next}> <Text>Recuperar Senha</Text></NextButton>
        
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
    marginBottom: windowHeight * 0.02, 
  }
});

export default CadastroCuidador;
