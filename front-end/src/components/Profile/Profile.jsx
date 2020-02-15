import React from 'react'
// import { Link } from 'react-router-dom'
import ModalContainer from '../../containers/modalContainer'
import './profile.css'
import { connect } from 'react-redux'

class Profile extends React.Component {


    render() {
        const { loggedUser } = this.props
        return (
            <div className='profile-page'>
                <h1>Welcome {loggedUser.username}</h1>
                <h3>What are you binging?</h3>
                <img className='profile-page-img'
                    src={loggedUser.avatar_url}
                    alt={loggedUser.username}
                />
                <ModalContainer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user
    }
}

export default connect(mapStateToProps, null)(Profile)