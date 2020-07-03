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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    console.log(collectionRef)
    const batch = firestore.batch()

    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        console.log(newDocRef)
        batch.set(newDocRef, obj)
    })
    batch.commit()
}

export const convertCollectionSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumalator, collection) => {
        accumalator[collection.title.toLowerCase()] = collection
        return accumalator
    }, {})
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase