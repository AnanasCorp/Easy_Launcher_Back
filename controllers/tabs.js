const db = require('firebase').database()
const auth = require("firebase").auth()
const utils = require('../utils')

module.exports = {
  getAllTabs: () => {
    return new Promise((resolve, reject) => {
      db.ref('tabs').on('value', (snapshot) => {
        resolve(snapshot.val())
      }, (error) => {
        reject(error)
      })
    })
  },

  getTabsByUserId: (userId) => {
    if (auth.currentUser.uid != userId) {
      return;
    }
    return new Promise((resolve, reject) => {
      db.ref(`tabs/${userId}`).on('value', (snapshot) => {
        resolve(utils.convertSnapshotToArray(snapshot))
      }, (error) => {
        reject(error)
      })
    })
  },

  addTab: (data, userId) => {   
    let count = 0;
    db.ref(`tabs/${userId}`).on('value', (t) => count = Object.entries(t.val()).length);
    if (count >=  parseInt(process.env.MAX_TABS, 10)) {
        return;
    }

    if (auth.currentUser.uid != userId) {
      return;
    }
    return new Promise((resolve, reject) => {
      db.ref(`tabs/${userId}`).push(data, (error) => {
        if (error) reject(error)
        else resolve({
          success: true,
          messge: 'Added tab successfully'
        })
      })
    })
  },

  removeTab: (tabId, userId) => {
    if (auth.currentUser.uid != userId) {
      return;
    }

    return new Promise((resolve, reject) => {
      db.ref(`tabs/${userId}/${tabId}`).remove((error) => {
          if (error) reject(error)
          else resolve({
              success: true,
              message: 'Removed tab successfully'
          })
      })
  })
  }
}
