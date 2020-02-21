import React, { Component } from 'react'

class EditComment extends Component {
    state = {
        editMode: false
    }


    switchEditMode = () => this.setState({ editMode: !this.state.editMode })

    // const[editMode, setEditMode] = useState(false)
    // const[updateComment, setUpdateComment] = useState('')

    // const handleEdit = e => {
    //     e.preventDefault()
    // }

    render() {
        const { comment, loggedUser } = this.props
        const { editMode } = this.state
        return (
            <div className='comment-metadata'>
                {
                    comment.user_id === loggedUser.id
                        ? <div className='editable-comment'>
                            <form className='edit-form'
                            // onSubmit={handleEdit}
                            >
                                <input
                                    // value={updateComment}
                                    placeholder={comment.comment_body}
                                    disabled={!editMode}
                                // onChange={(e) => setUpdateComment(e.target.value)}
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