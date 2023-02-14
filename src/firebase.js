import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//firebaseの初期化
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoXK-G373Tjyt5p5b0eoYRbd_iwkLfSaA",
    authDomain: "line-clone-app-39035.firebaseapp.com",
    projectId: "line-clone-app-39035",
    storageBucket: "line-clone-app-39035.appspot.com",
    messagingSenderId: "845477912427",
    appId: "1:845477912427:web:6ac9224d1b4bf768ac762e"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();//認証情報 auth関数

export { db, auth };//どのファイルでも呼び出せるようにしている