const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const challengeRoutes = require("./routes/challenges")
const authRoutes = require("./routes/auth")
const leaderboardRoutes = require("./routes/leaderboard")

dotenv.config();
dotenv.config({ path: `.env.${process.env.ENVIRONMENT}` });

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use("/challenges", challengeRoutes)
app.use("/auth", authRoutes)
app.use("/leaderboard", leaderboardRoutes)


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data})
})

console.log(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);

mongoose

  .connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,{
      "authSource": "admin",
      "user": process.env.DB_USER,
      "pass": process.env.DB_PASSWORD,
    }
  )
  .then(() => {
    app.listen(80);
  })
  .catch((error) => {
    console.log(error);
  });