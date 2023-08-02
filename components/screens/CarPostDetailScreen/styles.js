import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const CarPostDetailContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const HolderContainer = styled.View`
    margin-top: 10px;
    align-items: center;
    width: 90%; 
`;

export const CarImageContainer = styled.View`
    width: 100%;
    height: 235px;
    margin-top: 16px;
    overflow: hidden; /* Clip the content to the rounded border */
`;

export const CarImage = styled.Image`
    flex: 1;
    object-fit: contain;
`;

export const CarInfoContainer = styled.View`
    width: 90%;
`;

export const CarDateLocationContainer = styled.View`
    flex-direction: row; 
    align-self: flex-start;
    justify-content: space-between; 
    margin-top: 16px;
`;

export const CarInfoColumn = styled.View`
    flex-direction: row;
    margin-right: 20px;
`;

export const CarInfoText = styled.Text`
    font-size: 13px;
    color: #C2C7CB;
    margin-left: 5px;
`;

export const Price = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #234791;
    margin-top: 10px;
    align-self: flex-start;
`;

export const Model = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #153A56;
    margin-top: 5px;
    align-self: flex-start;
`;

export const YearTransmissionKmContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const YearContainer = styled.View`
    align-items: center;
    background-color: #F4F6F8; 
    border-top-left-radius: 8px; 
    border-bottom-left-radius: 8px; 
    padding: 10px 25px;
    margin-right: 3px;
`;

export const TransmissionContainer = styled.View`
    align-items: center;
    background-color: #F4F6F8; 
    padding: 10px 25px;
`;

export const KMContainer = styled.View`
    align-items: center;
    background-color: #F4F6F8; 
    border-top-right-radius: 8px; 
    border-bottom-right-radius: 8px; 
    padding: 10px 25px;
    margin-left: 3px;
`;

export const TitleText = styled.Text`
    font-size: 12px;
    color: #C2C7CB;
    margin-bottom: 5px;
`;

export const SetTitleText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #234791;
    margin-top: 5px;
    margin-left: 2px;
    margin-right: 2px;
`;

export const ContactContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
`;

export const ButtonIconContainer = styled.View`
    margin-right: 20px;
`;
