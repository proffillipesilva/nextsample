// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZhj5TA4Yn4EWvwAum_OG5GBrETB-yv3o",
  authDomain: "dwebiii-60254.firebaseapp.com",
  projectId: "dwebiii-60254",
  storageBucket: "dwebiii-60254.appspot.com",
  messagingSenderId: "5951101063",
  appId: "1:5951101063:web:f80d8323d8ff1cb5698022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


export const requestForToken = (setTokenFound, setToken) => {
    return getToken(messaging, {vapidKey: "BDyQRshgg6Qyrf3M52rNBBehWeZU5vDca0mIpGsK8IhCZW"})
    .then((currentToken) => {
        if(currentToken){
            console.log("token atual: ", currentToken);
            setTokenFound(true);
            setToken(currentToken)
        } else {
            console.log("Falta permissao")
        }
    }).catch((err) => console.log("Um erro aconteceu - ", err))
}



export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        })
    })
}