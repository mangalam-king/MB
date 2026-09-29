import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, getDoc, getDocs, doc, query, where, orderBy, serverTimestamp, updateDoc, deleteDoc, runTransaction } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyBg1Yo2uKpKmrr9v8G83jhglA-7RCCx4Eo",authDomain:"mbss-7d65c.firebaseapp.com",projectId:"mbss-7d65c",storageBucket:"mbss-7d65c.firebasestorage.app",messagingSenderId:"241402828421",appId:"1:241402828421:web:8bea6842d0b1192594bbec",measurementId:"G-4D6G6TZ2P2"};
const app=initializeApp(firebaseConfig);let analytics=null;try{analytics=getAnalytics(app)}catch(e){console.warn("Analytics unavailable:",e)}const db=getFirestore(app);
export{db,collection,addDoc,setDoc,getDoc,getDocs,doc,query,where,orderBy,serverTimestamp,updateDoc,deleteDoc,runTransaction,analytics};
