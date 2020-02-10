import React from 'react'
import './AddShow.css'
import axios from 'axios'
class AddShowForm extends React.Component {
    state = {
        img_url: '',
        show_name: '',
        genres: []
    }

    componentDidMount() {
        this.fetchGenres()
    }

    fetchGenres = async () => {
        try {
            const { data: { genres } } = await axios.get(`/api/genres`)
            console.log(genres);
            // this.props.loadAllGenres(genres)
            this.setState({
                genres: genres
            })
        } catch (error) {

        }
    }

    handleSelect = e => {
        console.log(e.target.value);

    }

    render() {
        console.log(this.state);

        return (
            <div className='add-show-form-page'>
                <div className='add-show'>
                    <h1>Add Show</h1>
                    <h2>Form</h2>
                    <form className='add-show-form'>
                        <div className='url form-element'>
                            <p>Show Image Url</p>
                            <input type="text" placeholder='url' />
                        </div>
                        <div className='name form-element'>
                            <p>Show Name</p>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='genre form-element'>
                            <p>Genre</p>
                            <select onChange={this.handleSelect}>
                                <option>---Select A Genre---</option>
                                {
                                    this.state.genres.map(el => {
                                        return (
                                            <option key={el.id} value={el.id}>{el.genre_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddShowForm