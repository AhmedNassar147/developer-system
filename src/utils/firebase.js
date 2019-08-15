import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCVkXHsg1UdnwPCq48YlmmSOWXxyfdTx0",
  authDomain: "developer-system-b39ca.firebaseapp.com",
  databaseURL: "https://developer-system-b39ca.firebaseio.com",
  projectId: "developer-system-b39ca",
  storageBucket: "",
  messagingSenderId: "847129242784",
  appId: "1:847129242784:web:df8c362fddce170d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.database();
