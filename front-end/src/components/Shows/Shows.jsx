import React from 'react'
import { connect } from 'react-redux'
import './showPage.css'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

class Shows extends React.Component {

    toggle = e => {
        console.log('toggle', e.target.value);

    }


    render() {
        let test = Object.values(this.props.watchList)
        console.log('testing', test);

        return (
            <div className='user-page'>
                <div className='container'>
                    <h2 className='page-title'>All Shows</h2>
                    {
                        test.map(el => {

                            return (
                                <div className='movie' key={el.title}>
                                    <img className='show-img' src={el.img_url} alt={el.title} />
                                    <div className='show-info'>
                                        <div>
                                            <p className='title'>{el.title}</p>
                                            <p className='genre'>{el.genre}</p>
                                        </div>
                                        <div className='show-watchers'>Being Watched by:{'  '}
                                            {
                                                el.watchers.map(watcher => {
                                                    return (
                                                        <div className={`watcher-${watcher.user_id}`} key={watcher.user_id}>
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
                                        <button value={el.id} onClick={this.toggle} >watching</button>
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
        user: state.usersReducer.user,
        watchList: state.showsReducer.showObj
    }
}



export default connect(mapStateToProps, null)(Shows)