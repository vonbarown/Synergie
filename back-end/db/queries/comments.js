const db = require('../db')


const getCommentByShowId = async (showId) => {
    const queryStr = `SELECT comments.id,comment_body,user_id,show_id,
                        COUNT(*) AS numOfComments 
                        FROM
                        comments 
                        WHERE show_id = $1
                        GROUP BY comments.id,comment_body,user_id,show_id
                        `
    return db.any(queryStr, [showId])
}


const addNewComment = async (commentObj) => {

    const newCommentQStr = `INSERT INTO comments ( comment_body,user_id,show_id) 
                            VALUES($/comment_body/,$/user_id/,$/show_id/) RETURNING *`

    return db.one(newCommentQStr, {
        comment_body: commentObj.comment_body,
        user_id: commentObj.user_id,
        show_id: commentObj.show_id
    })
}

module.exports = {
    getCommentByShowId,
    addNewComment
}