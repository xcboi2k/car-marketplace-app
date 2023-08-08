import styled from 'styled-components/native';
import { Container } from '../../../common/Styles'

export const FeedContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    height: 60px;
    padding: 0 16px;
`;

export const SearchBarContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 6px;
    margin-right: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #C2C7CB;
`;

export const SearchBarInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #C2C7CB;
    padding-left: 8px;
`;

export const FilterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px;
`;

export const FilterButton = styled.TouchableOpacity`
    width: 72px;
    height: 48px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    background-color: ${({ active }) => (active ? '#234791' : '#F4F6F8')};
`;

export const PostListContainer = styled.View`
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    width: 90%;
    height: 550px;
`;

export const PostList = styled.FlatList`
    flex: 1;
    padding: 5px;
`;