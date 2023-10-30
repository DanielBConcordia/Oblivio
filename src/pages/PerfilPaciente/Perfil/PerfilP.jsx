import React from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PerfilContainer, 
    Imagem,
    TextName,
    Button,
    Buttonn,
    TextButton,
    ContainerImage,
} from './style'



const PerfilPaciente = () => {

    const navigation = useNavigation();

    const InfoPage = () => {
        navigation.navigate('InfoPaciente');
    }

    const Historico = () => {
        navigation.navigate('HistPaciente')
    }

    const Cuidadores = () => {
        navigation.navigate('ListCuidadores')
    }


    return (
        <Container>
           <PerfilContainer>
                    <Imagem></Imagem>
                    <TextName> Nome do Paciente </TextName>
           </PerfilContainer>

           <Button onPress={InfoPage}>
                <TextButton> Informações do Paciente </TextButton>
           </Button>
           <Buttonn>
                <TextButton> Histórico </TextButton>
           </Buttonn>
           <Buttonn>
                <TextButton> Cuidadores </TextButton>
           </Buttonn>
           <Buttonn>
                <TextButton> Adicionar Cuidador </TextButton>
           </Buttonn>
           <Buttonn>
                <TextButton> Excluir Paciente </TextButton>
           </Buttonn>

        </Container>
    );
}

export default PerfilPaciente;