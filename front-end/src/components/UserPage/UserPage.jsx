import React from 'react'
import axios from 'axios'
import { loadUser } from '../../store/actions/userActions'
import { loadShows } from '../../store/actions/showsActions'
import { connect } from 'react-redux'

class UserPage extends React.Component {

    componentDidMount() {
        this.loadUser()
        this.loadShows()
    }

    loadUser = async () => {
        try {
            const { data: { user } } = await axios.get(`/api/users/${this.props.match.params.id}`)
            this.props.loadUser(user);

        } catch (error) {

        }

    }

    loadShows = async () => {
        try {
            const { data: { shows } } = await axios.get(`/api/shows/user/${this.props.match.params.id}`)
            this.props.loadShows(shows)
        } catch (error) {

        }
    }

    render() {
        console.log(this.props.match.params.id);

        return (
            <div>
                user page
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: data => dispatch(loadUser(data)),
        loadShows: data => dispatch(loadShows(data))
    }
}

export default connect(null, mapDispatchToProps)(UserPage)