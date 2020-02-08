const db = require('../db')


const getAllUsers = async () => {
    return db.any("SELECT * FROM users")
}

module.exports = {
    getAllUsers
}