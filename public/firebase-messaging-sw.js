// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZhj5TA4Yn4EWvwAum_OG5GBrETB-yv3o",
    authDomain: "dwebiii-60254.firebaseapp.com",
    projectId: "dwebiii-60254",
    storageBucket: "dwebiii-60254.appspot.com",
    messagingSenderId: "5951101063",
    appId: "1:5951101063:web:f80d8323d8ff1cb5698022"
  };
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/sono.jpg'
  };
 

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});