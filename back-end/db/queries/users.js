const db = require('../db')


const getAllUsers = async () => {
    return db.any("SELECT * FROM users")
}

const getUsersById = async (id) => {
    return db.any("SELECT * from users WHERE id = $1", [id])
}

const addNewUser = async (userObj) => {

    const newUserQStr = `INSERT INTO users (username, avatar_url) 
VALUES($/username/,$/avatar_url/) RETURNING *`

    return db.one(newUserQStr, {
        username: userObj.username,
        avatar_url: userObj.avatar_url
    })
}

module.exports = {
    getAllUsers,
    getUsersById,
    addNewUser
}