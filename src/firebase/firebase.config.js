// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_54HKj1ImNNZwjNtZVcaLFaqUChThAs4",
  authDomain: "dragon-news-client-c041a.firebaseapp.com",
  projectId: "dragon-news-client-c041a",
  storageBucket: "dragon-news-client-c041a.appspot.com",
  messagingSenderId: "1043930593737",
  appId: "1:1043930593737:web:cd7f3aac54523722191018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;