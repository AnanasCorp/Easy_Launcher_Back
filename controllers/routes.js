const routes = require('express').Router()
const user = require('./user')

routes.get('/', (req, res) => {
    res.json({
        message: 'Bonsoir 🎃'
    })
})

routes.get('/test', (req, res) => {
    res.json({
        message: 'test'
    })
})

routes.get('/add', (req, res) => {
    user.add({
        name: "John Doe",
        email: "johndoe@gmailcom",
        imageUrl: "#"
    }).then(error => {
        res.status(500).send(error)
    }, data => {
        res.status(200).json(data)
    })
})

routes.get('/getAllUsers', (req, res) => {
    user.getAllUsers().then(error => {
        res.status(500).send(error)
    }, data => {
        res.status(200).json(data)
    })
})

routes.get('/createUser', (req, res) => {
    user.createUser('test@mail.com', 'pass');
})

module.exports = routes;