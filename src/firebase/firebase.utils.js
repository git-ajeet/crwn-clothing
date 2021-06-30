import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCGdS5_MI_GzN5IWrjsZCWRQeqIb1fySw",
    authDomain: "crwn-db-ee696.firebaseapp.com",
    projectId: "crwn-db-ee696",
    storageBucket: "crwn-db-ee696.appspot.com",
    messagingSenderId: "340303487991",
    appId: "1:340303487991:web:62b04bbf257e26956a44f2",
    measurementId: "G-ELJGRL2GM9"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;