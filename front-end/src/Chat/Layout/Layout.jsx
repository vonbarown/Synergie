import React from 'react'
import io from 'socket.io-client'
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


    render() {
        const { title } = this.props

        return (
            <div className='layout-container'>
                {title}
            </div>
        )
    }
}

export default Layout