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
    }
}