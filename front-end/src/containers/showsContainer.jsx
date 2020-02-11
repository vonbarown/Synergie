import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAllShows } from '../store/actions/showsActions'
import Shows from '../components/Shows/Shows'

class UsersContainer extends React.Component {


    componentDidMount() {
        this.loadShows()
    }

    makeObj = (data) => {
        let watchList = {}
        for (let i = 0; i < data.length; i++) {
            let show = data[i]
            let key = show.title

            if (!watchList[key]) {
                watchList[key] = {
                    title: key,
                    img_url: show.img_url,
                    watchers: [{ username: show.username, user_id: show.user_id }]
                }
            } else {
                watchList[key]['watchers'].push({ username: show.username, user_id: show.user_id })
            }
        }
        this.props.loadAllShows(watchList)
        // for (let elem in stateCopy.showObj) {
        //     filteredShows.push(stateCopy.showObj[elem])
        // }
    }

    loadShows = async () => {

        try {
            const { data: { shows } } = await axios.get('/api/shows/')
            this.makeObj(shows)
        } catch (error) {
            console.log('all shows error', error);

        }
    }

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