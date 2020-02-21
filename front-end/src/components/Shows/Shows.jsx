import React from 'react'
import { connect } from 'react-redux'
import './showPage.css'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import axios from 'axios'
import { scrolling } from '../../store/actions/userActions'
class Shows extends React.Component {
    state = {
        prevScrollPos: window.pageYOffset,
        visible: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

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

    startWatching = async e => {
        console.log('toggle', e.target.value);
        try {
            await axios.post(`/api/shows/new_watcher`, {
                show_id: e.target.value,
                user_id: this.props.user.id
            })
        } catch (error) {

        }
    }


    render() {
        const { visible } = this.state
        const { user } = this.props

        return (
            <div className='user-page' onScroll={this.handleScroll}>
                <div className='container'>
                    <h2 className='page-title'>All Shows</h2>
                    {
                        Object.values(this.props.watchList).map(show => {

                            return (
                                <div className='movie' key={show.title}>
                                    <img className='show-img' src={show.img_url} alt={show.title} />
                                    <div className='show-info'>
                                        <div>
                                            <p className='title'>{show.title}</p>
                                            <p className='genre'>{show.genre}</p>
                                        </div>
                                        <div className='show-watchers'>Being Watched by:{'  '}
                                            {
                                                show.watchers.map(watcher => {
                                                    return (
                                                        <div className={`watcher-${watcher.watcher_id}`} key={watcher.username}>
                                                            <Link to={`/shows/${watcher.show_id}/user/${show.user_id}`}>
                                                                <img className='watcher-img'
                                                                    src={watcher.avatar_url}
                                                                    alt={watcher.username}
                                                                />
                                                                {watcher.username}
                                                            </Link>{' '}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {
                                            !show.watchers.find(el => el.watchers_id === user.id)
                                                ? <button className='form-button ' id='start-watching'
                                                    value={show.id} onClick={this.startWatching}
                                                >
                                                    Start watching
                                                </button>
                                                : null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    visible
                        ? <button className='scroll' onClick={() => scroll.scrollToTop()}>Scroll To Top</button>
                        : null

                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shows: state.showsReducer.shows,
        user: state.usersReducer.loggedUser.user,
        visible: state.usersReducer.scrolling.visible,
        watchList: state.showsReducer.showObj
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        scrolling: data => dispatch(scrolling(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shows)