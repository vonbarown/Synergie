import React from 'react'
import axios from 'axios'
import { loadUser } from '../../store/actions/userActions'
import { loadUserShows } from '../../store/actions/showsActions'
import { connect } from 'react-redux'
import './userPage.css'
import { Link } from 'react-router-dom'

class UserPage extends React.Component {

    componentDidMount() {
        this.loadUser()
        this.loadShows()
    }

    loadUser = async () => {
        try {
            const { data: { user } } = await axios.get(`/api/users/${this.props.match.params.id}`)
            this.props.loadUser(user);

        } catch (error) {

        }

    }

    loadShows = async () => {
        try {
            const { data: { shows } } = await axios.get(`/api/shows/user/${this.props.match.params.id}`)
            this.props.loadUserShows(shows)
        } catch (error) {

        }
    }

    render() {
        console.log(this.props.match.params.id);

        return (
            <div className='user-page'>
                <div className='container'>
                    <div className='logged-user'>
                        {
                            this.props.user.map(el => {
                                return (
                                    <div className='user-profile' key={el.id}>
                                        <img className='profile-pic' src={el.avatar_url} alt={el.username} />
                                        <p>{el.username}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h2>Watching</h2>
                    {
                        this.props.shows.map(el => {
                            return (
                                <Link to={`/shows/${el.id}/user/${this.props.match.params.id}`} className='movie' key={el.id}>
                                    <img className='show-img' src={el.img_url} alt={el.title} />
                                    <div className='show-data'>
                                        <p>{el.title}</p>
                                        <p>{el.genre_name}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <button>
                    <Link to={`/users/${this.props.match.params.id}/addShow`}>Add Show</Link>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shows: state.showsReducer.shows,
        user: state.usersReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: data => dispatch(loadUser(data)),
        loadUserShows: data => dispatch(loadUserShows(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)