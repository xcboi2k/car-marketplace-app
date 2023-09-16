import styled from 'styled-components/native';
import { Container } from '../../../common/Styles';

export const ProfileViewContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    width: 100%;
`;

export const HolderContainer = styled.ScrollView`
  flex-grow: 0;
  width: 85%;
  margin-top: 10px;
`;

export const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProfilePicture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const InformationSection = styled.View`
  align-items: center;
  margin-left: 28px;
`;

export const InformationValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`;

export const InformationLabel = styled.Text`
  font-size: 15px;
  color: #666;
`;

export const UserInfoContainer = styled.View`
  margin-bottom: 16px;
`;

export const UserNameWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

export const EditIconWrapper = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const HandleName = styled.Text`
  font-size: 18px;
  font-style: italic;
  color: #234791;
  margin-bottom: 10px;
`;

export const UserBio = styled.Text`
  font-size: 16px;
  color: #666;
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

export const AboutContainer = styled.View`
  margin-bottom: 50px;
`;

export const AboutTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

export const AboutText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;
