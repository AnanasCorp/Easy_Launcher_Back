const database = require("firebase").database();

module.exports = {

    writeUserData: function(name, email, imageUrl) {
        database.ref('users').push({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }

}

