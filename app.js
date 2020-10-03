require('dotenv').config()
const express = require("express")
const firebase = require("firebase")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()


app.use(bodyParser.json());
app.use(cors())

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    storageBucket: process.env.STORAGE_BUCKET,
}
firebase.initializeApp(config)

const routes = require("./controllers/routes")
app.use('/', routes)

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000")
});
