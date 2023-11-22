import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Touchable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useUser } from "../../Contexts/UserContext";
import {
  Container,
  Title,
  Campo,
  Button,
  TextButton,
  ButtonEsSenha,
  TextEsSenha,
  ButtonCad,
  TextCad,
  InputContainer,
} from "./style";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [userData, setUserData] = useState(null); // Inicialize como null

  const { submitLogin } = useUser();

  const switchPage = () => {
    navigation.navigate("CadastroCuidador");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  async function submitSignIn() {
    let body = {
      email: email,
      senha: senha,
    };

    try {
      const response = await axios.post(
        "https://oblivio-api.vercel.app/cuidador/login",
        body
      );
      const userData = response.data;
      submitLogin(userData, listPaciente);

    const caregiverId = userData.cuidador.id;
    const patientsResponse = await axios.get(
      `https://oblivio-api.vercel.app/paciente/caregiver/${caregiverId}/patients`
    );

    const listPaciente = patientsResponse.data;

    if(listPaciente.length > 0) {
      navigation.navigate("TelaInicialWP");
    } else {
      navigation.navigate("TelaInicial");
    }

    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Container>
        <Title> Login </Title>

        <InputContainer>
          <View
            style={{
              paddingHorizontal: 17,
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="mail-outline"
              style={{
                color: "#000000",
                fontSize: 22,
                marginTop: 20,
              }}
            />

            <Campo
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => senhaInputRef.current.focus()}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 17,
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="lock-closed-outline"
              style={{
                color: "#000000",
                fontSize: 22,
                marginLeft: 70,
                marginTop: 20,
              }}
            />
            <Campo
              placeholder="Senha"
              value={senha}
              secureTextEntry={!showPassword} // Altera o modo de exibição da senha com base no estado showPassword
              onChangeText={(text) => setSenha(text)}
              onSubmitEditing={submitSignIn}
              style={{}}
            />

            <TouchableWithoutFeedback onPress={toggleShowPassword}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                style={{
                  color: "#000000",
                  fontSize: 22,
                  marginRight: 50,
                  marginTop: 20,
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </InputContainer>

        <ButtonEsSenha>
          <TextEsSenha>Esqueci minha senha</TextEsSenha>
        </ButtonEsSenha>

        <Button onPress={submitSignIn}>
          <TextButton> Entrar </TextButton>
        </Button>

        <ButtonCad onPress={switchPage}>
          <TextCad>Não possui uma conta?</TextCad>
          <TextCad>Cadastre-se</TextCad>
        </ButtonCad>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;