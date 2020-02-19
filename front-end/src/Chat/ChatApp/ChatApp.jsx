import React from 'react'
import Layout from '../Layout/Messager'
import { connect } from 'react-redux'
import Network from '../Network/Network'
import { loadChatMessages } from '../../store/actions/chatActions'
import axios from 'axios'

class ChatApp extends React.Component {

    componentDidMount() {
        this.loadChatMessages()
    }

    loadChatMessages = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/network/1`)
            console.log('history', payload);
            this.props.loadChatMessages(payload);

        } catch (error) {

        }
    }


    render() {
        return (
            <div>
                <Network />
                {

                    // <Layout title='Synergie Chat App' />
                }
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