import React from 'react'
import { Link } from 'react-router-dom'

export const Watchers = ({ watchers }) => {
    return (
        <div className='watchers-on-wall'>
            <h3>Being Watched by:</h3>
            <div className='show-watchers'>
                {
                    watchers.map(watcher => {
                        return (
                            <div className={`watcher-${watcher.watchers_id}`} key={watcher.username}>
                                <Link to={`/users/${watcher.watchers_id}`}>
                                    <img className='watcher-img'
                                        src={watcher.avatar_url}
                                        alt={watcher.username}
                                    />
                                    {watcher.username}
                                </Link>{' '}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}