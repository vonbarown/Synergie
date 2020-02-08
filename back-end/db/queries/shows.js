const db = require('../db')


const getAllShows = async () => db.any("SELECT * FROM shows")



module.exports = {
    getAllShows
}