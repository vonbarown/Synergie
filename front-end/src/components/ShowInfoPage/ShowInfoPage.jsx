import React from 'react'

class ShowInfoPage extends React.Component {




    render() {
        console.log(this.props.match.params.id);
        return (
            <div className='show-info-page'>
                mask off
        </div>
        )
    }
}

export default ShowInfoPage