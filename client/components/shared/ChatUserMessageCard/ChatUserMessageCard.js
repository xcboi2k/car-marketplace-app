import React from 'react'
import { LastMessageText, MessageCardContainer, MessageContainer, NameText, TimeStampText, UserImage } from './styles'

const ChatUserMessageCard = ({onPress, userImage, userName, userLastMessage, timeStamp}) => {
  return (
    <MessageCardContainer onPress={onPress}>
        <UserImage source={userImage}/>
        <MessageContainer>
            <NameText>{userName}</NameText>
            <LastMessageText>{userLastMessage}</LastMessageText>
        </MessageContainer>
        <TimeStampText>{timeStamp}</TimeStampText>
    </MessageCardContainer>
  )
}

export default ChatUserMessageCard