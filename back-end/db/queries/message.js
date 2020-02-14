const db = require('../db')


const addNewMessage = async (messageObj) => {
    const newShowQStr = `INSERT INTO messages (message_body,user_id) 
                        VALUES($/message_body,/,$/user_id/) 
                        RETURNING chat.id
                        `

    return await db.one(newShowQStr, {
        message_body: messageObj.message_body,
        chatMember_id: messageObj.user_id,
        chat_id: messageObj.chat_id
    })

}

module.exports = {
    addNewMessage
}