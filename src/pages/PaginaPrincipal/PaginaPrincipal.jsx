import React from "react-native";
import { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Container,
    PContainer,
    Button,
    Buttonn,
    TextButton,
    TextButtonn,
} from './style';

import { useUser } from "../../Contexts/UserContext";

import Logo from '../../../assets/logo_obv.png';

const TelaPrincipal = () => {

    const navigation = useNavigation();
    const { listPaciente } = useUser();

    const CadPage = () => {
        navigation.navigate('CadastroCuidador');
    }

    const LoginPage = () => {
        navigation.navigate('Login');
    }

    useEffect(() => {
        AsyncStorage.getItem('@oblivioApp')
        .then(token => {
          if (token) {
            if (listPaciente.lenght > 0) {
                navigation.navigate('TelaInicialWP')
            } else {
                navigation.navigate('TelaInicial')
            }


          } else {
            console.log('Usuário não logado, fazer login')
            navigation.navigate("PaginaPrincipal")
          }
        })
      })

    return (

        
        <Container>
            <PContainer>
            <Image
                source={Logo}
                style={{
                  width: "50%",
                  height: "70%",
                  marginHorizontal: 100,
                   top: "15%"
                }} />
            </PContainer>

            <Button onPress={CadPage}>
                <TextButton> Cadastre-se </TextButton>
            </Button>

            <Buttonn onPress={LoginPage}>
                <TextButtonn> Login </TextButtonn>
            </Buttonn>
           
            
                
        </Container>
    );
}

export default TelaPrincipal;