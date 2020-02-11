import React from 'react'
import { connect } from 'react-redux'
// import './userPage.css'
import { Link } from 'react-router-dom'

class Shows extends React.Component {



    render() {

        return (
            <div className='user-page'>
                <div className='container'>
                    {
                        this.props.shows.map(el => {
                            return (
                                <div className='movie' key={el.id}>
                                    <img className='show-img' src={el.img_url} alt={el.title} />
                                    <div className='show-info'>
                                        <p>{el.title}</p>
                                        <p>{el.genre_id}</p>
                                        <p>Being Watched by:{' '}
                                            <Link to={`/shows/${el.id}/user/${el.user_id}`}>
                                                {el.username}
                                            </Link>
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
        user: state.usersReducer.user
    }
}



export default connect(mapStateToProps, null)(Shows)