const db = require('../db')

const getAllGenres = async () => {
    return await db.any("SELECT * FROM genres")
}

const addGenre = async (genreObj) => {
    const newGenreQStr = `INSERT INTO genres (genre_name) 
                            VALUES($/genre_name/) RETURNING *`

    return await db.one(newGenreQStr, {
        genre_name: genreObj.genre_name,
    })
}

module.exports = {
    getAllGenres,
    addGenre
}