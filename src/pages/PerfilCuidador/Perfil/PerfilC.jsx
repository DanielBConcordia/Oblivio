import React from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import {
    Container,
    PerfilContainer,
    TextName,
    Button,
    Buttonn,
    TextButton
} from './style'
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../Contexts/UserContext";
import axios from "axios";

const PerfilCuidador = () => {

    const { userData } = useUser();

    const navigation = useNavigation();

    const InfoPage = () => {
        navigation.navigate('InfoCuidador');
    }

    const MenuPage = () => {
        navigation.navigate('Menu')
    }

    const deletePerfil = () => {
        Alert.alert(
            'Excluir Perfil',
            'Deseja excluir seu perfil?',
            [
                {
                    text: 'Não',
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: async () => {
                        // Chame sua função aqui
                        try {
                            const id = userData.cuidador.id

                            const response = await axios.delete(`https://oblivio-api.vercel.app/cuidador/delete/${id}`)
                            console.log(response.data);

                            navigation.navigate('PaginaPrincipal')
                        } catch (error) {
                            console.log('Erro ao excluir perfil', error)
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Container>
            <PerfilContainer>
                <Ionicons
                    name="ios-arrow-back"
                    style={{
                        color: '#FFFFFF',
                        fontSize: 35,
                        marginTop: 43,
                        marginLeft: 20,
                    }}
                    onPress={MenuPage}
                />
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
                <TextButton onPress={deletePerfil}> Excluir Perfil </TextButton>
            </Buttonn>
        </Container>
    );
}

export default PerfilCuidador;