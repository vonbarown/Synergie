const db = require('../db')


const getAllShows = async () => {
    const queryStr = `SELECT
                        shows.id,title,img_url,
                        username
                        FROM 
                        shows 
                        JOIN users ON user_id = users.id`
    return db.any(queryStr)
}


const getShowsById = async (id) => {
    const queryStr = `SELECT 
                        shows.id,shows.title,shows.img_url,
                        genres.genre_name, users.username
                        FROM shows 
                        INNER JOIN genres ON genre_id = genres.id 
                        INNER JOIN users ON user_id = users.id
                        WHERE shows.id = $1`

    return db.any(queryStr, [id])
}

const addNewShow = async (showObj) => {

    const newShowQStr = `INSERT INTO shows (title, img_url,user_id,genre_id) 
VALUES($/title/,$/img_url/,$/user_id/,$/genre_id/) ON CONFLICT 

`

    return db.one(newShowQStr, {
        title: showObj.title,
        img_url: showObj.img_url,
        user_id: showObj.user_id,
        genre_id: showObj.genre_id
    })
}


const getShowsByGenreId = async (genreId) => db.any("SELECT * from shows WHERE genre_id = $1", [genreId])

const getShowsByUserId = async (userId) => {
    const queryStr = `SELECT shows.id,title,img_url,genre_name from shows JOIN genres ON genre_id = genres.id WHERE user_id = $1`

    return db.any(queryStr, [userId])
}

module.exports = {
    getAllShows,
    getShowsById,
    getShowsByGenreId,
    getShowsByUserId,
    addNewShow
}