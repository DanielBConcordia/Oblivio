import styled from 'styled-components/native';

// ScrollView
export const Scroll = styled.ScrollView`
    height: 100%;
    background-color: #ffffff;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    margin-bottom: 55%;
`;

export const PerfilContainer = styled.View`
    width: 100%;
    height: 35%;
    background-color: #5C2E7E;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

// Foto de Perfil
export const Imagem = styled.View`
    background-color: #ffffff;
    width: 30%;
    height: 40%;
    border-radius: 100px; 
    left: 34%;
    // justify-content: center;
`;

// Nome da Pessoa
export const TextName = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    top: 15px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #a2a2a2;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
`;

// Informações da Pessoa
export const TextInfo = styled.Text`
    font-size: 18px;
    color: #000000;
    margin-left: 5%;
    margin-right: 5%;
`;

// View para os icones
export const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 22px;
    margin-left: 22px;
    margin-top: 43px;    
`;

// Inputs
export const FormInput = styled.TextInput`
    width: 89%;
    height: 30px;
    margin-left: 5%;
    margin-right: 5%;
    border-color: #7f7f7f;
    border-width: 0;
    margin-bottom: 1px;
    margin-top: 5%;
    border-bottom-width: 1px;
    :active {
        border: none;
    };
    padding-bottom: 2px;
    padding-left: 10px;
    placeholder-text-color: #7f7f7f      
`;

// Tela de Update
export const PerfilContainerUp = styled.View`
    widht: 100%
    height: 30%;
    background-color: #5C2E7E;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

// View para os botões
export const StyledViewButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 22px;
    margin-left: 22px;
    margin-top: 5%;
`;

// Botão
export const Update = styled.TouchableOpacity`
    width: 45%;
    height: 35px;
    background-color: #FFFFFF;
    border: solid 2px #5C2E7E;
    border-radius: 10px;
    margin-top: 5%;
    margin-bottom: 15%;
    display: flex;
    justify-content: space-around;
`;

// Texto do botão
export const TextButton = styled.Text`
    color: #5C2E7E;
    font-size: 16px;
    text-align: center;
`;