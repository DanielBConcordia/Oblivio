import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const PerfilContainer = styled.View`
    width: 100%; 
    height: 35%;
    background-color: #5C2E7E;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

// export const ContainerImage = styled.View`
//      width: 50px; // Corrigido de 'widht' para 'width'
//      height: 50px;
//      background-color: #000000;
//      position: center; // Corrigido de 'center' para 'center'
//  `;

export const Imagem = styled.View`
    background-color: #c1c1c1;
    width: 100%; // Corrigido de 'widht' para 'width'
    height: 40%;
`;

export const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 22px;
    margin-left: 22px;
    margin-top: 43px;  
`;

export const TextName = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    top: 80px;
`;

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 8%;
    background-color: #D9D9D9;
    border-radius: 15px;
    margin-top: 10%;
    margin-left: 5%;
    padding-left: 15%;
    display: flex;
    justify-content: space-around;
`;

export const Buttonn = styled.TouchableOpacity`
    width: 90%;
    height: 8%;
    background-color: #D9D9D9;
    border-radius: 15px;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 15%;
    display: flex;
    justify-content: space-around;
`;

export const TextButton = styled.Text`
    color: #000000;
    font-size: 18px;
    text-align: left;
`;