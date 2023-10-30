import React, { useState } from 'react';
import { View, StyleSheet, FormInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { 
    FormInput,
    Title,
    SubTitle,
    NextButton,
    TextButton
} from '../../../../styleGlobal';

const RecuperarSenha = () => {
    const [email, setEmail] = useState('');

    const recover = () => {
    {/* ver se o email está vazio ou não*/}
      if(email !== ''){
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
                console.log('RecuperarSenha: erro em recover' + e);
                switch (e.code) {
                    case 'auth/user-not-found':
                        Alert.alert('Erro', 'Usuário não cadastrado.');
                        break;
                    case 'auth/wrong-password':
                        Alert.alert('Erro', 'Erro na senha.');
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Erro', 'Email inválido');
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
        <MeuButton texto="Recuperar" onClick={recover} />
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