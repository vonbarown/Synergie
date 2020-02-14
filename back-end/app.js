const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('./auth/passport')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const genresRouter = require('./routes/genres')
const showsRouter = require('./routes/shows')
const commentsRouter = require('./routes/comments')
const authRouter = require('./routes/auth')
const chatRouter = require('./routes/chat')
const messageRouter = require('./routes/message')



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "STILL_NOT_A_GOOD_SECRET",
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter)
app.use('/api/shows', showsRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/auth', authRouter)
app.use('/api/chat', chatRouter)
app.use('/api/message', messageRouter)

module.exports = app;
