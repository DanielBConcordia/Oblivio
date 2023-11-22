import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { useUser } from '../../Contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Header,
    Title,
    HelloText,
} from './style';
import menu from '../../../assets/menu.png'

export default function TelaInicialWP() {

    const { userData } = useUser();
    const navigation = useNavigation();
    
    console.log(userData)

    const PgMenu = () => {
        navigation.navigate('Menu')
     
    }

    return (
        <Container>
            <StatusBar></StatusBar>
            <MapView style={{ width: '100%', height: '100%' }} />

            
            <Header>
                <TouchableOpacity onPress={PgMenu}>
                    <Image source={menu} style={{
                        tintColor: 'white',
                        width: 20,
                        height: 25,
                        marginTop: '10%',
                        left: '6%',
                        // top: 53.85,
                        // left: 41.36,
                    }}>
                    </Image>
                </TouchableOpacity>

                <Title> OBLIVIO </Title>
                <HelloText> Olá {userData && userData.cuidador.nomeSocial}</HelloText>
            </Header>
        </Container>
    )
}