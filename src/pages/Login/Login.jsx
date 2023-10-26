import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dadosUsuario, setUserData] = useState(null); // Inicialize como null

    useEffect(() => {
        // O código dentro deste useEffect será executado quando userData for definido.
        if (dadosUsuario) {
            console.log(dadosUsuario); // Agora você pode acessar os dados do usuário.
        }
    }, [dadosUsuario]); // Monitora as alterações em userData

    async function submitSignIn() {
        let body = {
            email: email,
            senha: senha
        }

        try {
            const response = await axios.post('https://oblivio-api.vercel.app/cuidador/login', body);
            const data = response.data;

            setUserData(data);

            navigation.navigate("TelaInicial");
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    }

    return (
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={(text) => setSenha(text)}
                secureTextEntry={true}
            />
            <Button title="Entrar" onPress={submitSignIn} />
        </View>
    );
};

export default Login;
