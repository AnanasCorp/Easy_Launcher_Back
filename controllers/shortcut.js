const db = require("firebase").database();
require('dotenv').config()

module.exports = {

    getAllShortcuts: () => {
        return new Promise((resolve, reject) => {
          db.ref('shortcuts').on('value', (snapshot) => {
            resolve(snapshot.val())
          }, (error) => {
            reject(error)
          })
        })
    },

    getShortcutsByUserIdAndTabId: (userID, tabId) => {
        return new Promise((resolve, reject) => {
           const shortcuts = {};
           db.ref(`shortcuts/${userID}`)
            .on('value', (data) => {
                if (data.val()) {
                    res = Object.entries(data.val());
                    res.forEach((shortcut) => {
                        if (shortcut[1].tab == tabId) {
                            shortcuts[shortcut[0]] = shortcut[1];
                        }
                    });
                    resolve(shortcuts);
                }
            }, (error) => {
                reject(error);
            });
        })
    },

    addShortcut: (data, userID) => {
        let count = 0;
        db.ref(`shortcuts/${userID}`).on('value', (s) => count = Object.entries(s.val()).length);
        if (count >=  parseInt(process.env.MAX_SHORTCUTS, 10)) {
            return;
        }
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
            db.ref(`shortcuts/${userID}/${shortcutID}`).set(data, (error) => {
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
            db.ref(`shortcuts/${userID}/${shortcutID}`).remove((error) => {
                if (error) reject(error)
                else resolve({ 
                    success: true,
                    message: 'Remove shortcut successfully'
                })
            })
        })
    }
}