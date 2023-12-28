importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAtZGXT3z_GBBv-cuGCM5QfJzdmKX9uHJ8",
  authDomain: "ezewin-d7515.firebaseapp.com",
  projectId: "ezewin-d7515",
  storageBucket: "ezewin-d7515.appspot.com",
  messagingSenderId: "546638602432",
  appId: "1:546638602432:web:21c03a619b7db6f4650d25",
  measurementId: "G-GSX15T2T0B"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.error(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});