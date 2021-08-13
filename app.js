require('dotenv').config()
const express = require("express")
const firebase = require("firebase")
const cors = require("cors")
const app = express()
const rateLimit = require("express-rate-limit");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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


// API Rate limiter
const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 120 // limit each IP to 100 requests per windowMs
});

app.set('trust proxy', 1); // see https://expressjs.com/en/guide/behind-proxies.html
  
//  apply to all requests
app.use(limiter);

const routes = require("./controllers/routes")
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});
