import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PerfilContainer,
    Scroll,
    Imagem,
    TextName,
    Title,
    TextInfo,
    StyledView
} from './style'
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../Contexts/UserContext";

const InfoPaciente = () => {

    const navigation = useNavigation();
    const { pacienteSelecionado } = useUser();

    const Voltar = () => {
        navigation.navigate('PerfilPaciente');
    }

    const Update = () => {
        navigation.navigate('UpdateInfoPaciente');
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

                    <TextName> {pacienteSelecionado && pacienteSelecionado.nome} </TextName>
                </PerfilContainer>

                <Title> Data de Nascimento </Title>
                <TextInfo> {pacienteSelecionado && pacienteSelecionado.dtNascimento} </TextInfo>

                <Title> CPF </Title>
                <TextInfo> {pacienteSelecionado && pacienteSelecionado.cpf} </TextInfo>

                <Title> Tipo Sanguíneo </Title>
                <TextInfo> {pacienteSelecionado && pacienteSelecionado.tipoSanguineo} </TextInfo>

                <Title> Responsável </Title>
                <TextInfo> {pacienteSelecionado && pacienteSelecionado.responsavelLegal} </TextInfo>

                <Title> Medicamento </Title>
                <TextInfo> TESTE </TextInfo>

                <Title> Quantidade </Title>
                <TextInfo> --- </TextInfo>

                <Title> Horário </Title>
                <TextInfo> --- </TextInfo>

                <Title> Alergia </Title>
                <TextInfo> Morango </TextInfo>

                <Title> Temperamento </Title>
                <TextInfo> {pacienteSelecionado && pacienteSelecionado.temperamento} </TextInfo>

                <Title> Descrição de como acalmar </Title>
                <TextInfo> {pacienteSelecionado && pacienteSelecionado.interacao} </TextInfo>

            </Container>
        </Scroll>
    );
}

export default InfoPaciente;