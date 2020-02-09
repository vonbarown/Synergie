import React from 'react'
import axios from 'axios';
import './showInfo.css'
import { connect } from 'react-redux';
import { loadComments } from '../../store/actions/showsActions'
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
        try {
            const { data: { shows } } = await axios.get(`/api/shows/${this.props.match.params.id}`)
            this.setState({
                specShow: shows
            })
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
        console.log(this.state.specShow);
        return (
            <div className='show-info-page'>
                {
                    this.state.specShow.map(el => {
                        return (
                            <div className='current-show' key={el.id}>
                                <div className='show-page-data'>
                                    <h3>Show {el.title} of {el.username}</h3>
                                    <img className='show-info-page-img' src={el.img_url} alt={el.title} />
                                    <p>{el.genre_name}</p>
                                </div>
                                <Comments />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: data => dispatch(loadComments(data))
    }
}

export default connect(null, mapDispatchToProps)(ShowInfoPage)