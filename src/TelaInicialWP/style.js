import styled from "styled-components/native";


export const Container = styled.View``;
 
export const Header = styled.View`
  height: 25%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #5c2e7e;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 100;
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 3%;
`;

export const HelloText = styled.Text`
  color: #fff;
  top: 12%;
  text-align: center;
  font-size: 20px;
`;

export const NothingPac = styled.Text`
  color: #8bbccc;
  text-align: center;
  top: 20%;
`;

export const AddPac = styled.TouchableOpacity`
  background-color: #fff;
  z-index: 100;
  position: absolute;
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 80%;
  height: 1%;
  border-radius: 20px;
  margin-top: 45%;
`;

export const TextPac = styled.Text`
  color: #4c6793;
  font-size: 20px;
  text-align: center;
`;

