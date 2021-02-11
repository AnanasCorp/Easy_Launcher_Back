const db = require('firebase').database()
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
    return new Promise((resolve, reject) => {
      db.ref(`tabs/${userId}`).on('value', (snapshot) => {
        resolve(utils.convertSnapshotToArray(snapshot))
      }, (error) => {
        reject(error)
      })
    })
  },

  addTab: (data, userId) => {
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
