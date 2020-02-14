import React, { useEffect } from 'react'
import ChatHistory from './chatHistory/chatHistory'
import ChatInput from './chatInput/chatInput'
import { connect } from 'react-redux'
import axios from 'axios'
import { loadChat } from '../store/actions/chatActions'

const RootComponent = (props) => {

    useEffect(() => {
        const loadChatMessages = async () => {
            try {
                const { data: { payload } } = await axios.get(`/api/chat/${1}`)
                console.log(payload);
                props.loadChat(payload);

            } catch (error) {

            }
        }
        loadChatMessages()
    }, [])


    return (
        <>
            <ChatHistory />
            <ChatInput />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChat: data => dispatch(loadChat(data))
    }
}

export default connect(null, mapDispatchToProps)(RootComponent)