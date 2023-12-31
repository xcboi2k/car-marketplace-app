import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const SellerListingContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const ListingsSection = styled.View`
    flex: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    width: 90%;
    height: 610px;
`;

export const ListingsHeader = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    align-self: flex-start;
`;

export const ListingsHeaderContainer = styled.View`
    margin-top: 5px;
    margin-bottom: 3px;
    width: 90%;
`;

export const SubText = styled.Text`
    color: black;
    font-size: 13px;
    text-align: center;
`;