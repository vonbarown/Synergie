import React, { Component } from 'react'
import axios from 'axios'
import './comments.css'
import { connect } from 'react-redux'
import { loadComments } from '../../store/actions/showsActions'

class EditComment extends Component {
    state = {
        editMode: false,
        newComment: this.props.comment.comment_body

    }


    switchEditMode = () => {
        this.refs.userComment.focus();
        this.setState({ editMode: !this.state.editMode })
    }

    handleEdit = e => {
        this.setState({
            newComment: this.refs.userComment.value
        })
    }

    loadShowComments = async () => {
        const { comment } = this.props
        try {
            const { data: { payload } } = await axios.get(`/api/comments/show/${comment.show_id}`)
            this.props.loadComments(payload);
        } catch (error) {

        }
    }

    handleSubmit = async e => {
        const { comment } = this.props
        e.preventDefault()

        try {
            await axios.patch(`/api/comments/${comment.comment_id}`, {
                comment_body: this.state.newComment
            })
        } catch (error) {
            console.log('edit comment error', error);

        }
        this.loadShowComments()
    }

    handleDelete = async (e) => {
        const { loggedUser } = this.props
        console.log(e.target.value);
        try {
            await axios.delete(`/api/comments/${e.target.value}/user/${loggedUser.id}/delete`)
        } catch (error) {
            console.log('delete comment error', error);
        }
        this.loadShowComments()
    }

    render() {
        const { comment, loggedUser } = this.props
        const { editMode, newComment } = this.state
        return (
            <div className='comment-metadata'>
                {
                    comment.user_id === loggedUser.id
                        ? <div className='editable-comment'>
                            <form className='edit-form'
                                onSubmit={this.handleSubmit}
                            >
                                <input
                                    ref='userComment'
                                    className={
                                        editMode
                                            ? 'editable shared-input-styling'
                                            : 'non-editable'
                                    }
                                    value={newComment}
                                    disabled={!editMode}
                                    onChange={this.handleEdit}
                                />
                            </form>
                            <span
                                id='edit-button'
                                onClick={this.switchEditMode}
                                role='img'
                                title='edit'
                                aria-label="pencil"
                            >
                                ✏️
                             </span>
                            <button
                                value={comment.comment_id}
                                className='form-button'
                                id='delete'
                                onClick={this.handleDelete}
                            >
                                X
                                </button>
                        </div>
                        : <p>{comment.comment_body}</p>
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

export default connect(null, mapDispatchToProps)(EditComment)