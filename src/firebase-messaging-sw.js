importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');

firebase.initializeApp({ 
    apiKey: "AIzaSyDre5m5V_Ll5uRaHHRVJwga16dT7FZE1UM",
    authDomain: "sample-7fafc.firebaseapp.com",
    databaseURL: "https://sample-7fafc.firebaseio.com",
    projectId: "sample-7fafc",
    storageBucket: "sample-7fafc.appspot.com",
    messagingSenderId: "327713409484",
    appId: "1:327713409484:web:a7ee9eb4c5efa3911bb569",
    measurementId: "G-4F55RGD884"
  });
  const messaging = firebase.messaging();
