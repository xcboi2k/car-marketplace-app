import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  width: 90%;
  margin-top: 10px
`;

export const TabContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

export const TabButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#234791' : '#C2C7CB')};
`;

export const TabContent = styled.View`
  padding: 16px;
`;
