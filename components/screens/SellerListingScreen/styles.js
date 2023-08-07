import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const SellerListingContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const ListingsSection = styled.View`
    height: 100%;
`;

export const ListingsHeader = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
`;