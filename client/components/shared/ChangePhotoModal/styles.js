import styled from 'styled-components/native';

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

export const ModalButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.Text`
  color: black;
  font-size: 13px;
  text-align: center;
`

export const ModalPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-right: 10px;
`;