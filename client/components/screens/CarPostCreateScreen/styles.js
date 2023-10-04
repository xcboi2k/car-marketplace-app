import styled from 'styled-components/native';
import { Container } from '../../../common/Styles';

export const CarPostCreateContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    width: 100%;
`;

export const HeaderHolder = styled.View`
    width: 85%;
`;

export const HeaderText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const PriceYearContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
`;

export const DropdownContainer = styled.View`
    width: 85%;
    z-index: 2000;
`;

export const InfoContainer = styled.ScrollView`
    width: 85%;
    height: 600px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const OptionsHolderContainer = styled.View`
    margin-bottom: 10px;
`;

export const OptionTitleText = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
`;

export const OptionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px;
`;

export const OptionButton = styled.TouchableOpacity`
    width: 72px;
    height: 48px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    background-color: ${({ active }) => (active ? '#234791' : '#F4F6F8')};
`;

export const OptionText = styled.Text`
    color: ${({ active }) => (active ? '#F4F6F8' : '#234791')};
    font-size: 13px;
    text-align: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ButtonUploadContainer = styled.View`
    margin-bottom: 20px;
`;

export const ButtonUploadText = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
`;

export const SubText = styled.Text`
    color: black;
    font-size: 13px;
    text-align: center;
`;