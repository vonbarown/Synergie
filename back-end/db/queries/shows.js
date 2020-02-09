const db = require('../db')


const getAllShows = async () => db.any("SELECT * FROM shows JOIN users ON user_id = users.id")


const getShowsById = async (id) => db.any("SELECT * from shows WHERE id = $1", [id])

const addNewShow = async (showObj) => {

    const newShowQStr = `INSERT INTO shows (title, img_url,user_id,genre_id) 
VALUES($/title/,$/img_url/,$/user_id/,$/genre_id/) RETURNING *`

    return db.one(newShowQStr, {
        title: showObj.title,
        img_url: showObj.img_url,
        user_id: showObj.user_id,
        genre_id: showObj.genre_id
    })
}


const getShowsByGenreId = async (genreId) => db.any("SELECT * from shows WHERE genre_id = $1", [genreId])

const getShowsByUserId = async (userId) => {
    const queryStr = `SELECT * from shows WHERE user_id = $1`

    return db.any(queryStr, [userId])
}

module.exports = {
    getAllShows,
    getShowsById,
    getShowsByGenreId,
    getShowsByUserId,
    addNewShow
}