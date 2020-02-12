const db = require('../db')


const getCommentByShowId = async (showId) => {
    const queryStr = `SELECT 
                    comments.id,
                    username,comment_body 
                    FROM
                    comments 
                    JOIN users ON user_id = users.id
                    WHERE show_id = $1`

    return await db.any(queryStr, [showId])
}


const addNewComment = async (commentObj) => {
    console.log(commentObj);

    const newCommentQStr = `INSERT INTO comments ( comment_body,user_id,show_id) 
                            VALUES($/comment_body/,$/user_id/,$/show_id/) RETURNING *`

    return await db.one(newCommentQStr, {
        comment_body: commentObj.comment_body,
        user_id: commentObj.user_id,
        show_id: commentObj.show_id
    })
}

module.exports = {
    getCommentByShowId,
    addNewComment
}