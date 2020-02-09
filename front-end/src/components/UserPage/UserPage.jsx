import React from 'react'
import axios from 'axios'

export default class UserPage extends React.Component {

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        try {
            const { data } = await axios.get(`/api/users/${this.props.match.params.id}`)
            console.log(data);

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