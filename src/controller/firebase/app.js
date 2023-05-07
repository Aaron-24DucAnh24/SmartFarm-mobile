import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
// import { getMessaging } from "firebase/messaging"
import firebaseConfig from "./config"

const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)
// const messaging = getMessaging(firebaseApp)

export default firebaseApp
export { db }