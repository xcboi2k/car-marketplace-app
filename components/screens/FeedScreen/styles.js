import styled from 'styled-components/native';

export const FeedContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #f0f0f0;
    height: 60px;
    padding: 0 16px;
`;

export const SearchBar = styled.TextInput`
    flex: 1;
    background-color: #e0e0e0;
    border-radius: 8px;
    padding: 8px;
    margin-right: 16px;
`;

export const FilterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px;
`;

export const FilterButton = styled.TouchableOpacity`
    margin-right: 16px;
`;

export const FilterButtonText = styled.Text`
    font-size: 16px;
    color: ${({ active }) => (active ? '#2196F3' : '#333')};
`;

export const PostList = styled.FlatList`
    flex: 1;
    padding: 16px;
`;