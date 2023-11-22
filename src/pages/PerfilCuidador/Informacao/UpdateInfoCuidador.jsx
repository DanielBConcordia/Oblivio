import React from "react-native";
import { ScrollView } from "react-native";
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

const UpdateInfoCuidador = () => {

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
                placeholder="06506-045"
            />
            <FormInput
                placeholder="SP"
            />
            <FormInput
                placeholder="Santana de Parnaíba"
            />
            <FormInput
                placeholder="Brilhante"
            />
            <FormInput
                placeholder="502"
            />
            <FormInput
                placeholder="Casa 5"
            />
            <FormInput
                placeholder="Em frente ao mercado"
            />
            <FormInput
                placeholder="11 96542-5846"
            />
            <FormInput
                placeholder="11 94561-5987"
            />
            <FormInput
                placeholder="BlaBla"
            />
            <FormInput
                placeholder="blabla@gmail.com"
            />
            <FormInput
                placeholder="***877****"
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

export default UpdateInfoCuidador;