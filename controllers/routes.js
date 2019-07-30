const routes = require('express').Router()
const user = require('./user')
const shortcut = require('./shortcut')

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

routes.get('/getAllUsers', (req, res) => {
    user.getAllUsers().then(error => {
        res.status(500).send(error)
    }, data => {
        res.status(200).json(data)
    })
})

routes.post('/createUser', (req, res) => {
    user.createUser(req.body.mail, req.body.pass).then(error => {
        res.status(500).send(error)
    }, data => {
        res.status(200).json(data)
    })
})

routes.post('/loginUser', (req, res) => {
    user.loginUser(req.body.mail, req.body.pass).then(error => {
        res.status(500).send(error)
    }, data => {
        res.status(200).json(data)
    })
})

routes.post('/logoutUser', (req, res) => {
    user.logoutUser().then(error => {
        res.status(500).send(error)
    })
})

routes.post('/addShortcut', (req, res) => {
    shortcut.addShortcut({
        link: req.body.link,
        icon: req.body.icon,
        desc: req.body.desc,
        tab: req.body.tab
    }, req.body.uid).then(error => {
        res.status(500).send(error)
    }, data => {
        res.status(200).json(data)
    })
})

module.exports = routes;