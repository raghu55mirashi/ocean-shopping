import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyD9qkK8hOGggpQPxhd1EGnmMzMpQaSQTZI",
    authDomain: "ecommerce-020.firebaseapp.com",
    databaseURL: "https://ecommerce-020.firebaseio.com",
    projectId: "ecommerce-020",
    storageBucket: "ecommerce-020.appspot.com",
    messagingSenderId: "717263551585",
    appId: "1:717263551585:web:ddcbb17de32763d757fe20",
    measurementId: "G-XQXJKKPK3T"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase