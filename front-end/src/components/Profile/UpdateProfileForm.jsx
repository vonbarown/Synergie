import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateProfile, setUser } from '../../store/actions/userActions'

class UpdateProfileForm extends Component {
    state = {
        username: '',
        avatar_url: ''
    }

    handleSubmit = async e => {
        e.preventDefault()
        await this.changeUserInfo()
    }

    changeUserInfo = async (e) => {
        const { updateProfile, setUser } = this.props
        e.preventDefault()
        const { data: payload } = await axios.patch(`/api/auth/${this.props.loggedUser.id}`, {
            username: this.state.username,
            avatar_url: this.state.avatar_url
        })
        updateProfile()
        setUser(payload)
    }


    handleChange = e => this.setState({ [e.target.name]: e.target.value })


    render() {
        console.log(this.state);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='change-profile-input'>
                        <p>Change Username:</p>
                        <input type="text"
                            name='username'
                            placeholder={this.props.loggedUser.username}
                            className='form-input'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='change-profile-input'>
                        <p>Change Avatar:</p>
                        <input type="text"
                            name='avatar_url'
                            placeholder={this.props.loggedUser.avatar_url}
                            className='form-input'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='change-profile-input'>
                        <p>Change Password:</p>
                        <input type="text" placeholder='Password' className='form-input' />
                    </div>
                    <button onClick={this.changeUserInfo}></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.usersReducer.loggedUser.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: data => dispatch(updateProfile(data)),
        setUser: data => dispatch(setUser(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm)