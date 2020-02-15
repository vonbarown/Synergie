import React from 'react'
import { connect } from 'react-redux'
class Layout extends React.Component {

    setUser = () => {
        const { user, socket } = this.props
        socket.emit(user)
    }


    render() {

        const { title, socket } = this.props
        // console.log('socket', socket);

        return (
            <div className='layout-container'>
                {title}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.loggedUser.user,
        socket: state.chatReducer.socket
    }
}


export default connect(mapStateToProps, null)(Layout)