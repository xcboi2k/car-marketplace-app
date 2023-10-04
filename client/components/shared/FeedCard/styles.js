import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
    width: 300px;
    border-radius: 8px;
    background-color: #F4F6F8;
    elevation: 2;
    margin: 10px;
    padding: 16px;
`;

export const SellerContainer = styled.View`
    flex-direction: row;
`

export const SellerInfo = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 12px;
`;

export const SellerProfilePicture = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 8px;
`;

export const SellerName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #153A56;
`;

export const SellerLocation = styled.Text`
    font-size: 14px;
    color: #C2C7CB;
`;

export const ItemImage = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 8px;
`;