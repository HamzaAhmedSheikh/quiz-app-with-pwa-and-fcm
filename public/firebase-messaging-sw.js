importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyD8brHfBB-aGAUgf13q6545V_h7R80IeBY",
    authDomain: "quiz-app-with-pwa-and-fcm.firebaseapp.com",
    databaseURL: "https://quiz-app-with-pwa-and-fcm.firebaseio.com",
    projectId: "quiz-app-with-pwa-and-fcm",
    storageBucket: "quiz-app-with-pwa-and-fcm.appspot.com",
    messagingSenderId: "771950518062",
    appId: "1:771950518062:web:90c205d648159a3597a4bf",
    measurementId: "G-58VTGH2B8F"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.messaging();