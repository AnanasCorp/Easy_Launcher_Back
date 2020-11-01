const db = require('firebase').database()

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
