import React from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PerfilContainer,
    Imagem,
    TextName,
    Title,
    TextInfo,
} from './style'


const InfoCuidador = () => {

    const navigation = useNavigation();

    const Voltar = () => {
        navigation.navigate('PerfilCuidador');
    }

    return (
        <Container>
            <PerfilContainer>
                <Imagem></Imagem> 
                <TextName onPress={Voltar}> Nome da Pessoa </TextName>
            </PerfilContainer>
            
            <Title> Data de Nascimento </Title>
            <TextInfo> 19/06/2000</TextInfo>

            <Title> CPF </Title>
            <TextInfo> 97845613-12 </TextInfo>

            <Title> CEP </Title>
            <TextInfo> 06506-045 </TextInfo>

            <Title> UF </Title>
            <TextInfo> SP </TextInfo>

            <Title> Cidade </Title>
            <TextInfo> Santana de Parnaíba </TextInfo>

            <Title> Rua </Title>
            <TextInfo> Brilhante </TextInfo>

            <Title> Número da Casa </Title>
            <TextInfo> 502 </TextInfo>

            <Title> Complemento </Title>
            <TextInfo> Casa 5 </TextInfo>

            <Title> Ponto de referência </Title>
            <TextInfo> Em frente ao mercado </TextInfo>

            <Title> Telefone </Title>
            <TextInfo> 11 96542-5846 </TextInfo>

            <Title> Telefone reserva </Title>
            <TextInfo> 11 94561-5987 </TextInfo>

            <Title> Apelido </Title>
            <TextInfo> BlaBla </TextInfo>

            <Title> E-mail </Title>
            <TextInfo> blabla@gmail.com </TextInfo>

            <Title> Senha </Title>
            <TextInfo> 64587798 </TextInfo>

        </Container>
    );
}

export default InfoCuidador;