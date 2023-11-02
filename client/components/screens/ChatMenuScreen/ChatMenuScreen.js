import React from 'react'

import { ChatMenuContainer, MessagesHeader, MessagesHeaderContainer, MessagesSection } from './styles'

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import { ICON_NAMES } from '../../../constants/constant';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import ChatUserMessageCard from '../../shared/ChatUserMessageCard/ChatUserMessageCard';

const ChatMenuScreen = ({ navigation }) => {
    const sampleMessages = [
        {id: 1, userName: 'Sample Person 1', message: 'Hello there!', timeStamp: 'November 2, 2023'},
        {id: 2, userName: 'Sample Person 2', message: 'Hello there!', timeStamp: 'November 2, 2023'},
        {id: 3, userName: 'Sample Person 3', message: 'Hello there!', timeStamp: 'November 2, 2023'}
    ]
    return (
        <ChatMenuContainer>
            <ScreenHeader  leftIconName={ICON_NAMES.BACK}
                onLeftPress={() => 
                navigation.goBack()}
            />
            <MessagesHeaderContainer>
                <MessagesHeader>Messages</MessagesHeader>
            </MessagesHeaderContainer>
            <MessagesSection>
                {
                    sampleMessages.map((item) => (
                        <ChatUserMessageCard 
                            key={item.id}
                            userImage={PicturePlaceholder} 
                            userName={item.userName} 
                            userLastMessage={item.message} 
                            timeStamp={item.timeStamp}
                        />
                    ))
                }
            </MessagesSection>
        </ChatMenuContainer>
  )
}

export default ChatMenuScreen