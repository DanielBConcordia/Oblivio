import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const PContainer = styled.View`
    width: 100%;
    height: 50%;
    background-color: #5C2E7E;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 8%;
    background-color: #FFFFFF;
    border: solid 2px #5C2E7E;
    border-radius: 10px;
    border-radius: 15px;
    margin-top: 35%;
    margin-left: 5%;
    display: flex;
    justify-content: space-around;
`;

export const Buttonn = styled.TouchableOpacity`
    width: 90%;
    height: 8%;
    background-color: #5C2E7E;
    border-radius: 15px;
    margin-top: 10%;
    margin-left: 5%;
    display: flex;
    justify-content: space-around;
`;

export const TextButton = styled.Text`
    color: #5C2E7E;
    font-size: 18px;
    text-align: center;
`;

export const TextButtonn = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    text-align: center;
`;