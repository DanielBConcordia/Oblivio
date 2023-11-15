import styled from 'styled-components/native';

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
    height: 30%;
    background-color: #5C2E7E;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Imagem = styled.View`
    background-color: #000000;
    width: 50%;
    height: 40%;
    /* justify-content: center; */
    /* border-radius: 20px; */
`;

export const TextName = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    top: 75px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #a2a2a2;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
`;

export const TextInfo = styled.Text`
    font-size: 18px;
    color: #000000;
    margin-left: 5%;
    margin-right: 5%;
`;

export const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 22px;
    margin-left: 22px;
    margin-top: 43px;    
`;

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
