require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("./auth/passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const genresRouter = require("./routes/genres");
const showsRouter = require("./routes/shows");
const commentsRouter = require("./routes/comments");
const authRouter = require("./routes/auth");
const networkRouter = require("./routes/network");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../front-end/build")));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/genres", genresRouter);
app.use("/api/shows", showsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/auth", authRouter);
app.use("/api/network", networkRouter);
// app.use('/api/message', messageRouter)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../front-end/build/index.html"));
});

module.exports = app;
