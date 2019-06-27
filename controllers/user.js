const database = require("firebase").database();

module.exports = {

    writeUserData: (name, email, imageUrl) => {
        database.ref('users').push({
            username: name,
            email: email,
            profile_picture : imageUrl
        })
    },

}

