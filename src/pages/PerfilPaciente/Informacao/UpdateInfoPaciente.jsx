import React from "react-native";
import {
    Container,
    PerfilContainer,
    Imagem, 
    Scroll,
    PerfilContainerUp,
    FormInput, 
    TextButton,
    Update,
    StyledViewButton,
} from './style';
import { Ionicons } from "@expo/vector-icons";

const UpdateInfoPaciente = () => {

    return (
        <Scroll>
            <Container>
                <PerfilContainerUp>
                <StyledView>
                        <Ionicons
                            name="ios-arrow-back" 
                            style={{
                                color: '#FFFFFF',
                                fontSize: 35,
                            }}
                            onPress={Voltar}
                            />
                </StyledView>
                
                    <Imagem></Imagem>
                </PerfilContainerUp>

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
            
            <StyledViewButton>
                    <Update>
                        <TextButton> SALVAR </TextButton>
                    </Update>

                    <Update>
                        <TextButton> CANCELAR </TextButton>
                    </Update>
            </StyledViewButton>

        </Container>
        </Scroll>
    );
}

export default UpdateInfoPaciente;