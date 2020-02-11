import React from 'react'
import { connect } from 'react-redux'
// import './userPage.css'
import { Link } from 'react-router-dom'

class Shows extends React.Component {

    watchList = () => {
        for (let elem in this.props.watchList) {
            console.log(elem);
            return (

                <p>{elem}</p>

            )
        }
    }

    render() {

        return (
            <div className='user-page'>
                <div className='container'>
                    {
                        this.watchList()
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
        watchList: state.showsReducer.watchList
    }
}



export default connect(mapStateToProps, null)(Shows)