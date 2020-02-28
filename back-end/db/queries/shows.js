const db = require('../db')


const getAllShows = async () => {
    const queryStr = `SELECT
                        shows.id,title,img_url,showWatchers.user_id 
                        AS watchers_id, users.username,
                        genres.genre_name,users.avatar_url, shows.user_id
                        FROM 
                        shows 
                        INNER JOIN showWatchers ON shows.id = show_id
                        INNER JOIN users ON showWatchers.user_id = users.id
                        INNER JOIN genres ON genres.id = shows.genre_id
                        ORDER BY shows.id DESC
                        `

    return await db.any(queryStr)
}


const getShowsById = async (id) => {
    const queryStr = `SELECT 
                        shows.id,shows.title,shows.img_url,
                        genres.genre_name, users.username
                        FROM shows 
                        INNER JOIN genres ON genre_id = genres.id 
                        INNER JOIN users ON user_id = users.id
                        WHERE shows.id = $1`

    return await db.any(queryStr, [id])
}

const addNewShow = async (showObj) => {
    // console.log(showObj);

    const newShowQStr = `INSERT INTO shows (title, img_url,user_id,genre_id,id) 
                        VALUES($/title/,$/img_url/,$/user_id/,$/genre_id/,$/id/) 
                        ON CONFLICT (title) DO UPDATE SET title=EXCLUDED.title
                        RETURNING shows.id
                        `

    let showId = await db.one(newShowQStr, {
        title: showObj.title,
        img_url: showObj.img_url,
        user_id: showObj.user_id,
        genre_id: showObj.genre_id,
        id: showObj.show_id
    })

    await addNewShowWatcher({ user_id: showObj.user_id, show_id: showId.id })

    return showId
}

const addNewShowWatcher = async (watcherObj) => {
    const newShowWatcherQStr = `
                        INSERT INTO showWatchers (user_id,show_id) 
                        VALUES($/user_id/,$/show_id/) RETURNING *
                        `

    return await db.one(newShowWatcherQStr, {
        user_id: Number(watcherObj.user_id),
        show_id: Number(watcherObj.show_id)
    })
}



const getShowsByGenreId = async (genreId) => await db.any("SELECT * from shows WHERE genre_id = $1", [genreId])

const getShowsByUserId = async (userId) => {
    const queryStr = `SELECT 
                    showWatchers.user_id, shows.title, 
                    shows.img_url, shows.id, genre_name
                    FROM 
                    showWatchers 
                    INNER JOIN shows ON shows.id = show_id
                    INNER JOIN genres ON genres.id = genre_id
                    WHERE showWatchers.user_id = $1
                    `

    return await db.any(queryStr, [userId])
}

module.exports = {
    getAllShows,
    getShowsById,
    getShowsByGenreId,
    getShowsByUserId,
    addNewShow,
    addNewShowWatcher
}