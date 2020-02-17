const db = require('../db')


const getAllUsers = async () => {
    return await db.any("SELECT id,username,avatar_url FROM users")
}

const getUsersById = async (id) => {
    return await db.any("SELECT id,username,avatar_url from users WHERE id = $1", [id])
}

const addNewUser = async (userObj) => {

    let avatar_url = userObj.avatar_url

    if (avatar_url === '') {
        avatar_url = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVNvzwx7wJwD8DQM_nzGcl3hyBLEevUfKLOU3bv5X90J7_QExP`
    }

    const newUserQStr = `INSERT INTO users (username, avatar_url,password_digest) 
VALUES($/username/,$/avatar_url/,$/password_digest/) RETURNING id,username,avatar_url`

    return await db.one(newUserQStr, {
        username: userObj.username,
        avatar_url: avatar_url,
        password_digest: userObj.password
    })
}

const getUserByUsername = async (username) => {
    let user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])
    return user
}


module.exports = {
    getAllUsers,
    getUsersById,
    addNewUser,
    getUserByUsername,
}