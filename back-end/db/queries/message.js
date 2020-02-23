const db = require('../db')

const addNewMessage = async (messageObj) => {
    const newShowQStr = `INSERT INTO messages (message_body,chatMember_id,time_stamp,chat_id) 
                        VALUES($/message_body/,$/chatMember_id/,$/time_stamp/,$/chat_id/) 
                        RETURNING *
                        `

    return await db.one(newShowQStr, {
        message_body: messageObj.message_body,
        chatMember_id: messageObj.user_id,
        chat_id: messageObj.chat_id,
        time_stamp: messageObj.time_stamp
    })

}

module.exports = {
    addNewMessage
}