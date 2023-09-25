import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useFormContext } from '../../Contexts/FormContext';

const schema = yup.object().shape({
    cep: yup.string().min(8, "Digite corretamente o seu CEP").max(8, "Digite corretamente o seu CEP").required("Diite seu CEP"),
    uf: yup.string().min(2, "Digite corretamente o seu UF").max(2, "Digite corretamente o seu UF").required("Digite seu UF"),
    cidade: yup.string().required("Digite sua cidade").max(255),
    rua: yup.string().required("Digite sua rua").max(255),
    numero: yup.number().required("Digite o número da sua residência").min(6),
    complemento: yup.string().max(255),
    pontRef: yup.string().max(255)
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CadastroCuidador2 = () => {
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [pontRef, setPontRef] = useState('');
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { updateFormData } = useFormContext();

    const navigation = useNavigation();

    const handleCadastro2 = () => {
        setFormSubmitted(true);

    schema
        .validate({ cep, uf, cidade, rua, numero, complemento, pontRef })
        .then(() => {
            const userData = {
                cep,
                uf,
                cidade,
                rua,
                numero,
                complemento,
                pontRef
            };

            updateFormData(userData);

            navigation.navigate('CadastroCuidador3');
            console.log('Dados Atualizados em JSON:', userData);
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
                  style={[styles.input, (errors.cep && formSubmitted) && styles.inputError]}
                  placeholder="Digite seu CEP"
                  underlineColorAndroid={'#7f7f7f'}
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setCep(text)}
                  value={cep}
                />
                {(errors.cep && formSubmitted) && <Text style={styles.labelError}> {errors.cep} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.uf && formSubmitted) && styles.inputError]}
                  placeholder="Digite seu UF de moradia"
                  value={uf}
                  underlineColorAndroid={'#7f7f7f'}
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setUf(text)}
                  />
                {(errors.uf && formSubmitted) && <Text style={styles.labelError}> {errors.uf} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.cidade && formSubmitted) && styles.inputError]}
                  placeholder="Digite sua Cidade"
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setCidade(text)}
                  value={cidade}
                />
                {(errors.cidade && formSubmitted) && <Text style={styles.labelError}> {errors.cidade} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.rua && formSubmitted) && styles.inputError]}
                  placeholder="Digite o nome da rua"
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setRua(text)}
                  value={rua}
                />
                {(errors.rua && formSubmitted) && <Text style={styles.labelError}> {errors.rua} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.numero && formSubmitted) && styles.inputError]}
                  placeholder="Digite o número da casa"
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setNumero(text)}
                  value={numero}
                  keyboardType="numeric"
                />
                {(errors.numero && formSubmitted) && <Text style={styles.labelError}> {errors.numero} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.complemento && formSubmitted) && styles.inputError]}
                  placeholder="Digite o complemento da casa"
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setComplemento(text)}
                  value={complemento}
                />
                {(errors.complemento && formSubmitted) && <Text style={styles.labelError}> {errors.complemento} </Text>}
        
                <TextInput
                  style={[styles.input, (errors.pontRef && formSubmitted) && styles.inputError]}
                  placeholder="Digite o ponto de referencia"
                  placeholderTextColor={'#7f7f7f'}
                  onChangeText={(text) => setPontRef(text)}
                  value={pontRef}
                />
                {(errors.pontRef && formSubmitted) && <Text style={styles.labelError}> {errors.pontRef} </Text>}
        
        
                <TouchableOpacity onPress={handleCadastro2}>
                  <Text> Próximo </Text>
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


export default CadastroCuidador2;