import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useFormContext } from '../../Contexts/FormContext';

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
    
    const { updateFormData } = useFormContext();
    const navigation = useNavigation();

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

                updateFormData(userData);
                navigation.navigate('TesteCorrect');
                console.log('Dados Finais em JSON:', userData);
                setErrors({});
            })
            .catch((error) => {
                setErrors({ [error.path]: error.message});
            });
    }

    return (
        <View style={styles.container}>
              <Text style={styles.titulo}> Cadastre-se</Text>
              <Text style={styles.subTitulo}>Crie uma conta para continuar</Text>
              <View style={styles.form}>
                <TextInput
                  style={[styles.input, (errors.email && formSubmitted) && styles.inputError]}
                  placeholder="Digite seu Email"
                  underlineColorAndroid={'#7f7f7f'}
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
                {(errors.email && formSubmitted) && <Text style={styles.labelError}> {errors.email} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.senha && formSubmitted) && styles.inputError]}
                  placeholder="Digite sua senha"
                  value={senha}
                  underlineColorAndroid={'#7f7f7f'}
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setSenha(text)}
                  />
                {(errors.senha && formSubmitted) && <Text style={styles.labelError}> {errors.senha} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.apelido && formSubmitted) && styles.inputError]}
                  placeholder="Digite como quer ser chamado"
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setApelido(text)}
                  value={apelido}
                />
                {(errors.apelido && formSubmitted) && <Text style={styles.labelError}> {errors.apelido} </Text>}

                <TouchableOpacity onPress={handleCadastro3}>
                  <Text> Cadastrar </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f56b6',
      justifyContent: 'center',
    },
    form: {
      backgroundColor: '#fff',
      flex: 1,
      borderRadius: 10,
      padding: windowWidth * 0.05, // Use uma porcentagem da largura da tela para o padding
    },
    titulo: {
      fontSize: windowWidth * 0.06, // Use uma porcentagem da largura da tela para o tamanho da fonte
      color: '#fff',
      textAlign: 'center',
    },
    subTitulo: {
      fontSize: windowWidth * 0.045, // Use uma porcentagem da largura da tela para o tamanho da fonte
      color: '#fff',
      marginTop: windowHeight * 0.01, // Use uma porcentagem da altura da tela para a margem superior
      textAlign: 'center',
      marginBottom: windowHeight * 0.03, // Use uma porcentagem da altura da tela para a margem inferior
    },
    input: {
      height: windowHeight * 0.05, // Use uma porcentagem da altura da tela para a altura do input
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: windowHeight * 0.01, // Use uma porcentagem da altura da tela para a margem inferior
      paddingHorizontal: windowWidth * 0.03, // Use uma porcentagem da largura da tela para o padding horizontal
    },
    inputError: {
      borderColor: '#ff375b',
    },
    labelError: {
      color: '#ff375b',
      marginBottom: windowHeight * 0.02, // Use uma porcentagem da altura da tela para a margem inferior
    },
  });

  export default CadastroCuidador3;