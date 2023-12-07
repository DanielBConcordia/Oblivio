import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useUser } from '../../Contexts/UserContext';

export default function ListCuidadores() {

    const { cuidadoresList } = useUser();

    const handleCuidadorPress = (cuidador) => {
        console.log('Cuidador selecionado', cuidador)
    }




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitulo}>Cuidadores</Text>
            </View>

            <FlatList
                data={cuidadoresList}  // Alteração aqui para usar a lista de pacientes do contexto
                keyExtractor={(item) => item.id.toString()}  // Ajuste para garantir que a chave seja uma string
                renderItem={({ item }) => (

                    <TouchableOpacity onPress={() => handleCuidadorPress(item)}>
                        <View style={styles.itens}>
                            {item.fotoPerfil && item.fotoPerfil.data ? (
                                <Image
                                    style={styles.foto}
                                    source={{ uri: `data:image/jpeg;base64,${item.fotoPerfil.data.toString('base64')}` }}
                                />
                            ) : (
                                <Text style={styles.defaultImage}>Imagem não disponível</Text>
                            )}
                            <Text style={styles.textItens}>{item.nomeSocial || item.nome}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center'
    },


    itens: {

        flexDirection: 'row',
        width: '100%',
        marginLeft: 20,
        marginTop: '3%',
        height: 100,

    },


    header: {
        backgroundColor: 'purple',
        borderRadius: 1,
        height: '10%',
        width: '100%',
        justifyContent: 'center'
    },

    textTitulo: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },

    textItens: {
        marginBottom: '10%',
        backgroundColor: 'pink',
        height: '60%',
        width: '72%',
        marginBottom: 20,
        paddingLeft: 20,
        paddingTop: 12,
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },

    foto: {
        textAlign: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        right: 20,
        marginLeft: 20
    },

    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignltems: 'center',
        justifyContent: 'center',
        right: 30, bottom: 30
    },

    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignltems: 'center',
        justifyContent: 'center',
        right: 30, bottom: 50,
    },

    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        right: 30,
        marginTop: 15
    },

    dropdownOptions: {
        height: 102,
        backgroundColor: '#f1f',
        alignltems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30
    },

    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignltems: 'center',
        justifyContent: 'center',
        right: 30, bottom: 50
    },

    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        right: 30,
        marginTop: 15
    },

    dropdownOptions: {
        height: 102,
        backgroundColor: '#f1f',
        borderWidth: 6,
        borderColor: '#f1f',
        borderRadius: 6,
        marginTop: -50,
        marginRight: 20,
        paddingTop: 1,
        zIndex: 1
    },
    defaultImage: {
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        margin: '4%'
    }

});