import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  elevation: 2;
  background-color: #F4F6F8;
  margin: 10px;
`;

export const CarImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const CarDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const CarInfo = styled.View``;

export const CarPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #153A56;
`;

export const CarName = styled.Text`
  font-size: 16px;
  color: #153A56;
  margin-top: 8px;
`;

export const EditButtonContainer = styled.TouchableOpacity`
  padding: 8px;
`;
