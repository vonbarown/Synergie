const db = require('../db')

const getNetworkByUserId = async (chat_id) => {
    networkQuery = `
            SELECT network.user_id , network.contact_id AS id, users.username AS name,
            users.avatar_url AS  photoUrl,
            network.role
            FROM 
            network
            INNER JOIN users on network.contact_id = users.id
            WHERE network.user_id = $1 
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
    const newShowQStr = `INSERT INTO network (user_id,contact_id,role) 
                        VALUES($/user_id/,$/contact_id/,$/role/) 
                        `

    let chatId = await db.oneOrNone(newShowQStr, {
        user_id: chatObj.user_id,
        contact_id: chatObj.contact_id,
        role: 'Member'
    })

    // await addNewChatMember({ user_id: chatObj.user_id, chat_id: chatId.id })

    return chatId
}

module.exports = {
    getNetworkByUserId,
    addNewNetwork,
}