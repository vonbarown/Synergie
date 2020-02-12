const db = require('../db')


const getAllUsers = async () => {
    return db.any("SELECT id,username,avatar_url FROM users")
}

const getUsersById = async (id) => {
    return db.oneOrNone("SELECT id,username,avatar_url from users WHERE id = $1", [id])
}

const addNewUser = async (userObj) => {

    const newUserQStr = `INSERT INTO users (username, avatar_url,password_digest) 
VALUES($/username/,$/avatar_url/,$/password_digest/) RETURNING id,username,avatar_url`

    return db.one(newUserQStr, {
        username: userObj.username,
        avatar_url: userObj.avatar_url,
        password_digest: userObj.password_digest
    })
}

module.exports = {
    getAllUsers,
    getUsersById,
    addNewUser
}