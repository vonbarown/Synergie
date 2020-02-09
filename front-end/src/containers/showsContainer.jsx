import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAllShows } from '../store/actions/showsActions'
import Shows from '../components/Shows/Shows'

class UsersContainer extends React.Component {


    componentDidMount() {
        this.loadShows()
        // this.loadWatchingList()
    }

    loadShows = async () => {
        try {
            const { data: { shows } } = await axios.get('/api/shows/')
            this.props.loadAllShows(shows)
        } catch (error) {
            console.log('all shows error', error);

        }
    }

    // loadWatchingList = async () => {
    //     try {
    //         const { data: { shows } } = await axios.get('/api/shows/user/1')
    //         // this.props.loadAllShows(shows)
    //         console.log(shows);
    //     } catch (error) {
    //         console.log('all shows error', error);
    //     }
    // }

    render() {
        return (
            <div className='users-container'>
                <Shows />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadAllShows: data => dispatch(loadAllShows(data)),
    }
}

export default connect(null, mapDispatchToProps)(UsersContainer)