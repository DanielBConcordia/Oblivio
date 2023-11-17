import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #8BBCCC;
`;

export const Title = styled.Text`
    margin-bottom: 20%;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
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
    color: #FFFFFF;
    font-size: 16px;
    text-align: center;
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

export const View = styled.View`
    flex-direction: row;
    padding: 17%;
`;

