import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import './users.css'


let loggedIn
const Users = (props) => {



    return (
        <div className='users'>
            <h2 className='page-title'>Users</h2>
            <div className='container'>
                {

                    props.users ? props.users.map(el => {
                        if (props.loggedUser.isUserLoggedIn) {
                            props.loggedUser.user.username === el.username ?
                                loggedIn = 'Logged In' :
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
            <button className='scroll message'>
                <Link to='/messaging'>Messages</Link>
            </button>
            <button className='scroll' onClick={() => scroll.scrollToTop()}>Scroll To Top</button>
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