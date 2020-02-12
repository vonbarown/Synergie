import React from 'react'
import './AddShow.css'
import axios from 'axios'
class AddShowForm extends React.Component {
    state = {
        img_url: '',
        show_name: '',
        genres: [],
        genre_id: ''
    }

    componentDidMount() {
        this.fetchGenres()
    }

    fetchGenres = async () => {
        try {
            const { data: { genres } } = await axios.get(`/api/genres`)
            this.setState({
                genres: genres
            })
        } catch (error) {

        }
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    addShow = async e => {
        e.preventDefault()
        const showObj = {
            title: this.state.show_name,
            img_url: this.state.img_url,
            user_id: 1,
            genre_id: this.state.genre_id
        }

        const watchObj = {

        }

        try {
            await axios.post(`/api/shows`, showObj)
        } catch (error) {
            console.log('add show error', error);

        }
    }

    handleSelect = e => this.setState({ genre_id: parseInt(e.target.value) })


    render() {

        return (
            <div className='add-show-form-page'>
                <div className='add-show'>
                    <h1>Add Show</h1>
                    <h2>Form</h2>
                    <form onSubmit={this.addShow} className='add-show-form'>
                        <div className='url form-element'>
                            <p>Show Image Url</p>
                            <input name='img_url' className='add-show-input add-show-item'
                                onChange={this.handleInput}
                                type="text" placeholder='url' />
                        </div>
                        <div className='name form-element'>
                            <p>Show Name</p>
                            <input name='show_name' className='add-show-input add-show-item'
                                onChange={this.handleInput}
                                type="text" placeholder='Name' />
                        </div>
                        <div className='genre form-element'>
                            <p>Genre</p>
                            <select className='add-show-item' onChange={this.handleSelect}>
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
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddShowForm