import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLNlJ2i1-spgkRWGd5Z-hAJIMiDTZis8k",
  authDomain: "recettes-cuisine-2c518.firebaseapp.com",
  databaseURL: "https://recettes-cuisine-2c518.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
