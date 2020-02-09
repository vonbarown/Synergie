import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAllShows } from '../store/actions/showsActions'
import UsersComponent from '../components/users/Users'

class UsersContainer extends React.Component {


    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = async () => {
        try {
            const { data: { shows } } = await axios.get('/api/shows/')
            this.props.loadAllShows(shows)
        } catch (error) {
            console.log('usersAll error', error);

        }
    }

    render() {
        return (
            <div className='users-container'>
                Shows
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadAllShows: data => dispatch(loadAllShows(data)),
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer)