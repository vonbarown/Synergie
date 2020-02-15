import React from 'react'
import Layout from '../Layout/Layout'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { fetchSocket } from '../../store/actions/chatActions'
const socketUrl = 'http://localhost:8282/'

class ChatApp extends React.Component {


    componentDidMount() {
        this.initSocket()
    }

    initSocket = () => {
        const { fetchSocket } = this.props
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('connected');

        })
        fetchSocket(socket)
    }

    render() {
        return (
            <Layout title='Synergie Chat App' />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSocket: data => dispatch(fetchSocket(data))
    }
}

export default connect(null, mapDispatchToProps)(ChatApp)