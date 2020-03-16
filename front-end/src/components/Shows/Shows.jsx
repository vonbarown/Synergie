import React from 'react'
import { connect } from 'react-redux'
import './showPage.css'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
// import axios from 'axios'
import { scrolling } from '../../store/actions/userActions'
import { Watchers } from './watchers'
class Shows extends React.Component {
    state = {
        prevScrollPos: window.pageYOffset,
        visible: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }


    // toggles the visibility of the scroll to top bottom
    handleScroll = () => {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos < currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
        // this.props.scrolling(window.pageYOffset)
    };




    render() {
        const { visible } = this.state
        const { user, startWatching } = this.props

        return (
            <div className='user-page' onScroll={this.handleScroll}>
                <div className='container'>
                    <h2 className='page-title'>All Shows</h2>
                    {
                        Object.values(this.props.watchList).map(show => {

                            return (
                                <Link to={`/shows/${show.id}/user/${show.user_id}`} key={show.id}>
                                    {/* creating link  to show page to see comments on show*/}
                                    <div className='movie' key={show.title}>
                                        <img className='show-img' src={show.img_url} alt={show.title} />
                                        <div className='show-info'>
                                            <div>
                                                <p className='title'>{show.title}</p>
                                                <p className='genre'>{show.genre}</p>
                                            </div>

                                            {/* all the watchers for show*/}
                                            <Watchers watchers={show.watchers} />

                                            {
                                                /*
                                                Allowing user to start watching show without having too add
                                                with form.Only shows if user is not watching show
                                                */
                                                !show.watchers.find(el => el.watchers_id === user.id)
                                                    ? <button className='form-button ' id='start-watching'
                                                        value={show.id} onClick={startWatching}
                                                    >
                                                        Start watching
                                                </button>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                {
                    // checking  if the button should be visible based on scroll position
                    visible
                        ? <button className='scroll' onClick={() => scroll.scrollToTop()}>Scroll To Top</button>
                        : null

                }
            </div>
        )
    }
}


// redux functions connecting component to redux state and and actions
const mapStateToProps = ({ showsReducer: { shows, showObj }, usersReducer: { loggedUser: { user } } }) => {
    return {
        shows: shows,
        watchList: showObj,
        user: user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        scrolling: data => dispatch(scrolling(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shows)