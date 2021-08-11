const routes = require('express').Router()

const shortcut = require('./shortcut')
const tabs = require('./tabs')
const user = require('./user')

//TODO : refacto en plusieurs fichiers de routes dans un folder spécifique

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

// User routes

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

// Shortcuts routes

routes.get('/getAllShortcuts', (req, res) => {
    tabs.getAllShortcuts().then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.get('/getShortcuts/:id/:tab', (req, res) => {
    shortcut.getShortcutsByUserIdAndTabId(req.params.id, req.params.tab).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/addShortcut', (req, res) => {
    shortcut.addShortcut({
        link: req.body.link,
        desc: req.body.desc,
        tab: req.body.tab
    }, req.body.uid).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/updateShortcut', (req, res) => {
    shortcut.updateShortcut({
        link: req.body.link,
        desc: req.body.desc,
        tab: req.body.tab
    }, req.body.uid, req.body.sid).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/removeShortcut', (req, res) => {
    shortcut.removeShortcut(req.body.uid, req.body.sid).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

// Tabs routes

routes.get('/getAllTabs', (req, res) => {
    tabs.getAllTabs().then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.get('/getTabs/:id', (req, res) => {
    tabs.getTabsByUserId(req.params.id).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/addTab', (req, res) => {
    tabs.addTab({
        name: req.body.name
    }, req.body.uid).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

routes.post('/removeTab', (req, res) => {
    tabs.removeTab(req.body.tid, req.body.uid).then(data => {
        res.status(200).json(data)
    }, error => {
        res.status(500).send(error)
    })
})

module.exports = routes;
