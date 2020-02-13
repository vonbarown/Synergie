import React from 'react'
import { connect } from 'react-redux'
import './showPage.css'
import { Link } from 'react-router-dom'

class Shows extends React.Component {



    render() {
        let test = Object.values(this.props.watchList)
        console.log('testing', test);

        return (
            <div className='user-page'>
                <div className='container'>
                    {
                        test.map(el => {

                            return (
                                <div className='movie' key={el.title}>
                                    <img className='show-img' src={el.img_url} alt={el.title} />
                                    <div className='show-info'>
                                        <div>
                                            <p>{el.title}</p>
                                            <p>{el.genre}</p>
                                        </div>
                                        <div className='show-watchers'>Being Watched by:{'  '}
                                            {
                                                el.watchers.map(watcher => {
                                                    return (
                                                        <div className={`watcher-${watcher.user_id}`} key={watcher.user_id}>
                                                            <Link to={`/shows/${watcher.show_id}/user/${watcher.user_id}`}>
                                                                {watcher.username}
                                                            </Link>{' '}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

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