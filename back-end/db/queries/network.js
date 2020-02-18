const db = require('../db')

const getNetworkByUserId = async (chat_id) => {
    networkQuery = `
            SELECT network.user_id , network.contact_id
            FROM 
            network
            INNER JOIN users on network.user_id = users.id
            WHERE users.id = $1
        `

    return await db.any(networkQuery, [chat_id])
}


// const getMessagesByChatId = async (chat_id) => {
//     const queryStr = `SELECT
//                         messages.id,messages.message_body,users.username,messages.time_stamp,
//                         users.avatar_url,users.id AS contact_id
//                         FROM 
//                         messages 
//                         INNER JOIN users ON messages.user_id = users.id
//                         INNER JOIN chat ON messages.chat_id = chat.id
//                         WHERE chat.id = $1
//                         `

//     return await db.any(queryStr, [chat_id])
// }


const addNewNetwork = async (chatObj) => {
    const newShowQStr = `INSERT INTO network (,user_id,contact_id) 
                        VALUES($/user_id/,$/contact_id/) 
                        ON CONFLICT (contact_id) DO NOTHING
                        `

    let chatId = await db.oneOrNone(newShowQStr, {
        chat_type: chatObj.chat_type,
        user_id: chatObj.user_id,
        contact_id: chatObj.contact_id
    })

    // await addNewChatMember({ user_id: chatObj.user_id, chat_id: chatId.id })

    return chatId
}

module.exports = {
    getNetworkByUserId,
    addNewNetwork,
}