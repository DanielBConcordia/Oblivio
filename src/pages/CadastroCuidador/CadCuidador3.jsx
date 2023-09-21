import React from 'react-native';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from "react-native";

import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Verificação se o campo está preenchido
const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Digite seu email"),
    senha: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Digite sua senha"),
    apelido: yup.string().required("Digite como quer ser chamado"),
 
});


const CadastroCuidador3 = () => {

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
                    placeholder="Senha" 
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

        <Controller
            control={control}
            name="apelido"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Como quer de ser chamado?" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.apelido && 1,
                            borderColor: errors.apelido && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />
        {errors.apelido && <Text style={styles.labelError}> {errors.apelido?.message} </Text>}


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

export default CadastroCuidador3; 



