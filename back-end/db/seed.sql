DROP DATABASE if exists tvwatchlistapp;
CREATE DATABASE tvwatchlistapp;

\c tvwatchlistapp

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    avatar_url VARCHAR NOT NULL,
    password_digest VARCHAR NOT NULL
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    title VARCHAR UNIQUE NOT NULL,
    img_url VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    genre_id INT REFERENCES genres(id)
);

CREATE TABLE showWatchers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    show_id INT REFERENCES shows(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    show_id INT REFERENCES shows(id)
);

-- INSERT GENRES
INSERT INTO genres (genre_name) VALUES ('Adventure'); -- 1
INSERT INTO genres (genre_name) VALUES ('Drama'); -- 2
INSERT INTO genres (genre_name) VALUES ('Comedy'); -- 3
INSERT INTO genres (genre_name) VALUES ('Fantasy'); -- 4

-- INSERT USERS
INSERT INTO users (username, avatar_url,password_digest) VALUES ('Jon Snow', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kit-harington-hair-jon-snow-1569167827.jpg?crop=0.439xw:0.878xh;0.0221xw,0.0306xh&resize=480:*','$2b$12$Qoy2NsVREpryvyLbl8Aicex0cHdUb9Vma/NJI0JP0okivHZqesD0a'); -- 1
INSERT INTO users (username, avatar_url,password_digest) VALUES ('Daenerys Targaryen', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/36/1504608500-daenerys.jpg?crop=0.665xw:1.00xh;0.0950xw,0&resize=480:*','$2b$12$aNv9N4O6D3Rqj/k69QZmuecoILmdIuxOmxov.5Niz0ihEC2g9FW9y'); -- 2
INSERT INTO users (username, avatar_url,password_digest) VALUES ('Michael Scott', 'https://i1.sndcdn.com/avatars-000162505694-i81i0k-t500x500.jpg','$2b$12$OJ2Kc75eXgLddy2.iFqxcuCMlN1.i25Jze6JDUR7Pjv4.ZdWDR.cm'); -- 3
INSERT INTO users (username, avatar_url,password_digest) VALUES ('Pam Beesly', 'https://i1.sndcdn.com/avatars-000150274248-xnvnyn-t500x500.jpg','$2b$12$tfAxX4n9f2jJ65Sy3lS41OoK07pR18782Vz.3VmI9gpTN0L7QNCXa'); -- 4

-- INSERT SHOWS
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Game of Thrones', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 1, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Flash', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 1, 1);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Naruto Shippūden', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg', 1, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Greys Anatomy', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/eqgIOObafPJitt8JNh1LuO2fvqu.jpg', 3, 2);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Simpsons', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/yTZQkSsxUFJZJe67IenRM0AEklc.jpg', 1, 3);

-- INSERT showWatchers
INSERT INTO showWatchers (user_id,show_id) VALUES (1,1);
INSERT INTO showWatchers (user_id,show_id) VALUES (2,1);
INSERT INTO showWatchers (user_id,show_id) VALUES (3,1);
INSERT INTO showWatchers (user_id,show_id) VALUES (1,2);
INSERT INTO showWatchers (user_id,show_id) VALUES (3,2);
INSERT INTO showWatchers (user_id,show_id) VALUES (4,2);
INSERT INTO showWatchers (user_id,show_id) VALUES (1,3);
INSERT INTO showWatchers (user_id,show_id) VALUES (2,3);
INSERT INTO showWatchers (user_id,show_id) VALUES (3,4);
INSERT INTO showWatchers (user_id,show_id) VALUES (4,4);
INSERT INTO showWatchers (user_id,show_id) VALUES (1,5);
INSERT INTO showWatchers (user_id,show_id) VALUES (4,5);


-- INSERT COMMENTS
INSERT INTO comments (comment_body, user_id, show_id)
VALUES ('BEST SHOW EVER!!', 1, 1);
INSERT INTO comments (comment_body, user_id, show_id)
VALUES ('Of course you would think so Jon', 2, 1);

