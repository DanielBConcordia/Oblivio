import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { useUser } from '../../Contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Header,
    Title,
    HelloText,
    NothingPac,
    AddPac,
    TextPac
} from './style'

export default function TelaInicial() {

    const { userData } = useUser();
    const navigation = useNavigation();

    const cadPaciente = () => {
        navigation.navigate("CadastroPaciente")
    }



    return (
        <Container>
            <StatusBar></StatusBar>
            <MapView style={{ width: '100%', height: '100%' }} />

            <Header>
                <TouchableOpacity>
                    <Text>Menu</Text>
                </TouchableOpacity>

                <Title>OBLIVIO</Title>
                <HelloText>Olá {userData && userData.cuidador.nomeSocial}</HelloText>

                <NothingPac> Nenhum paciente adicionado </NothingPac>
            </Header>

            <AddPac onPress={cadPaciente}>
                <TextPac> + Cadastrar Paciente </TextPac>
            </AddPac>
        </Container>
    )
}