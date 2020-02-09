import React from 'react'
import { connect } from 'react-redux';


const Comments = (props) => {
    return (
        <div className='show-page-comments'>
            {
                props.comments.map(el => {
                    return (
                        <div className='comment' key={el.id}>
                            <p>{el.username}</p>
                            <p>{el.comment_body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.showsReducer.comments,
    }
}

export default connect(mapStateToProps, null)(Comments)