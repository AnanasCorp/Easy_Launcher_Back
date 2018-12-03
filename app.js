// SETUP

const express = require("express");
var firebase = require("firebase");

const app = express();

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");

    var config = {
        apiKey: "AIzaSyDKkxuMhuZtzQa0Y7OAFYHmaVROYfSGB1s",
        authDomain: "easy-launcher-6669.firebaseapp.com",
        databaseURL: "https://easy-launcher-6669.firebaseio.com",
        storageBucket: "easy-launcher-6669.appspot.com",
    };
    firebase.initializeApp(config);
});


// ROUTES 

app.get('/', (req, res) => {
    res.json({
        message: 'Bonsoir 🎃'
    });
});