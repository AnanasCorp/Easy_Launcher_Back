const routes = require('express').Router();
const user = require('./user');

routes.get('/', (req, res) => {

    let name = "John Doe";
    let email = "johndoe@gmailcom";
    let imageUrl = "#";

    user.writeUserData(name, email, imageUrl);

    res.json({
        message: 'Bonsoir 🎃'
    });
});

routes.get('routeTest', (req, res) => {
    console.log('reeoizheifueiprh');
});

module.exports = routes;