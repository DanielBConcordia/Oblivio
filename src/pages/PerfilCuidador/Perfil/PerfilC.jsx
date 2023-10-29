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


const PerfilCuidador = () => {

    const navigation = useNavigation();

    const InfoPage = () => {
        navigation.navigate('InfoCuidador');
    }

    return (
        <Container>
            <PerfilContainer>
                <Imagem></Imagem> 
                <TextName> Nome da Pessoa </TextName>
            </PerfilContainer>
            <Button onPress={InfoPage}>
                <TextButton> Informações de Perfil </TextButton>
            </Button>
            <Buttonn>
                <TextButton> Excluir Perfil </TextButton>
            </Buttonn>
        </Container>
    );
}

export default PerfilCuidador;