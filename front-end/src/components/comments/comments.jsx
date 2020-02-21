import React from 'react'
import { connect } from 'react-redux';
import AddComment from './addComment'
import { Link } from 'react-router-dom'
import './comments.css'
const Comments = (props) => {

    return (
        <div className='show-page-comments'>
            <div>
                <AddComment user_id={props.user_id} video_id={props.video_id} />
                {
                    props.comments.map(el => {
                        return (
                            <div className='comment' key={el.id}>
                                <Link to={`/users/${el.id}`}>User: {el.username}</Link>
                                <p>{el.comment_body}</p>
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