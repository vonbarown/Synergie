import React from 'react'
import ChatHistory from './chatHistory/chatHistory'
import ChatInput from './chatInput/chatInput'

export const ChatApp = () => {
    return (
        <>
            <ChatHistory />
            <ChatInput />
        </>
    )
}