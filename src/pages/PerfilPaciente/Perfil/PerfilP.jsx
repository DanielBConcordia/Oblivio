import React, { TouchableOpacity } from "react-native";
import axios from "axios";
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
import { useUser } from "../../../Contexts/UserContext";

const PerfilPaciente = () => {

    const navigation = useNavigation();
    const { pacienteSelecionado, updateCuidadoresList } = useUser();

    const InfoPage = () => {
        navigation.navigate('InfoPaciente');
    }

    // const Historico = () => {
    //     navigation.navigate('HistPaciente')
    // }

    const Cuidadores = async () => {

        const patientId = pacienteSelecionado.id

        try {
            const response = await axios.get(`https://oblivio-api.vercel.app/caregiverpacs/caregivers/${patientId}`);
            const cuidadores = response.data;

            const detailsPromises = cuidadores.map(async (cuidador) => {
                const detailsResponse = await axios.get(`https://oblivio-api.vercel.app/cuidador/listId/${cuidador.idCuidador}`);
                return detailsResponse.data;
            });

            const cuidadoresList = await Promise.all(detailsPromises);

            updateCuidadoresList(cuidadoresList);

            navigation.navigate('ListCuidadores');


        } catch (error) {
            console.log('Erro ao buscar', error);
        }
    }

    const qrCodePage = () => {
        navigation.navigate('QrCodePage')
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

                    <TouchableOpacity onPres={qrCodePage}>
                        <Ionicons
                            name="ios-qr-code"
                            style={{
                                color: '#FFFFFF',
                                fontSize: 35
                            }}
                        />
                    </TouchableOpacity>
                </StyledView>

                <TextName> {pacienteSelecionado && pacienteSelecionado.nome} </TextName>
            </PerfilContainer>

            <Button onPress={InfoPage}>
                <Ionicons
                    name="ios-document-text"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 20
                    }}
                />
                <TextButton> Informações do Paciente </TextButton>
            </Button>

            <Buttonn onPress={Cuidadores}>
                <Ionicons
                    name="md-people"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 20
                    }}
                />
                <TextButton> Cuidadores </TextButton>
            </Buttonn>

            {/* <Buttonn onPress={Historico}>
                <Ionicons
                    name="md-map"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 20
                    }}
                />
                <TextButton> Histórico </TextButton>
            </Buttonn>


            <Buttonn>
                <Ionicons
                    name="md-person-add"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 20
                    }}
                />
                <TextButton> Adicionar Cuidador </TextButton>
            </Buttonn> */}

            <Buttonn>
                <Ionicons
                    name="ios-trash"
                    style={{
                        color: '#4C6793',
                        fontSize: 25,
                        position: 'absolute',
                        alignItems: 'center',
                        marginLeft: 20
                    }}
                />
                <TextButton> Excluir Paciente </TextButton>
            </Buttonn>

        </Container>
    );
}

export default PerfilPaciente;