import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions/userActions'
import UsersComponent from '../components/users/Users'
import { Redirect } from 'react-router-dom'

// import ModalContainer from './modalContainer'

class UsersContainer extends React.Component {


    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = async () => {
        try {
            const { data: { payload } } = await axios.get('/api/users/')
            this.props.fetchUsers(payload)
        } catch (error) {
            console.log('usersAll error', error);

        }
    }

    network = async (e) => {
        const { loggedUser } = this.props
        try {
            console.log('connected');

            await axios.post(`/api/network`, {
                user_id: loggedUser.id,
                contact_id: e.target.value
            });
            this.props.history.push('/network')
        } catch (error) {
            console.log('socializing', error);
        }
    }

    render() {

        return (
            <div className='users-page-container'>
                <UsersComponent network={this.network} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: data => dispatch(fetchUsers(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)