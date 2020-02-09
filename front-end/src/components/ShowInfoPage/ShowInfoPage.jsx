import React from 'react'
import axios from 'axios';

class ShowInfoPage extends React.Component {
    state = {
        specShow: []
    }

    componentDidMount() {
        this.loadSpecificShow()
    }

    loadSpecificShow = async () => {
        try {
            const { data: { shows } } = await axios.get(`/api/shows/${this.props.match.params.id}`)
            console.log(shows);

        } catch (error) {

        }
    }

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