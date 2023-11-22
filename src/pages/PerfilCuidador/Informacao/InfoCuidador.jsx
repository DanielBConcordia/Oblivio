import React from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PerfilContainer,
    Imagem,
    TextName,
    Title,
    TextInfo,
    Scroll,
    StyledView
} from './style';
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../Contexts/UserContext";

const InfoCuidador = () => {

    const { userData } = useUser();

    const navigation = useNavigation();

    const Voltar = () => {
        navigation.navigate('PerfilCuidador');
    }
    const Update = () => {
        navigation.navigate('UpdateInfoCuidador');
    }

    return (
        <Scroll>
            <Container>
                <PerfilContainer>
                    <StyledView>
                        <Ionicons
                            name="ios-arrow-back" 
                            style={{
                                color: '#FFFFFF',
                                fontSize: 35,
                            }}
                            onPress={Voltar}
                            />

                        <Ionicons
                            name="ios-create" 
                            style={{
                                color: '#FFFFFF',
                                fontSize: 35,
                            }}
                            onPress={Update}
                            />  
                    </StyledView>
                <Imagem></Imagem> 
                <TextName> {userData && userData.cuidador.nome} </TextName>
            </PerfilContainer>
            
            <Title> Data de Nascimento </Title>
            <TextInfo> {userData && userData.cuidador.dtNascimento} </TextInfo>

            <Title> CPF </Title>
            <TextInfo> {userData && userData.cuidador.cpf} </TextInfo>

            <Title> CEP </Title>
            <TextInfo> {userData && userData.cuidador.cep} </TextInfo>

            <Title> UF </Title>
            <TextInfo> {userData && userData.cuidador.uf} </TextInfo>

            <Title> Cidade </Title>
            <TextInfo> {userData && userData.cuidador.cidade} </TextInfo>

            <Title> Rua </Title>
            <TextInfo> {userData && userData.cuidador.rua} </TextInfo>

            <Title> Número da Casa </Title>
            <TextInfo> {userData && userData.cuidador.numeroCasa} </TextInfo>

            <Title> Complemento </Title>
            <TextInfo> {userData && userData.cuidador.complementoCasa} </TextInfo>

            <Title> Ponto de referência </Title>
            <TextInfo> {userData && userData.cuidador.pontoReferencia} </TextInfo>

            <Title> Telefone </Title>
            <TextInfo> {userData && userData.cuidador.telefone} </TextInfo>

            <Title> Telefone reserva </Title>
            <TextInfo> {userData && userData.cuidador.telefoneReserva} </TextInfo>

            <Title> Apelido </Title>
            <TextInfo> {userData && userData.cuidador.nomeSocial} </TextInfo>

            <Title> E-mail </Title>
            <TextInfo> {userData && userData.cuidador.email} </TextInfo>

            <Title> Senha </Title>
            <TextInfo> {userData && userData.cuidador.senha} </TextInfo>

        </Container>
        </Scroll>
    );
}

export default InfoCuidador;