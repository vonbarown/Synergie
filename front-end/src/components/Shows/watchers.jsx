import React from "react";
import { Link } from "react-router-dom";

export const Watchers = ({ watchers }) => {
  const watcherSet = new Set(watchers);

  return (
    <div className="watchers-on-wall">
      <h3>Being Watched by:</h3>
      <div className="show-watchers">
        {Array.from(watcherSet).map((watcher) => {
          return (
            <div
              className={`watcher-${watcher.watchers_id} `}
              key={watcher.username}
            >
              <Link to={`/users/${watcher.watchers_id}`} className="watcher">
                <img
                  className="watcher-img"
                  src={watcher.avatar_url}
                  alt={watcher.username}
                />
                <p className="name">{watcher.username}</p>
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};
