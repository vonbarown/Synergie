import React from 'react'
import axios from 'axios';
import './showInfo.css'
import { connect } from 'react-redux';
import { loadComments, loadUserShows } from '../../store/actions/showsActions'
import Comments from '../comments/comments'
class ShowInfoPage extends React.Component {
    state = {
        specShow: []
    }

    componentDidMount() {
        this.loadSpecificShow()
        this.loadComments()
    }

    loadSpecificShow = async () => {
        console.log('specific show', this.props.match.params.id);

        try {
            const { data: { shows } } = await axios.get(`/api/shows/${this.props.match.params.id}`)
            this.props.loadUserShows(shows)
        } catch (error) {

        }
    }

    loadComments = async () => {
        try {
            const { data: { comments } } = await axios.get(`/api/comments/show/${this.props.match.params.id}`)
            this.props.loadComments(comments);
        } catch (error) {

        }
    }

    render() {
        console.log('show id', this.props.match.params.id);
        return (
            <div className='show-info-page'>
                {
                    this.props.shows.map(el => {
                        return (
                            <div className='current-show' key={el.id}>
                                <div className='show-page-data'>
                                    <h3>Show {el.title} of {el.username}</h3>
                                    <img className='show-info-page-img' src={el.img_url} alt={el.title} />
                                    <p>{el.genre_name}</p>
                                </div>
                                <Comments user_id={this.props.match.params.userId} video_id={this.props.match.params.id} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shows: state.showsReducer.shows,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: data => dispatch(loadComments(data)),
        loadUserShows: data => dispatch(loadUserShows(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfoPage)