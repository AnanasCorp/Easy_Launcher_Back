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

    createUser: (email, password, username) => {
        let count = 0;
        db.ref('users').on('value', (u) => count = Object.entries(u.val()).length);
        if (count >=  parseInt(process.env.MAX_USERS, 10)) {
            return;
        }
        return new Promise((resolve, reject) => {
            auth.createUserWithEmailAndPassword(email, password)
            .then(createdUserData => createdUserData.user.updateProfile({ displayName: username }))
            .then(() => resolve({ success: true }))
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
