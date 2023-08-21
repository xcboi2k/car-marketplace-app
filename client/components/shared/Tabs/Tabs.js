import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Container, TabContainer, TabButton, TabButtonText, TabContent } from './styles'

const Tabs = ({tabs, active}) => {
    const [activeTab, setActiveTab] = useState(active);

    const handleTabPress = (tabId) => {
        setActiveTab(tabId);
    };

    const renderTabButton = ({ item }) => (
        <TabButton onPress={() => handleTabPress(item.id)}>
        <TabButtonText active={activeTab === item.id}>{item.title}</TabButtonText>
        </TabButton>
    );

    const renderTabContent = ({ item }) => (
        <>
        {activeTab === item.id && (
            <TabContent>
            <Text>{item.content}</Text>
            </TabContent>
        )}
        </>
    );

    return (
        <Container>
            <TabContainer>
                <FlatList
                data={tabs}
                renderItem={renderTabButton}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </TabContainer>

            {/* Render content based on the activeTab */}
            <FlatList
                data={tabs}
                renderItem={renderTabContent}
                keyExtractor={(item) => item.id.toString()}
            />
        </Container>
    )
}

export default Tabs