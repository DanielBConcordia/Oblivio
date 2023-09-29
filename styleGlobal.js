import styled from 'styled-components/native';

export const FormInput = styled.TextInput`
    height: 30px;
    border-color: gray;
    border-width: 0;
    margin-bottom: 1px;
    margin-top: 10px;
    border-bottom-width: 1px;
    :active {
        border: none;
    };
    padding-bottom: 2px;
    padding-left: 10px;
      
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
    padding: 15px;
    padding-top: 35px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #FFF;
    text-align: center;
    margin-top: 8%;
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    color: #FFF;
    text-align: center;
    margin-bottom: 25px;
`;

export const NextButton = styled.TouchableOpacity`
    width: 324px;
    height: 25px;
    flex-shrink: 0;
    border-color: #4C6793;
    background-color: #FFF;
    border: solid 1px
    border-radius: 5px;
    margin-top: 5%;
`;

export const TextButton = styled.Text`
    color: #4C6793;
    font-size: 12px;
    text-align: center;
`;
