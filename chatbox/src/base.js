import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtd9b76_C5ALOab_ZupZyCe-Z3nGH3Ers",
    authDomain: "chatbox-app-cec51.firebaseapp.com",
    databaseURL: "https://chatbox-app-cec51.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base