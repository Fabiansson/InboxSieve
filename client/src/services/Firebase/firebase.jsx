import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = require('../../config/firebase-config').default;


class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    doDeleteUser = () =>
    this.auth.currentUser.delete();

    doGetIdToken = () =>
    this.auth.currentUser.getIdToken();
}



export default Firebase;