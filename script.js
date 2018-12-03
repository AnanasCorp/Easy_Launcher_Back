import firebase from "firebase";

var database = firebase.database();

var userId = "1";
var name = "John Doe";
var email = "johndoe@gmailcom";
var imageUrl = "#";


writeUserData(userId, name, email, imageUrl);


function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}