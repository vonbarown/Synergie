import React from 'react'
import { connect } from 'react-redux'
import Network from '../Network/Network'
import { loadChatMessages } from '../../store/actions/chatActions'
import axios from 'axios'

class ChatApp extends React.Component {

    componentDidMount() {
        this.loadChatMessages()
    }

    chatObj = (data) => {
        let chatObj = {}
        let output = []
        for (let i = 0; i < data.length; i++) {
            let contact = data[i]
            let key = contact.id

            if (chatObj[key]) {
                output.push(contact)
            }
            chatObj[key] = contact
        }
        console.log(chatObj);

        this.props.loadChatMessages(Object.values(chatObj));
    }

    loadChatMessages = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/network/${this.props.loggedUser.id}`)
            this.chatObj(payload)
        } catch (error) {

        }
    }


    render() {
        return (
            <div>
                <Network />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadChatMessages: data => dispatch(loadChatMessages(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)