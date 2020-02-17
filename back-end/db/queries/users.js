const db = require('../db')


const getAllUsers = async () => {
    return await db.any("SELECT id,username,avatar_url FROM users")
}

const getUsersById = async (id) => {
    return await db.any("SELECT id,username,avatar_url from users WHERE id = $1", [id])
}

const addNewUser = async (userObj) => {

    const newUserQStr = `INSERT INTO users (username, avatar_url,password_digest) 
VALUES($/username/,$/avatar_url/,$/password_digest/) RETURNING id,username,avatar_url`

    return await db.one(newUserQStr, {
        username: userObj.username,
        avatar_url: userObj.avatar_url,
        password_digest: userObj.password
    })
}

const getUserByUsername = async (username) => {
    let user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])
    return user
}

const updateUser = async (userObj, id) => {

    try {
        if (userObj.username) {
            await db.any(
                `UPDATE users SET username = $/username/,
                WHERE id = $/id/ RETURNING RETURNING id,username,avatar_url`,
                {
                    username: userObj.username,
                    id
                }
            );
        } else if (userObj.avatar_url) {
            await db.any(
                `UPDATE users SET avatar_url= $/avatar_url/ WHERE id = $/id/ RETURNING RETURNING id,username,avatar_url`,
                {
                    avatar_url: userObj.avatar_url,
                    id
                }
            );
        } else if (userObj.password) {
            await db.any(
                `UPDATE researchers SET password_digest = $/password_digest/ WHERE id = $/id/
                RETURNING id,username,avatar_url
                `,
                {
                    password_digest: userObj.password,
                    id
                }
            );
        }

        next();
    } catch (error) {
        res.status(404);
        res.json({
            status: "error",
            message: "researcher not found",
            payload: null
        });
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    getUsersById,
    addNewUser,
    getUserByUsername,
    updateUser
}