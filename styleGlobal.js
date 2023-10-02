import styled from 'styled-components/native';

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

export const Container = styled.View`
    flex: 1;
    background-color: #4C6798;
    justify-content: center;
`;

export const Form = styled.View`
    background-color: #FFF;
    flex: 1;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px; 
    padding: 20px;
    padding-top: 35px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #FFF;
    text-align: center;
    margin-top: 10%;
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    color: #FFF;
    text-align: center;
    margin-bottom:10%;
`;

export const NextButton = styled.TouchableOpacity`
    width: 100%;
    height: 8%;
    background-color: #FFF;
    border: solid 2px #4C6793;
    border-radius: 10px;
    margin-top: 15%;
    display: flex;
    justify-content: space-around;
`;

export const TextButton = styled.Text`
    color: #4C6793;
    font-size: 16px;
    text-align: center;
`;

export const NextButon = styled.TouchableOpacity`
    width: 50%;
    height: 8%;
    background-color: #FFF;
    border: solid 2px #4C6793;
    border-radius: 10px;
    margin-top: 15%;
    display: flex;
    justify-content: space-around;
`;
export const VoltButton = styled.TouchableOpacity`
    width: 50%;
    height: 8%;
    background-color: #FFF;
    border: solid 2px #4C6793;
    border-radius: 10px;
    margin-top: 15%;
    display: flex;
    justify-content: space-around;

`;

export const Buttons = styled.View`
    width: 100px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

