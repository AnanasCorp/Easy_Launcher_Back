const db = require("firebase").database();
const auth = require("firebase").auth();

module.exports = {

    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.ref('users').on('value', (snapshot) => {
                resolve(snapshot.val())
            }, (error) => {
                reject(error)
            })
        })
    },

    createUser: (email, password) => {
        return new Promise((resolve, reject) => {
            auth.createUserWithEmailAndPassword(email, password)
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        });
    },

    loginUser: (email, password) => {
        return new Promise((resolve, reject) => {
            auth.signInWithEmailAndPassword(email, password)
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    },

    logoutUser: () => {
        return new Promise((resolve, reject) => {
            auth.signOut().then(() => {
                resolve('success logout'); // Sign-out successful.
            }).catch(error => {
                reject(error)
            })
        })
    }
}
