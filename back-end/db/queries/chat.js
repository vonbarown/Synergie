const db = require('../db')

const getChatByUserId = async (chat_id) => {
    chatQryStr = `
            SELECT chat.id, chat.user_id , users.username
            FROM 
            chat 
            INNER JOIN users on chat.user_id = users.id
            WHERE users.id = $1
        `

    return await db.any(chatQryStr, [chat_id])
}


const getMessagesByChatId = async (chat_id) => {
    const queryStr = `SELECT
                        messages.id,messages.message_body,users.username,messages.time_stamp,
                        users.avatar_url,users.id AS contact_id
                        FROM 
                        messages 
                        INNER JOIN users ON messages.user_id = users.id
                        INNER JOIN chat ON messages.chat_id = chat.id
                        WHERE chat.id = $1
                        `

    return await db.any(queryStr, [chat_id])
}


const addNewChat = async (chatObj) => {
    const newShowQStr = `INSERT INTO chat (chat_type,user_id) 
                        VALUES($/chat_type/,$/user_id/) 
                        RETURNING chat.id
                        `

    let chatId = await db.oneOrNone(newShowQStr, {
        chat_type: chatObj.chat_type,
        user_id: chatObj.user_id,
    })

    // await addNewChatMember({ user_id: chatObj.user_id, chat_id: chatId.id })

    return chatId
}

const addNewChatMember = async (chatMemObj) => {
    console.log('new chat');

    const newChatMemberQStr = `
                        INSERT INTO chatMembers (user_id,chat_id) 
                        VALUES($/user_id/,$/chat_id/) 
                        `

    return await db.one(newChatMemberQStr, {
        user_id: Number(chatMemObj.user_id),
        chat_id: Number(chatMemObj.chat_id)
    })
}

module.exports = {
    getChatByUserId,
    getMessagesByChatId,
    addNewChat,
}