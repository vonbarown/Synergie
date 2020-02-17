import React from 'react'
import Layout from '../Layout/Layout'
import { connect } from 'react-redux'
import ChatHistory from '../chatHistory/chatHistory'
import { loadChatMessages } from '../../store/actions/chatActions'
import axios from 'axios'

class ChatApp extends React.Component {

    componentDidMount() {
        this.loadChatMessages()
    }

    loadChatMessages = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/chat/${this.props.match.params.chatId}`)
            console.log('history', payload);
            this.props.loadChatMessages(payload);

        } catch (error) {

        }
    }


    render() {
        return (
            <div>
                <ChatHistory />
                <Layout title='Synergie Chat App' />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChatMessages: data => dispatch(loadChatMessages(data))
    }
}


export default connect(null, mapDispatchToProps)(ChatApp)