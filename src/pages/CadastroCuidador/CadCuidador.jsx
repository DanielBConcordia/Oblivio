import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

// Importe o hook useFormContext do seu contexto (FormContext)
import { useFormContext } from '../../Contexts/FormContext'; // Substitua 'FormContext' pelo caminho correto do seu contexto

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
  const { updateFormData } = useFormContext();

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
          updateFormData(userData);

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

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Cadastre-se</Text>
      <Text style={styles.subTitulo}>Crie uma conta para continuar</Text>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, (errors.nomeComp && formSubmitted) && styles.inputError && isFocused && styles.inputFocused ]}
          placeholder="Nome Completo"
          underlineColorAndroid={'#7f7f7f'}
          placeholderTextColor={'#7f7f7f'}
          onChangeText={(text) => setNomeComp(text)}
          value={nomeComp}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {(errors.nomeComp && formSubmitted) && <Text style={styles.labelError}> {errors.nomeComp} </Text>}

        <TextInput
          style={[styles.input, (errors.dataNascimento && formSubmitted) && styles.inputError]}
          placeholder="dd/mm/yyyy"
          value={dataNascimento}
          onChangeText={(text) => formatDataNascimento(text)}
          keyboardType="numeric"
          maxLength={10}
        />
        {(errors.dataNascimento && formSubmitted) && <Text style={styles.labelError}> {errors.dataNascimento} </Text>}

        <TextInput
          style={[styles.input, (errors.cpf && formSubmitted) && styles.inputError]}
          placeholder="CPF"
          placeholderTextColor={'#7f7f7f'}
          onChangeText={(text) => setCpf(text)}
          value={cpf}
        />
        {(errors.cpf && formSubmitted) && <Text style={styles.labelError}> {errors.cpf} </Text>}

        <TextInput
          style={[styles.input, (errors.telefone && formSubmitted) && styles.inputError]}
          placeholder="Telefone"
          placeholderTextColor={'#7f7f7f'}
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />
        {(errors.telefone && formSubmitted) && <Text style={styles.labelError}> {errors.telefone} </Text>}

        <TextInput
          style={[styles.input, (errors.telefoneRes && formSubmitted) && styles.inputError]}
          placeholder="Telefone Reserva"
          placeholderTextColor={'#7f7f7f'}
          onChangeText={(text) => setTelefoneRes(text)}
          value={telefoneRes}
        />
        {(errors.telefoneRes && formSubmitted) && <Text style={styles.labelError}> {errors.telefoneRes} </Text>}

        <TouchableOpacity onPress={handleCadastro} style={styles.nextButton}>
          <Text style={styles.buttonText}> Próximo </Text>
        </TouchableOpacity>

        <Text style={styles.textLogin}>Já possui uma conta?
          <TouchableOpacity onPress={switchPage} style={styles.loginButton}>
            Fazer login
          </TouchableOpacity>
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    justifyContent: 'center',
  },

  form: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: windowWidth * 0.05,
  },

  titulo: {
    fontSize: windowWidth * 0.06, 
    color: '#fff',
    textAlign: 'center',
    marginTop: '8%',
    fontFamily: 'Arial'
  },

  subTitulo: {
    fontSize: windowWidth * 0.045, 
    color: '#fff', 
    textAlign: 'center',
    marginBottom: windowHeight * 0.07, 
    fontFamily: 'Arial'
  },

  input: {
    height: windowHeight * 0.05,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: windowHeight * 0.01, 
    paddingHorizontal: windowWidth * 0.03,
    borderBottomWidth: 1
  },

  inputFocused: {
    borderColor: 'white',
  },

  inputError: {
    borderColor: '#ff375b',
  },

  labelError: {
    color: '#ff375b',
    marginBottom: windowHeight * 0.02, 
  },

  loginButton: {
    marginLeft: 5,
    color: 'blue'
  },

  textLogin: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'Arial'
  },

  buttonText: {
    color: 'blue',          // Texto azul (mesma cor da borda)
    textAlign: 'center',
  },
  
  nextButton: {
    backgroundColor: 'white', // Fundo branco
    borderColor: 'blue',     // Bordas azuis
    borderRadius: 10,        // Borda arredondada
    borderWidth: 2,         // Largura da borda
    padding: 10,
    marginTop: 35,
  }

});

export default CadastroCuidador;
