import React from 'react';
import { useState } from 'react';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
   Modal,
   Button,
} from "react-native";

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import iconVoltar from "../../../assets/iconVoltar.png";
import perfil from "../../../assets/perfil.png";
import pessaos from "../../../assets/pessoas.png";
import sair from "../../../assets/sair.png";


const Menu = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const navigation = useNavigation();

    const Voltar = () => {
      navigation.navigate('TelaInicialWP');
      setVisibleModal(true)
    }

    const Perfil = () => {
      navigation.navigate('PerfilCuidador');
    }

    const Pessoas = () => {
      navigation.navigate('');
    }

    const logout = () => {

      AsyncStorage.removeItem('@oblivioApp')
      .then(() => {
        console.log('Token removido')
      })
      .catch(error => {
        console.log('Erro ao remover token: ', error)
      })

      navigation.navigate('TelaPrincipal')
    }

    return (
        <SafeAreaView style={styles.container}>

          <View style={styles.cabecalhoMenu}>
            
            <TouchableOpacity onPress={Voltar}>
              <Image
                source={iconVoltar}
                style={{
                  tintColor: "white",
                  width: 20,
                  height: 25,
                  //marginTop: '10%',
                  left: "6%",
                  top: "100%",
                  // left: 41.36,
                }}
              ></Image>
            </TouchableOpacity>
    
            <Text style={styles.txtTitulo}> Menu </Text>
          </View>

    
          <View style={styles.opcoes}>
           <TouchableOpacity onPress={Perfil}> 
            <Image
              source={perfil}
              style={{
                tintColor: "gray",
                width: 30,
                height: 25,
                //marginTop: '15%',
                left: "6%",
                //textAlign:'center',
                //right: 20,
                // top: 53.85,
                // left: 41.36,
              }}
            ></Image>
            <Text style={styles.txtItem}> Perfil </Text>
            </TouchableOpacity>
          </View>
    
          <View style={styles.opcoes} onPress={Pessoas}>
            <Image
              source={pessaos}
              style={{
                tintColor: "gray",
                width: 30,
                height: 25,
                //marginTop: '15%',
                left: "6%",
                //textAlign:'center',
                //right: 20,
                // top: 53.85,
                // left: 41.36,
              }}
            ></Image>
            <Text style={styles.txtItem}> Pacientes </Text>
          </View>
    
          <View style={styles.logout}>
              <Button title='Logout' onPress={logout}></Button>
          </View>

          {/* <View style={styles.logout}>
            <Image
              source={sair}
              style={{
                tintColor: "gray",
                width: 30,
                height: 25,
                marginTop: '15%',
                left: "6%",
                right: 20,
                 top: 53.85,
                 left: 41.36,
              }}
            ></Image>
            <Text style={styles.txtItem}> Log out </Text>
          </View> */}
    
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "#fff",
    },
    cabecalhoMenu: {
      backgroundColor: "#5C2E7E",
      justifyContent: "center",
      height: "15%",
      //verticalAlign: 'middle',
    },
    txtTitulo: {
      textAlign: "center",
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      verticalAlign: "bottom",
    },
    opcoes: {
      marginTop: 30,
      flexDirection: "row",
      //position: 'relative',
      left: 20,
    },
    txtItem: {
      left: 20,
      textAlign: "center",
      fontSize: 18,
      fontWeight: "400",
    },
    logout: {
      flexDirection: "row",
      left: 20,
      marginTop:'90%',
    }
  });

export default Menu;
