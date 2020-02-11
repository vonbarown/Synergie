import React from 'react'
import { connect } from 'react-redux'
// import './userPage.css'
import { Link } from 'react-router-dom'

class Shows extends React.Component {



    render() {
        let test = Object.keys(this.props.watchList)
        console.log('testing', test);


        return (
            <div className='user-page'>
                <div className='container'>
                    {
                        test.map(el => {
                            console.log(el);

                            return (
                                <div className='movie' key={el.id}>
                                    <img className='show-img' src={el} alt={el.title} />
                                    <div className='show-info'>
                                        <p>{el}</p>
                                        <p>{el.genre_id}</p>
                                        <p>Being Watched by:{'  '}
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
        user: state.usersReducer.user,
        watchList: state.showsReducer.showObj
    }
}



export default connect(mapStateToProps, null)(Shows)