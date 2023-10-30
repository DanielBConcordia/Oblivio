import React from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    PerfilContainer,
    Scroll,
    Imagem,
    TextName,
    Title,
    TextInfo,
} from './style'
import { Text } from "react-native";

const InfoPaciente = () => {

    const navigation = useNavigation();

    const Voltar = () => {
        navigation.navigate('PerfilCuidador');
    }

    return (
       <Scroll>
       <Container>
            <PerfilContainer>
               <Imagem></Imagem> 
               <TextName onPress={Voltar}> Nome da Pessoa </TextName>
           </PerfilContainer>
    
            <Title> Data de Nascimento </Title>
                <TextInfo> 19/06/2000 </TextInfo>

            <Title> CPF </Title>
                <TextInfo> 97845613-12 </TextInfo>

            <Title> Tipo Sanguíneo </Title>
                <TextInfo> AB+ </TextInfo>

            <Title> Responsável </Title>
                <TextInfo> José da Silva </TextInfo>

            <Title> Medicamento </Title>
                <TextInfo> --- </TextInfo>

            <Title> Quantidade </Title>
                <TextInfo> --- </TextInfo>

            <Title> Horário </Title>
                <TextInfo> --- </TextInfo>
            
            <Title> Alergia </Title>
             <TextInfo> Morango </TextInfo>

            <Title> Temperamento </Title>
                <TextInfo> --- </TextInfo>

            <Title> Descrição de como acalmar </Title>
                <TextInfo> --- </TextInfo>

        </Container>
       </Scroll>
    );
}

export default InfoPaciente;