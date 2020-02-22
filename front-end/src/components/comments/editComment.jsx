import React, { Component } from 'react'
import axios from 'axios'
import './comments.css'

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

    handleSubmit = e => {
        const { comment } = this.props
        e.preventDefault()

        try {
            axios.patch(`/api/comments/${comment.id}`, {
                comment_body: this.state.newComment
            })
        } catch (error) {
            console.log('edit comment error', error);

        }
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
                                            ? 'editable'
                                            : 'non-editable'
                                    }
                                    value={newComment}
                                    disabled={!editMode}
                                    onChange={this.handleEdit}
                                />
                            </form>
                            <button
                                className='form-button'
                                id='edit-button'
                                onClick={this.switchEditMode}
                            >
                                Edit
                                                </button>
                            <button className='form-button' id='delete'>X</button>
                        </div>
                        : <p>{comment.comment_body}</p>
                }
            </div>

        )
    }
}

export default EditComment