import React from 'react'
import Layout from '../Layout/Layout'
// import { connect } from 'react-redux'


class ChatApp extends React.Component {


    componentDidMount() {
        this.initSocket()
    }



    render() {
        return (
            <Layout title='Synergie Chat App' />
        )
    }
}



export default ChatApp