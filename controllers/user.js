const db = require("firebase").database();

module.exports = {

    add: (user) => {
        return new Promise((resolve, reject) => {
            db.ref('users').push({
                username: user.name,
                email: user.email,
                profile_picture : user.imageUrl
            }, (error) => {
                if (error) reject(error)
                else resolve({ 
                    success: true,
                    message: 'Added user successfully'
                })
            })
        })
    },

    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.ref('users').on('value', (snapshot) => {
                resolve(snapshot.val())
            }, (error) => {
                reject(error)
            })
        })
    }

}
