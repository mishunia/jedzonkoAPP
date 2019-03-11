import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBnNVfHzTRdJ2mGIez3OSk4olvDeZa1soU',
  authDomain: 'jedzonkoapp.firebaseapp.com',
  databaseURL: 'https://jedzonkoapp.firebaseio.com',
  projectId: 'jedzonkoapp',
  storageBucket: 'jedzonkoapp.appspot.com',
  messagingSenderId: '339747444160'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }
export default base
