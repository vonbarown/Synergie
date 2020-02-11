import React from 'react'

export const MasterList = (props) => {
    for (let i = 0; i < props.masterList.length; i++) {
        return (
            <div className='show-info'>
                <p>{el}</p>
                <p>{el.genre_id}</p>
                <p>Being Watched by:{'  '}
                    <Link to={`/shows/${el.id}/user/${el.user_id}`}>
                        {el.username}
                    </Link>
                </p>
            </div>
        )

    }
} 