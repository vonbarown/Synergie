import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchUsers, loggedInUser } from '../store/actions/userActions'
import UsersComponent from '../components/users/Users'

class UsersContainer extends React.Component {


    componentDidMount() {
        this.loadUsers()
        this.setLoggedUser()
    }

    loadUsers = async () => {
        try {
            const { data: { users } } = await axios.get('/api/users/')
            this.props.fetchUsers(users)
        } catch (error) {
            console.log('usersAll error', error);

        }
    }

    setLoggedUser = () => {
        const loggedUser = {
            username: 'Pam Beesly'
        }
        this.props.loggedInUser(loggedUser)
    }

    render() {
        return (
            <div className='users-container'>
                <UsersComponent />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersReducer.users
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: data => dispatch(fetchUsers(data)),
        loggedInUser: data => dispatch(loggedInUser(data))
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer)