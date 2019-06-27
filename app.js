const express = require("express");
const firebase = require("firebase");
const app = express();

const config = {
    apiKey: "AIzaSyDKkxuMhuZtzQa0Y7OAFYHmaVROYfSGB1s",
    authDomain: "easy-launcher-6669.firebaseapp.com",
    databaseURL: "https://easy-launcher-6669.firebaseio.com",
    storageBucket: "easy-launcher-6669.appspot.com",
};
firebase.initializeApp(config);

const routes = require("./controllers/routes");
app.use('/', routes);

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000"); 
});
