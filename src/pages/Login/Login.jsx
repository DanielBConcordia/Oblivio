import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import React, { Alert, useState } from 'react';

import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Verificacao } from '../../utils/validacaoEmail/verificacao';

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const entrar = () => {
    if (email !== '' && password !== '') {
    //    <Verificacao/>
    } else {
        Alert.alert('Erro', 'Por favor, digite email e senha.');
    }
};

//Verificação se o campo está preenchido
const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Digite seu email"),
    senha: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Digite sua senha")
});


const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver : yupResolver(schema)
    })

    function handleSignIn(data) {
       console.log(data);
    }

    return(
        <View style={styles.container}>
        <Controller
            control={control}
            name="email"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Data de Nascimento" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.email && 1,
                            borderColor: errors.email && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />
        {errors.email && <Text style={styles.labelError}> {errors.email?.message} </Text>}


        <Controller
            control={control}
            name="senha"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="CPF" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.senha && 1,
                            borderColor: errors.senha && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />  
        {errors.senha && <Text style={styles.labelError}> {errors.senha?.message} </Text>}


            <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    labelError: {
        alignSelf: 'flex-start',
        color: '#2f56b6',
        marginBottom: 8
    }
});

export default Login; 

