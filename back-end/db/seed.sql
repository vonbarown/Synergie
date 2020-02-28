DROP DATABASE if exists tvwatchlistapp;
CREATE DATABASE tvwatchlistapp;

\c tvwatchlistapp

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
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
    user_id VARCHAR REFERENCES users(id),
    genre_id INT REFERENCES genres(id)
);

CREATE TABLE showWatchers (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    show_id INT REFERENCES shows(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR NOT NULL,
    user_id VARCHAR REFERENCES users(id),
    show_id INT REFERENCES shows(id),
    edited BOOLEAN NOT NULL
);

CREATE TABLE network (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR,
    contact_id VARCHAR REFERENCES  users(id),
    role VARCHAR
);


-- INSERT GENRES
INSERT INTO genres (genre_name) 
VALUES 
('Adventure'), -- 1
('Drama'), -- 2
('Comedy'), -- 3
('Fantasy'); -- 4

-- INSERT USERS
INSERT INTO users (username, avatar_url,password_digest,id) 
VALUES 
('Jon Snow', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kit-harington-hair-jon-snow-1569167827.jpg?crop=0.439xw:0.878xh;0.0221xw,0.0306xh&resize=480:*','$2b$12$Qoy2NsVREpryvyLbl8Aicex0cHdUb9Vma/NJI0JP0okivHZqesD0a','e440a39e-cea2-498c-8080-700c520b77b3'), -- 1
('Daenerys Targaryen', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/36/1504608500-daenerys.jpg?crop=0.665xw:1.00xh;0.0950xw,0&resize=480:*','$2b$12$aNv9N4O6D3Rqj/k69QZmuecoILmdIuxOmxov.5Niz0ihEC2g9FW9y','34bab52c-caec-4dca-8895-78807cc30016'), -- 2
('Michael Scott', 'https://i1.sndcdn.com/avatars-000162505694-i81i0k-t500x500.jpg','$2b$12$OJ2Kc75eXgLddy2.iFqxcuCMlN1.i25Jze6JDUR7Pjv4.ZdWDR.cm','c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89'), -- 3
('Pam Beesly', 'https://i1.sndcdn.com/avatars-000150274248-xnvnyn-t500x500.jpg','$2b$12$tfAxX4n9f2jJ65Sy3lS41OoK07pR18782Vz.3VmI9gpTN0L7QNCXa','157a2ad3-b941-4455-ac71-3c1fff7d689d'); -- 4

-- INSERT SHOWS
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES 
('Game of Thrones', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 'e440a39e-cea2-498c-8080-700c520b77b3', 4),
('The Flash', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 'e440a39e-cea2-498c-8080-700c520b77b3', 1),
('Naruto Shippūden', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg', 'e440a39e-cea2-498c-8080-700c520b77b3', 4),
('Greys Anatomy', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/eqgIOObafPJitt8JNh1LuO2fvqu.jpg', 'c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89', 2),
('The Simpsons', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/yTZQkSsxUFJZJe67IenRM0AEklc.jpg', 'e440a39e-cea2-498c-8080-700c520b77b3', 3);

-- INSERT showWatchers
INSERT INTO showWatchers (user_id,show_id) 
VALUES 
('e440a39e-cea2-498c-8080-700c520b77b3',1),
('34bab52c-caec-4dca-8895-78807cc30016',1),
('c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89',1),
('e440a39e-cea2-498c-8080-700c520b77b3',2),
('c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89',2),
('157a2ad3-b941-4455-ac71-3c1fff7d689d',2),
('e440a39e-cea2-498c-8080-700c520b77b3',3),
('34bab52c-caec-4dca-8895-78807cc30016',3),
('c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89',4),
('157a2ad3-b941-4455-ac71-3c1fff7d689d',4),
('e440a39e-cea2-498c-8080-700c520b77b3',5),
('157a2ad3-b941-4455-ac71-3c1fff7d689d',5);

-- INSERT COMMENTS
INSERT INTO comments (comment_body, user_id, show_id,edited)
VALUES 
('BEST SHOW EVER!!', 'e440a39e-cea2-498c-8080-700c520b77b3', 1,'false'),
('Of course you would think so Jon', '34bab52c-caec-4dca-8895-78807cc30016', 1,'false');

-- INSERT network
INSERT INTO network (user_id,contact_id,role) 
VALUES 
('e440a39e-cea2-498c-8080-700c520b77b3','c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89','Member'),
('34bab52c-caec-4dca-8895-78807cc30016','e440a39e-cea2-498c-8080-700c520b77b3','Member'),
('c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89','157a2ad3-b941-4455-ac71-3c1fff7d689d','Member'),
('157a2ad3-b941-4455-ac71-3c1fff7d689d','34bab52c-caec-4dca-8895-78807cc30016','Member'),
('157a2ad3-b941-4455-ac71-3c1fff7d689d','c4cb08b9-afae-4c8a-bcd0-d94e4e1fbf89','Member');