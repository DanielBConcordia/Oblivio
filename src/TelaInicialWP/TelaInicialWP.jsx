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

export default function TelaInicialWP() {

    const { userData } = useUser();
    const navigation = useNavigation();




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
            </Header>
        </Container>
    )
}