import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const ProfileViewContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;
export const HolderContainer = styled.ScrollView`
  flex-grow: 0;
  width: 90%;
`;

export const ProfileSection = styled.View`
  align-items: center;
  margin-bottom: 15px;
`;

export const ProfilePicture = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 16px;
`;

export const UserName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const UserBio = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

export const UserInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserInformationColumn = styled.View`
  flex: 1;
`;

export const InformationItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const InformationText = styled.Text`
  font-size: 14px;
  margin-left: 8px;
  color: #666;
`;

export const ListingsSection = styled.View``;

export const ListingsHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;
