import React from 'react'
import './AddShow.css'
class AddShowForm extends React.Component {
    sate = {
        img_url: '',
        show_name: '',
    }

    render() {
        return (
            <div className='add-show-form-page'>
                <div className='add-show-form'>
                    <h1>Add Show</h1>
                    <h2>Form</h2>
                    <form>
                        <div className='url'>
                            <input type="text" placeholder='url' />
                        </div>
                        <div className='name'>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='genre'>
                            <select>
                                <option>---Select A Genre---</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddShowForm