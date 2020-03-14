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
            const { data: { payload } } = await axios.get(`/api/users/${this.props.match.params.id}`)
            this.props.loadUser(payload);

        } catch (error) {

        }

    }

    loadShows = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/shows/user/${this.props.match.params.id}`)
            this.props.loadUserShows(payload)
        } catch (error) {

        }
    }

    render() {
        console.log(this.props.match.params.id);
        const { loggedUser: { isUserLoggedIn, user }, selectedUser } = this.props
        let loggedIn;
        return (
            <div className='user-page'>
                <div className='container'>
                    <div className='logged-user'>
                        < div className='user-profile'>
                            <img className='profile-pic' src={selectedUser.avatar_url} alt={selectedUser.username} />
                            <p>{selectedUser.username}</p>
                            {
                                isUserLoggedIn ?
                                    (
                                        user.username === selectedUser.username ?
                                            loggedIn = 'Logged In' :
                                            loggedIn = ''
                                    ) : null
                            }
                        </div>

                    </div>
                    <h2 className='page-title'>Watching</h2>
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

            </div >
        )
    }
}

const mapStateToProps = ({ showsReducer, usersReducer: { selectedUser, loggedUser } }) => {
    return {
        shows: showsReducer.shows,
        selectedUser: selectedUser,
        loggedUser: loggedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: data => dispatch(loadUser(data)),
        loadUserShows: data => dispatch(loadUserShows(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)