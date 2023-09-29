import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
//
import menu from '../../../assets/menu.png';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar></StatusBar>
            <MapView style={styles.map} />
            {/* cabecalho */}
            <View style={styles.cabecalho}>
                <TouchableOpacity>
                    <Image source={menu} style={{
                        tintColor: 'white',
                        width: 20,
                        height: 25,
                        marginTop: '15%',
                        left: '6%',
                        // top: 53.85,
                        // left: 41.36,
                    }}>
                    </Image>
                </TouchableOpacity>

                <Text style={styles.texto}> OBLIVIO </Text>
                <Text style={styles.textoOla}> Olá Maria Eduarda </Text>
                <Text style={styles.textotextoN}> Nenhum paciente adicionado </Text>
            </View>

            <View style={styles.adicionarPaciente}>
                <Text style={styles.txtPaciente}> Cadastrar paciente </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    container: {
        height: '100%',
    },
    cabecalho: {
        // // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        height: '30%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#5C2E7E',
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        zIndex: 100
    },
    texto: {
        color: 'white',
        // width: 86,
        // height: 38,
        // left: 154,
        textAlign: 'center',
        fontSize: 20,
        marginTop: '-5%',
        //marginBottom: 20
    },
    map: {
        width: '100%',
        height: '100%'
    },
    textoOla: {
        color: 'white',
        //width: 247,
        //height: 38,
        top: '12%',
        textAlign: 'center',
        fontSize: 20,
    },
    textotextoN: {
        color: '#8BBCCC',
        textAlign: 'center',
        top: '20%',
        // width: 247,
        // height: 25,
        // top: 50,
        // left: 73
    },
    adicionarPaciente: {
        backgroundColor: 'white',

        zIndex: 100,
    
        position: 'absolute',
    
        alignSelf: 'center',
    
        justifyContent: 'center',
    
        alignContent: 'center',
    
        width: '80%',
    
        borderBottomLeftRadius: 20,
    
        borderBottomRightRadius: 20,
    
        borderTopEndRadius: 20,
    
        borderTopStartRadius: 20,
    
    //    height: 30,
    
        marginTop:'60%',
    
        position: 'absolute',
    },
    txtPaciente: {
        color: '#4C6793',
        textAlign: 'center',
        fontSize: 20,
        height: 30
    },
    conteudo: {
        marginTop: '20%',
    },

});



export default App;