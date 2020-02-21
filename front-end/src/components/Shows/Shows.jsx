import React from 'react'
import { connect } from 'react-redux'
import './showPage.css'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

class Shows extends React.Component {

    startWatching = e => {
        console.log('toggle', e.target.value);

    }


    render() {
        const { user } = this.props

        return (
            <div className='user-page'>
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
                                                        <div className={`watcher-${watcher.user_id}`} key={watcher.username}>
                                                            <Link to={`/shows/${watcher.show_id}/user/${watcher.user_id}`}>
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
                                            show.user_id !== user.id
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
                <button className='scroll' onClick={() => scroll.scrollToTop()}>Scroll To Top</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shows: state.showsReducer.shows,
        user: state.usersReducer.loggedUser.user,
        watchList: state.showsReducer.showObj
    }
}



export default connect(mapStateToProps, null)(Shows)