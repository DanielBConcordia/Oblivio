import styled from 'styled-components/native';
//import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #8BBCCC;
`;

export const InputContainer = styled.View`
    width: 90%;
    height: 150px;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 15px;
    elevation: 3;
`;

export const Title = styled.Text`
    margin-bottom: 20%;
    color: #FFFFFF;
    font-size: 50px;
    font-weight: bold;
`;

export const Campo = styled.TextInput`
    width: 80%;
    margin-top: 14px; 
    margin-left: 15px;
    padding: 7px;
    font-size: 12px;
    border-color: #000000;
    border-bottom-width: 1px;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    background-color: #5C2E7E;
    border-radius: 15px;
    margin-top: 20px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: #ffffff;
    font-size: 20px;
`;

export const ButtonEsSenha = styled.TouchableOpacity`
    width: 100%;
    margin-top: 10px;
    text-align: right;
    margin-right: 20%;
    margin-top: 3px;
    margin-bottom: 8px;
`;

export const TextEsSenha = styled.Text`
    color: #ffffff;
    font-size: 15px;
    text-align: right;
    color: #4C6793;
`;

export const ButtonCad = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
`;

export const TextCad = styled.Text`
    color: #ffffff;
    font-size: 16px;
    color: #5C2E7E;
    margin-bottom: 10px;
    font-weight: bold;    
`;

export const View = styled.View`
    flex-direction: row;
    padding: 17%;
`;

//export const Gradientee = styled(LinearGradient)`
 //background-color: {['#8BBCCC', '#4C6793']};
 //width: 100%;
 //height= 45%;
//`