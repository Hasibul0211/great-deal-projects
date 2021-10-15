import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const fireBaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default fireBaseAuthentication;