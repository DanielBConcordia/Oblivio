import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import auth from '../../utils/firebaseConfig';
import {
    Container,
    Title,
    Button,
    TextButton,
    Campo,
    InputContainer
} from "./style";


const RecuperarSenha = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
 
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
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Container>
        <Title> Recuperar Senha </Title>

        <InputContainer>
        <View>
            <Campo
              style={[(errors.email && formSubmitted) && styles.inputError]}
              placeholder="Digite seu Email"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => senhaInputRef.current.focus()}
            />
        <Button onClick={recover}>
        <TextButton> Recuperar </TextButton>
        </Button>
        </View>
        </InputContainer>

        </Container>
        </TouchableWithoutFeedback>
        
    );
};
export default RecuperarSenha;