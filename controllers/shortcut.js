const db = require("firebase").database();

module.exports = {

    addShortcut: (data, userID) => {
        return new Promise((resolve, reject) => {
            db.ref(`shortcuts/${userID}`).push(data, (error) => {
                if (error) reject(error)
                else resolve({ 
                    success: true,
                    message: 'Added shortcut successfully'
                })
            })
        })
    },

    updateShortcut: (data, userID, shortcutID) => {
        return new Promise((resolve, reject) => {
            db.ref(`shortcuts/${userID}/-${shortcutID}`).set(data, (error) => {
                if (error) reject(error)
                else resolve({ 
                    success: true,
                    message: 'Updated shortcut successfully'
                })
            })
        })
    },

    removeShortcut: (userID, shortcutID) => {
        return new Promise((resolve, reject) => {
            db.ref(`shortcuts/${userID}/-${shortcutID}`).remove((error) => {
                if (error) reject(error)
                else resolve({ 
                    success: true,
                    message: 'Remove shortcut successfully'
                })
            })
        })
    }
}