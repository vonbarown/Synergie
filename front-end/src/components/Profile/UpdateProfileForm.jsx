import React, { Component } from 'react'

class UpdateProfileForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder='username' className='form-input' />
                </form>
            </div>
        )
    }
}

export default UpdateProfileForm