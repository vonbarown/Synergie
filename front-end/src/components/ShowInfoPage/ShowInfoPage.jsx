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

    //loading information of  the specific show information
    loadSpecificShow = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/shows/${this.props.match.params.id}`)
            this.props.loadUserShows(payload)
        } catch (error) {

        }
    }

    //loading all the comments  in to redux store using axios call to api
    loadUserComments = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/comments/show/${this.props.match.params.id}`)
            this.props.loadComments(payload);
        } catch (error) {

        }
    }

    render() {
        const { comments, shows } = this.props
        return (
            <div className='show-info-page'>
                <div className='show-info-page-container'>
                    {
                        shows.map(el => {
                            return (
                                <div className='current-show' key={el.id}>
                                    <div className='show-page-data'>
                                        <h3>Show {el.title} of {el.username}</h3>
                                        <img className='show-info-page-img' src={el.img_url} alt={el.title} />
                                        <p>{el.genre_name}</p>
                                        <p>{comments.length} Comment(s)</p>
                                    </div>
                                    <Comments
                                        user_id={this.props.match.params.userId}
                                        show_id={this.props.match.params.id}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ showsReducer: { shows, comments } }) => {
    return {
        shows: shows,
        comments: comments
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: data => dispatch(loadComments(data)),
        loadUserShows: data => dispatch(loadUserShows(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfoPage)