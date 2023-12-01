import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { useUser } from '../../Contexts/UserContext';

export default function ListPaciente() {
    const { listPaciente } = useUser();

    const dropdownOptions = ['Promover', 'Excluir'];
    const onSelect = (index, value) => {
        if (index === 0) {
            console.log('Promover');
        } else if (index === 1) {
            console.log('Excluir');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitulo}>Pacientes</Text>
            </View>

            <FlatList
                data={listPaciente}  // Alteração aqui para usar a lista de pacientes do contexto
                keyExtractor={(item) => item.id.toString()}  // Ajuste para garantir que a chave seja uma string
                renderItem={({ item }) => (
                    <View style={styles.itens}>
                        <Image
                            style={styles.foto}
                            source={{ uri: item.foto }}  // Use a propriedade correta da imagem do cuidador
                        />
                        
                        <Text style={styles.textItens}>{item.nome}</Text>

                        <ModalDropdown
                            options={dropdownOptions}
                            defaultIndex={null}
                            onSelect={(index, value) => onSelect(index, value)}
                            renderSeparator={() => <Divider width={1} color='gray' />}
                            dropdownStyle={styles.dropdownOptions}
                            dropdownTextStyle={{ fontSize: 16, paddingLeft: 9, paddingRight: 10, color: '#F00' }}
                        >
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/?size=64&id=rEgThx900s10&format=png',
                                }}
                                style={styles.floatingButtonStyle}
                            />
                        </ModalDropdown>
                    </View>
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
        alignltems: 'center',
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
    }

});