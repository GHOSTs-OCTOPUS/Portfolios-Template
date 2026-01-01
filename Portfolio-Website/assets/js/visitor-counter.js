// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8WWMPDqR0IKUQ7XBWrtvZsyqHb9B5z-o",
    authDomain: "my-portfolio-visitor786.firebaseapp.com",
    projectId: "my-portfolio-visitor786",
    storageBucket: "my-portfolio-visitor786.firebasestorage.app",
    messagingSenderId: "954489853952",
    appId: "1:954489853952:web:e772af6c4353fb55d1a0e5",
    measurementId: "G-FQ20S2L08Q"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Reference to the visitor count document
const counterRef = doc(db, "visitors", "counter");

// Function to update visitor count
async function updateVisitorCount() {
  try {
    const docSnap = await getDoc(counterRef);

    if (docSnap.exists()) {
      let newCount = docSnap.data().count + 1;
      await updateDoc(counterRef, { count: newCount });
      document.getElementById("visitorCount").innerText = newCount;
    } else {
      await setDoc(counterRef, { count: 1 });
      document.getElementById("visitorCount").innerText = "1";
    }
  } catch (error) {
    console.error("Error updating visitor count:", error);
  }
}

// Call function on page load
updateVisitorCount();