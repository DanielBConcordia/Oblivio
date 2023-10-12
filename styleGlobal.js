import styled from 'styled-components/native';

// Inputs
export const FormInput = styled.TextInput`
    height: 30px;
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

// Container de Cuidador
export const Container = styled.View`
    flex: 1;
    background-color: #4C6798;
    justify-content: center;
`;

// Container de Paciente
export const ContainerP = styled.View`
    flex: 1;
    background-color: #5C2E7E;
    justify-content: center;
`;

//Form de Cuidador e Paciente
export const Form = styled.View`
    background-color: #FFFFFF;
    flex: 1;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    padding: 20px;
    padding-top: 35px;
`;
 
// Titulo de Cuidador
export const Title = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 20%;
`;

// Titulo de Paciente
export const TitleP = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 20%;
    margin-bottom: 20%;
`;

// SubTitle de Cuidador
export const SubTitle = styled.Text`
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 15%;
`;

// Button de Cuidador
export const NextButton = styled.TouchableOpacity`
    width: 100%;
    height: 8%;
    background-color: #FFFFFF;
    border: solid 2px #4C6793;
    border-radius: 10px;
    margin-top: 15%;
    display: flex;
    justify-content: space-around;
`;

//Button de Paciente
export const NextButtonP = styled.TouchableOpacity`
    width: 100%;
    height: 8%;
    background-color: #FFFFFF;
    border: solid 2px #5C2E7E;
    border-radius: 10px;
    margin-top: 15%;
    display: flex;
    justify-content: space-around;
`;

// Text de Cuidador
export const TextButton = styled.Text`
    color: #4C6793;
    font-size: 16px;
    text-align: center;
`;

// Text de Paciente
export const TextButtonP = styled.Text`
    color: #5C2E7E;
    font-size: 16px;
    text-align: center;
`;