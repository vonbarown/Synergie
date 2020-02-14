const db = require('../db')


const getMessagesByChatId = async (id) => {
    const queryStr = `SELECT
                        messages.id,messages.message_body,users.username
                        FROM 
                        messages 
                        INNER JOIN chatMembers ON messages.chatMember_id = chatMembers.id
                        INNER JOIN users ON chatMembers.user_id = users.id
                        INNER JOIN chat ON messages.chat_id = chat.id
                        WHERE chat.id = $1
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

module.exports = {
    getMessagesByChatId,
    addNewChat,
}