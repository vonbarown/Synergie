import React, { useState } from 'react'
import { connect } from 'react-redux';
import AddComment from './addComment'
import { Link } from 'react-router-dom'
import EditComment from './editComment'
import './comments.css'

const Comments = ({ comments, user_id, video_id, loggedUser }) => {
    return (
        <div className='show-page-comments'>
            <div>
                <AddComment user_id={user_id} video_id={video_id} />
                {
                    comments.map(comment => {
                        return (
                            <div className='comment' key={comment.id}>
                                <div className='comment-user-info'>
                                    <Link to={`/users/${comment.id}`}>
                                        <img className='watcher-img' src={comment.avatar_url} alt={comment.username} />
                                        {comment.username}
                                    </Link>
                                </div>
                                <EditComment comment={comment} loggedUser={loggedUser} />
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
        comments: state.showsReducer.comments,
        loggedUser: state.usersReducer.loggedUser.user
    }
}

export default connect(mapStateToProps, null)(Comments)