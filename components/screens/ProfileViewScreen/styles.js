import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const ProfileViewContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const ProfilePicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 16px;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const UserBio = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const UserInformation = styled.View`
  margin-bottom: 24px;
`;

export const InformationItem = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ListingItem = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;