import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { useUserData } from '../../Contexts/UserContext';
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


  return (
    <Container>
        <StatusBar></StatusBar>
        <MapView style={{width: '100%', height: '100%'}} />

        <Header>
            <TouchableOpacity>
                <Text>Menu</Text>
            </TouchableOpacity>

            <Title>OBLIVIO</Title>

            <NothingPac> Nenhum paciente adicionado </NothingPac>
        </Header>

        <AddPac>
            <TextPac> + Cadastrar Paciente </TextPac>
        </AddPac>
    </Container>
  )
}