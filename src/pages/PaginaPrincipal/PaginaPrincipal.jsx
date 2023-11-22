import React from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PContainer,
    Button,
    Buttonn,
    TextButton,
    TextButtonn,
} from './style';

import Logo from '../../../assets/logo_obv.png';

const TelaPrincipal = () => {

    const navigation = useNavigation();

    const CadPage = () => {
        navigation.navigate('CadastroCuidador');
    }

    const LoginPage = () => {
        navigation.navigate('Login');
    }

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