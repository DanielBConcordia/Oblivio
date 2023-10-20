import React, { useState } from "react";
import { View , ActivityIndicator, Text } from 'react-native';
import { useFormContext } from "../../Contexts/FormContext";
import {
    Container, 
    Title, 
    Input, 
    Button, 
    TextButton, 
    ButtonEsSenha,
    TextEsSenha,
    ButtonCad,
    TextCad
} from './style'

const Login = () =>{

    const { signIn } = useFormContext();

    async function SubmitSingnIn(){
        await signIn(email, senha)
    }

   
    return(
        <Container>
            <Title> Login </Title>

            <Input 
                placeholder="Email"
            />
            <Input 
                placeholder="Senha"
            />

            <Button>
                <TextButton> Entrar </TextButton>
            </Button>

            <ButtonEsSenha>
                <TextEsSenha>
                    Esqueci minha senha
                </TextEsSenha>
            </ButtonEsSenha>

            <ButtonCad>
                <TextCad>
                    Não possui uma conta?
                    Cadastre-se
                </TextCad>
            </ButtonCad>

        </Container>

    )
}

export default Login;