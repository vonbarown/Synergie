import React, { Component } from 'react'
import { connect } from 'react-redux'

class UpdateProfileForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <div className='change-profile-input'>
                        <p>Change Username:</p>
                        <input type="text" placeholder={this.props.loggedUser.username} className='form-input' />
                    </div>
                    <div className='change-profile-input'>
                        <p>Change Avatar:</p>
                        <input type="text" placeholder={this.props.loggedUser.avatar_url} className='form-input' />
                    </div>
                    <div className='change-profile-input'>
                        <p>Change Password:</p>
                        <input type="text" placeholder='Password' className='form-input' />
                    </div>
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

export default connect(mapStateToProps, null)(UpdateProfileForm)