import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadComments } from '../../store/actions/showsActions'

class AddComment extends React.Component {
    state = {
        comment_body: ''
    }

    componentDidMount() {
        this.loadUserComments()
    }

    handleInput = e => this.setState({ comment_body: e.target.value })

    loadUserComments = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/comments/show/${this.props.video_id}`)
            this.props.loadComments(payload);
        } catch (error) {

        }
    }

    AddComment = async e => {
        e.preventDefault()
        const commentObj = {
            comment_body: this.state.comment_body,
            user_id: this.props.loggedInUser.id,
            show_id: this.props.video_id
        }
        try {
            const { data: comments } = await axios.post(`/api/comments`, commentObj)
            console.log(comments);

        } catch (error) {

        }
        this.loadUserComments()
    }


    render() {
        console.log('user id', this.props.video_id);

        return (
            <form onSubmit={this.AddComment} className='comment-form'>
                <input className='comment-submit-input' type="text" onChange={this.handleInput} placeholder='Comment' />
                <button className='comment-submit-button'>Add</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.usersReducer.loggedUser.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: data => dispatch(loadComments(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddComment)