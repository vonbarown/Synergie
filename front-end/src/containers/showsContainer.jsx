import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAllShows } from '../store/actions/showsActions'
import Shows from '../components/Shows/Shows'

class ShowsContainer extends React.Component {


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
                    id: show.id,
                    genre: show.genre_name,
                    user_id: show.user_id,
                    watchers: [{
                        username: show.username,
                        show_id: show.id,
                        avatar_url: show.avatar_url,
                        watchers_id: show.watchers_id
                    }]
                }
            } else {
                watchList[key]['watchers'].push({
                    username: show.username,
                    show_id: show.id,
                    avatar_url: show.avatar_url,
                    watchers_id: show.watchers_id
                })
            }
        }
        this.props.loadAllShows(watchList)
        // for (let elem in stateCopy.showObj) {
        //     filteredShows.push(stateCopy.showObj[elem])
        // }
    }

    loadShows = async () => {

        try {
            const { data: { payload } } = await axios.get('/api/shows/')
            this.makeObj(payload)
        } catch (error) {
            console.log('all shows error', error);

        }
    }

    startWatching = async e => {
        console.log('toggle', e.target.value);
        try {
            await axios.post(`/api/shows/new_watcher`, {
                show_id: e.target.value,
                user_id: this.props.user.id
            })
        } catch (error) {

        }
        this.loadShows()
    }

    render() {
        return (
            <div className='shows-container'>
                <Shows startWatching={this.startWatching} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.loggedUser.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllShows: data => dispatch(loadAllShows(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer)