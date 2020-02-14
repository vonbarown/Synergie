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


const addNewChat = async (chatObj) => {
    const newShowQStr = `INSERT INTO chat (chat_type,user_id) 
                        VALUES($/chat_type/,$/user_id/) 
                        RETURNING chat.id
                        `

    let chatId = await db.one(newShowQStr, {
        chat_type: chatObj.chat_type,
        user_id: chatObj.user_id,
    })

    await addNewChatMember({ user_id: chatObj.user_id, chat_id: chatId.id })

    return chatId
}

const addNewChatMember = async (chatMemObj) => {
    const newChatMemberQStr = `
                        INSERT INTO chatMembers (user_id,chat_id) 
                        VALUES($/user_id/,$/chat_id/) 
                        ON CONFLICT (user_id) DO NOTHING
                        `

    return await db.one(newChatMemberQStr, {
        user_id: Number(chatMemObj.user_id),
        chat_id: Number(chatMemObj.chat_id)
    })
}

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
    getMessagesByChatId,
    addNewChat,
    addNewMessage
}