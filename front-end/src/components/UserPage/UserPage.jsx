import React from 'react'
import axios from 'axios'
import { loadUser } from '../../store/actions/userActions'
import { connect } from 'react-redux'

class UserPage extends React.Component {

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        try {
            const { data: { user } } = await axios.get(`/api/users/${this.props.match.params.id}`)
            this.props.loadUser(user);

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
    }
}

export default connect(null, mapDispatchToProps)(UserPage)