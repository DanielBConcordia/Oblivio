import React from "react-native";
import { ScrollView } from "react-native";
import {
    Container,
    PerfilContainer,
    Imagem,
    FormInput
} from './style';

const UpdateInfoPaciente = () => {

    return (
        <ScrollView>
            <Container>
                <PerfilContainer>
                    <Imagem></Imagem> 
                </PerfilContainer>

            <FormInput
                placeholder="Nome da Pessoa"
            />
            <FormInput
                placeholder="19/06/2000"
            />
            <FormInput
                placeholder="97845613-12"
            />
            <FormInput
                placeholder="AB+"
            />
            <FormInput
                placeholder="José da Silva"
            />
            <FormInput
                placeholder="---"
            />
            <FormInput
                placeholder="---"
            />
            <FormInput
                placeholder="---"
            />
            <FormInput
                placeholder="Morango"
            />
            <FormInput
                placeholder="---"
            />
            <FormInput
                placeholder="---"
            />
            
    {/* Adicionar botões */}

        </Container>
        </ScrollView>
    );
}

export default UpdateInfoPaciente;