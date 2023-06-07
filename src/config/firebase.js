import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native"
// import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyBkIHZOCDV4W4qWqq1Q9ojy0NOXSqMgo8M",
    authDomain: "barber-base.firebaseapp.com",
    projectId: "barber-base",
    storageBucket: "barber-base.appspot.com",
    messagingSenderId: "639585427450",
    appId: "1:639585427450:web:789b23d0555e5ee76bce43",
    measurementId: "G-CHJ0KG0CHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeApp(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
// const analytics = getAnalytics(app);