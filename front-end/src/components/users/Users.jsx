import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './users.css'


const Users = (props) => {

    return (
        <div className='users'>
            <div className='user-links'>
                <h2>Users</h2>
                {
                    props.users ? props.users.map(el => {
                        return (

                            <Link id={el.id.videoId} to={`/users/${el.username}`} className='user-profile' key={el.id}>
                                <img className='profile-pic' src={el.avatar_url} alt="user-profile" />
                                <p>{el.username}</p>
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
        users: state.usersReducer.users
    }
}

export default connect(mapStateToProps, null)(Users)