const db = require('../db')

const getAllGenres = async () => {
    return db.any("SELECT * FROM genres")
}

module.exports = {
    getAllGenres
}