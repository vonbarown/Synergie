import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import { scrolling, setHamburger } from '../../store/actions/userActions'
import './users.css'


let loggedIn
class Users extends Component {
    state = {
        prevScrollPos: window.pageYOffset,
        visible: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // handleScroll = () => this.props.scrolling(window.pageYOffset)
    handleScroll = () => {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos < currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
        // this.props.scrolling(window.pageYOffset)]
    };
    handleBurger = () => {
        const { hamburgerOpen } = this.props
        setHamburger(!hamburgerOpen)
    }


    render() {
        const { visible } = this.state
        const { users, loggedUser } = this.props
        let loggedIn;
        return (
            <div className='users' onScroll={this.handleScroll} >
                <h2 className='page-title'>Users</h2>
                <div className='container' onClick={this.handleBurger}>
                    {

                        users ? users.map(el => {
                            if (loggedUser.isUserLoggedIn) {
                                loggedUser.user.username === el.username ?
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
                <div className='page-actions'>
                    <Link to='/messaging'>
                        <button className='scroll message'>
                            Messages
                        </button>
                    </Link>
                    {
                        visible
                            ? <button className='scroll' onClick={() => scroll.scrollToTop()}>Scroll To Top</button>
                            : null

                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        loggedUser: state.usersReducer.loggedUser,
        hamburgerOpen: state.usersReducer.hamburgerOpen

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        scrolling: data => dispatch(scrolling(data)),
        setHamburger: data => dispatch(setHamburger(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)