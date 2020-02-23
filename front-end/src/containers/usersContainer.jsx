import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions/userActions'
import UsersComponent from '../components/users/Users'
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

    render() {

        return (
            <div className='users-page-container'>
                <UsersComponent />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: data => dispatch(fetchUsers(data)),
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer)