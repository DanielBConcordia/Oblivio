import React from 'react-native';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from "react-native";

import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Verificação se o campo está preenchido
const schema = yup.object({
    cep: yup.number().min(8, "Digite corretamente o cep").required("Digite o Cep"),
    uf: yup.string().min(2, "Digite corretamente o uf").required("Digite o UF"),
    cidade: yup.string().required("Digite sua cidade"),
    rua: yup.string().required("Digite o nome da rua"),
    numero: yup.number().required("Digite o número da residência"),
    complemento: yup.string().required("Digite o complemento"),
    pontRef: yup.string().required("Digite o ponto de referência")
});


const CadastroCuidador2 = () => {

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
            name="cep"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="CEP" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.cep && 1,
                            borderColor: errors.cep && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />
        {errors.cep && <Text style={styles.labelError}> {errors.cep?.message} </Text>}

        <Controller
            control={control}
            name="uf"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="UF" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.uf && 1,
                            borderColor: errors.uf && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />
        {errors.uf && <Text style={styles.labelError}> {errors.uf?.message} </Text>}


        <Controller
            control={control}
            name="cidade"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Cidade" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.cidade && 1,
                            borderColor: errors.cidade && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />  
        {errors.cidade && <Text style={styles.labelError}> {errors.cidade?.message} </Text>}

        <Controller
            control={control}
            name="rua"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Rua" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.rua && 1,
                            borderColor: errors.rua && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />  
        {errors.rua && <Text style={styles.labelError}> {errors.rua?.message} </Text>}

        <Controller
            control={control}
            name="numero"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Número" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.numero && 1,
                            borderColor: errors.numero && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />  
        {errors.numero && <Text style={styles.labelError}> {errors.numero?.message} </Text>}

        <Controller
            control={control}
            name="complemento"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Complemento" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.complemento && 1,
                            borderColor: errors.complemento && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />  
        {errors.complemento && <Text style={styles.labelError}> {errors.complemento?.message} </Text>}

        <Controller
            control={control}
            name="pontRef"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInput 
                    placeholder="Ponto de referência" 
                    style={[
                        styles.Input,
                        {
                            borderWidth: errors.pontRef && 1,
                            borderColor: errors.pontRef && '#ff375b'
                        }
                    ]} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                />
            )}
        />  
        {errors.pontRef && <Text style={styles.labelError}> {errors.pontRef?.message} </Text>}


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

export default CadastroCuidador2; 


