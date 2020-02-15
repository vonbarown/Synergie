import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
const socketUrl = 'http://localhost:8282/'
class Layout extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            socket: null
        }
    }

    componentDidMount() {
        this.initSocket()
    }


    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('connected');

        })
        this.setState({ socket: socket })
    }

    setUser = () => {
        const { socket } = this.state
        const { user } = this.props

        socket.emit(user)
    }


    render() {

        const { title, user } = this.props

        return (
            <div className='layout-container'>
                {title}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.loggedUser.user
    }
}


export default connect(mapStateToProps, null)(Layout)