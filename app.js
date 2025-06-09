// Replace with your Firebase config (from Step 2)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Ready to build!"); // Test if it works
// BEFORE (placeholder)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // ... other placeholder values
};

// AFTER (real values)
const firebaseConfig = {
  apiKey: "AIzaSyD...", // ← Your actual API key
  authDomain: "task-tracker-123.firebaseapp.com", // ← Your actual domain
  // ... paste all other real values
};
