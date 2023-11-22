import React from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PerfilContainer,
    TextName,
    Imagem,
    Button,
    Buttonn,
    TextButton
} from './style'
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../Contexts/UserContext";

const PerfilCuidador = () => {

    const { userData } = useUser(); 

    const navigation = useNavigation();

    const InfoPage = () => {
        navigation.navigate('InfoCuidador');
    }

    return (
        <Container>
            <PerfilContainer>
                <Ionicons
                    name="ios-menu"
                    style={{
                        color: '#FFFFFF',
                        fontSize: 35,
                        marginTop: 43,
                        marginLeft: 20, 
                    }}
                />
                <Imagem></Imagem> 
                <TextName> {userData && userData.cuidador.nome} </TextName>
            </PerfilContainer>

            <Button onPress={InfoPage}>
                <Ionicons
            name="ios-document-text"
            style={{
                color: '#4C6793',
                fontSize: 25,
                position: 'absolute',
                alignItems: 'center',
                marginLeft: 22
            }}
            />
                <TextButton> Informações de Perfil </TextButton>
            </Button>
            <Buttonn>
                <Ionicons
                name="ios-trash"
                style={{
                    color: '#4C6793',
                    fontSize: 25,
                    position: 'absolute',
                    alignItems: 'center',
                    marginLeft: 22
                }}
                />
                <TextButton> Excluir Perfil </TextButton>
            </Buttonn>
        </Container>
    );
}

export default PerfilCuidador;