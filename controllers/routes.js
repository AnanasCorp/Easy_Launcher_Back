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
    user.getAllUsers().then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/createUser', (req, res) => {
    user.createUser(
        req.body.mail,
        req.body.pass,
        req.body.username
    ).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/loginUser', (req, res) => {
    user.loginUser(req.body.mail, req.body.pass)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error))
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
    }, req.body.uid).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

module.exports = routes;