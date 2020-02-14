const db = require('../db')


const getMessagesByChatId = async (id) => {
    const queryStr = `SELECT
                        messages.id,users.username,messages.message_body
                        FROM 
                        messages 
                        INNER JOIN chatMembers ON messages.id = chatMembers.chat_id
                        INNER JOIN users ON chatMembers.user_id = users.id
                        WHERE messages.chat_id = $1
                        `

    return await db.any(queryStr, [id])
}


module.exports = {
    getMessagesByChatId
}