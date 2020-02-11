import React from 'react'
import axios from 'axios';
import './showInfo.css'
import { connect } from 'react-redux';
import { loadComments, loadUserShows } from '../../store/actions/showsActions'
import Comments from '../comments/comments'
class ShowInfoPage extends React.Component {

    componentDidMount() {
        this.loadSpecificShow()
        this.loadUserComments()
    }

    loadSpecificShow = async () => {
        try {
            const { data: { shows } } = await axios.get(`/api/shows/${this.props.match.params.id}`)
            this.props.loadUserShows(shows)
        } catch (error) {

        }
    }

    loadUserComments = async () => {
        try {
            const { data: { comments } } = await axios.get(`/api/comments/show/${this.props.match.params.id}`)
            this.props.loadComments(comments);
        } catch (error) {

        }
    }

    render() {
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
                                    <p>{this.props.comments.length} Comments</p>
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
        comments: state.showsReducer.comments
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: data => dispatch(loadComments(data)),
        loadUserShows: data => dispatch(loadUserShows(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfoPage)