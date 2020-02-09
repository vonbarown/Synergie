import React from 'react'
import axios from 'axios';
import './showInfo.css'

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
            this.setState({
                specShow: shows
            })
        } catch (error) {

        }
    }

    render() {
        console.log(this.state.specShow);
        return (
            <div className='show-info-page'>
                {
                    this.state.specShow.map(el => {
                        return (
                            <div className='current-show' key={el.id}>
                                <div className='show-page-data'>
                                    <h3>Show {el.title} of {el.username}</h3>
                                    <img className='show-info-page-img' src={el.img_url} alt={el.title} />
                                    <p>{el.genre_name}</p>
                                </div>
                                <div className='show-page-comments'>
                                    Comments
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ShowInfoPage