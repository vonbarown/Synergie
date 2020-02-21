import React, { Component } from 'react'
import './comments.css'

class EditComment extends Component {
    state = {
        editMode: false,
        newComment: ''
    }


    switchEditMode = () => this.setState({ editMode: !this.state.editMode })

    handleEdit = e => {
        e.preventDefault()

        this.setState({
            newComment: e.target.value
        })
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
                            // onSubmit={handleEdit}
                            >
                                <input
                                    className='user-comment'
                                    value={newComment}
                                    placeholder={comment.comment_body}
                                    disabled={!editMode}
                                    onChange={this.handleEdit}
                                />
                            </form>
                            <button
                                onClick={this.switchEditMode}
                            >
                                Edit
                                                </button>
                            <button className='form-button'>Delete</button>
                        </div>
                        : <p>{comment.comment_body}</p>
                }
            </div>

        )
    }
}

export default EditComment