import React from 'react'

class AddShowForm extends React.Component {
    sate = {
        img_url: '',
        show_name: '',
    }

    render() {
        return (
            <div className='add-show-form'>
                <form>
                    <input type="text" value='url' />
                </form>
            </div>
        )
    }
}

export default AddShowForm