// SETUP

const express = require("express");

const app = express();

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});


// ROUTES 

app.get('/', (req, res) => {
    console.log("ça marche chef");
});
