const db = require('../db')

const getAllGenres = async () => {
    return db.any("SELECT * FROM genres")
}

const addGenre = async (genreObj) => {
    const newGenreQStr = `INSERT INTO genres (genre_name) 
                            VALUES($/genre_name/) RETURNING *`

    return db.one(newGenreQStr, {
        genre_name: genreObj.genre_name,
    })
}

module.exports = {
    getAllGenres,
    addGenre
}