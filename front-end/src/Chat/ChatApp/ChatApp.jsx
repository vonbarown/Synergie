import React from 'react'
import Layout from '../Layout/Layout'
class ChatApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            socket: null
        }
    }

    initSocket = () => {
        const socket = 
    }

    render() {
        return (
            <Layout title='Synergie Chat App' />
        )
    }
}

export default ChatApp