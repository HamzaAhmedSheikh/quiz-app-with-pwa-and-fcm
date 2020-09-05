import firebase from 'firebase';


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

  const messaging = firebase.messaging();

  export const initNotification = () => {
      Notification.requestPermission().then((permission) => {

          console.log(permission)

        if (permission === 'granted') {

            messaging.getToken().then((currentToken) => {

            if (currentToken) {
                
                console.log("Here is your token ==> " , currentToken)
          
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
          
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
 
          });

        }

})
}