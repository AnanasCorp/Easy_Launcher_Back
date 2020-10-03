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
    projectId: process.env.PROJECT_ID,
}
const PORT = process.env.PORT || 5000;
firebase.initializeApp(config)

const routes = require("./controllers/routes")
app.use('/', routes)

app.listen(PORT, () => {
    console.log("Listening on http://localhost:5000")
});
