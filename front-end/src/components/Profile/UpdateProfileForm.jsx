import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateProfile, setUser } from '../../store/actions/userActions'

class UpdateProfileForm extends Component {
    state = {
        username: '',
        avatar_url: ''
    }
    componentDidMount() {
        this.refs.username.focus()
    }

    handleSubmit = async e => {
        e.preventDefault()
        await this.changeUserInfo()
    }

    changeUserInfo = async (e) => {
        const { updateProfile, setUser, loggedUser } = this.props
        e.preventDefault()
        try {
            const { data: { payload } } = await axios.patch(`/api/auth/${loggedUser.id}`, {
                username: this.state.username,
                avatar_url: this.state.avatar_url
            })
            updateProfile()
            setUser(payload)
        } catch (error) {
            console.log('update error', error);

        }
    }


    handleChange = e => this.setState({ [e.target.name]: e.target.value })


    render() {
        console.log(this.state);
        const { loggedUser } = this.props

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='change-profile-input'>
                        <p>Change Username:</p>
                        <input type="text"
                            name='username'
                            placeholder={loggedUser.username}
                            className='form-input shared-input-styling'
                            onChange={this.handleChange}
                            ref='username'
                        />
                    </div>
                    <div className='change-profile-input'>
                        <p>Change Avatar:</p>
                        <input type="text"
                            name='avatar_url'
                            placeholder={loggedUser.avatar_url}
                            className='form-input shared-input-styling'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='change-profile-input'>
                        <p>Change Password:</p>
                        <input type="text" placeholder='Password' className='form-input shared-input-styling' />
                    </div>
                    <button
                        onClick={this.changeUserInfo}
                        className='form-button profile-button'
                    >
                        Update
                        </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ usersReducer: { loggedUser: { user } } }) => {
    return {
        loggedUser: user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: data => dispatch(updateProfile(data)),
        setUser: data => dispatch(setUser(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm)