import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './users.css'


const Users = (props) => {
    let loggedIn


    return (
        <div className='users'>
            <div className='container'>
                <h2>Users</h2>
                {

                    props.users ? props.users.map(el => {
                        if (props.loggedUser.user.username === el.username) {
                            loggedIn = 'Logged In'
                        } else {
                            loggedIn = ''
                        }
                        return (

                            <Link to={`/users/${el.id}`} className='user-profile' key={el.id}>
                                <img className='profile-pic' src={el.avatar_url} alt="user-profile" />
                                <p>{el.username}</p>
                                <p>{loggedIn}</p>
                            </Link>

                        )
                    }) : null
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        loggedUser: state.usersReducer.loggedUser
    }
}

export default connect(mapStateToProps, null)(Users)