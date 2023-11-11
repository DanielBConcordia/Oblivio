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
    StyledView
} from './style';
import { Ionicons } from "@expo/vector-icons";

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
                <StyledView>
                        <Ionicons
                            name="ios-arrow-back"
                            style={{
                                color: '#FFFFFF',
                                fontSize: 35
                            }}
                        />

                        <Ionicons
                            name="ios-qr-code"
                            style={{
                                color: '#FFFFFF',
                                fontSize: 35
                            }}
                        />
                </StyledView>

                    <Imagem></Imagem>
                    <TextName> Nome do Paciente </TextName>
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
                <TextButton> Informações do Paciente </TextButton>
           </Button>

           <Buttonn onPress={Historico}>
                <Ionicons
                    name="md-map"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 22
                    }}
                />
                <TextButton> Histórico </TextButton>
           </Buttonn>

           <Buttonn onPress={Cuidadores}>
                <Ionicons
                    name="md-people"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 22
                    }}
                />
                <TextButton> Cuidadores </TextButton>
           </Buttonn>

           <Buttonn>
                <Ionicons
                    name="md-person-add"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 22
                    }}
                />
                <TextButton> Adicionar Cuidador </TextButton>
           </Buttonn>

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
                <TextButton> Excluir Paciente </TextButton>
           </Buttonn>

        </Container>
    );
}

export default PerfilPaciente;