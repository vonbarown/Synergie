import React from 'react'
import { connect } from 'react-redux'
// import './userPage.css'
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
                                        <p>{el.title}</p>
                                        <p>{el.genre_id}</p>
                                        <p>Being Watched by:{'  '}
                                            {
                                                el.watchers.map(watcher => {
                                                    return (
                                                        <Link to={`/shows/${watcher.show_id}/user/${watcher.user_id}`}>
                                                            {watcher.username}
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </p>
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