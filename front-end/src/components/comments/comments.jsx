import React from 'react'
import { connect } from 'react-redux';
import AddComment from './addComment'
import { Link } from 'react-router-dom'
import './comments.css'
const Comments = ({ comments, user_id, video_id }) => {

    return (
        <div className='show-page-comments'>
            <div>
                <AddComment user_id={user_id} video_id={video_id} />
                {
                    comments.map(comment => {
                        return (
                            <div className='comment' key={comment.id}>
                                <Link to={`/users/${comment.id}`}>
                                    <img className='watcher-img' src={comment.avatar_url} alt={comment.username} />
                                    {comment.username}</Link>
                                <p>{comment.comment_body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.showsReducer.comments
    }
}

export default connect(mapStateToProps, null)(Comments)