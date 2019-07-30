const db = require("firebase").database();
const auth = require("firebase").auth();

module.exports = {

    add: (data) => {
        return new Promise((resolve, reject) => {
            db.ref('data').push({
                data
            }, (error) => {
                if (error) reject(error)
                else resolve({ 
                    success: true,
                    message: 'Added data successfully'
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
    },

    createUser: (email, password) => {
        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(`${errorMessage}: ${errorCode}`);
            // ...
        });
    }

}
