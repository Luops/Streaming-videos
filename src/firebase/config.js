import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBCuy0CveBiTlnudklSavyHgmgrzTQ1Qzc",
  authDomain: "streaming-videos-e359e.firebaseapp.com",
  projectId: "streaming-videos-e359e",
  storageBucket: "streaming-videos-e359e.appspot.com",
  messagingSenderId: "418074130063",
  appId: "1:418074130063:web:7b0d9a547ecb2a9130a2fa",
  measurementId: "G-LJTTFE9N4Q"
};

const app = initializeApp(firebaseConfig);

const dbFire = getFirestore(app)
export { dbFire }
export const storage = getStorage(app)