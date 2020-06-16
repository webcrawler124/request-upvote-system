const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
    // for background triggers you must return a value/promise 
    return admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        upvotedOn: []
    });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
    // for background triggers you must return a value/promise
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
});

// // http request 1
// exports.randomNumber = functions.https.onRequest((request, response) => {
//     const number = Math.round(Math.random() * 100);
//     response.send(number.toString());
// }); 

// // http request 2
// exports.toTheDojo = functions.https.onRequest((request, response) => {
//     response.redirect('https://www.thenetninja.co.uk');
// }); 

// // http callable function   
// exports.sayHello = functions.https.onCall((data, context) => {
//     const { name, profession } = data;
//     return `hello, ${name}, you are a ${profession}`;
// });
