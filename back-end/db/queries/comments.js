const db = require('../db')


const getCommentByShowId = async (showId) => db.any("SELECT * from comments WHERE show_id = $1", [showId])


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