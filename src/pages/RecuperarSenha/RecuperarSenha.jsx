import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import auth from '../../utils/firebaseConfig';

import { TextConta, MeuButton } from './style';
import {FormInput} from '../../../styleGlobal';

const RecuperarSenha = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
 
    const recover = () => {
    {/* ver se o email está vazio ou não*/} 
      if(email !== ''){ errors
        console.log(email);
        auth()
            .sendPasswordResetEmail(email)
            .then((r) => {
                Alert.alert(
                    'Atenção',
                    'Enviamos um email de recuperação de senha para o seguinte endereço' +
                       email, 
                );
            })
            .catch((e) => {
                console.log('RecuperarSenha: recover:' + e);
                switch (e.code) {
                    case 'auth/user-not-found':
                        Alert.alert('Erro', 'Usuário não cadastrado.');
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Erro', 'Email inválido');
                        break;
                    case 'auth/user-disabled':
                        Alert.alert('Erro', 'Usuário dasabilitado');
                }
            });
        }
    };

    return (
        <View style={styles.container}> 
            <FormInput
                style={[(errors.email && formSubmitted) && styles.inputError]}
                placeholder="Digite seu Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email"
                autoFocus={true}
            />
        <MeuButton onClick={recover}> <Text>Recuperar</Text></MeuButton>
        </View>
    );
};
export default RecuperarSenha;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});