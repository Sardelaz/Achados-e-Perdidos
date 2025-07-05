// firebaseconfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// SUA CONFIGURAÇÃO DO FIREBASE AQUI
// ESTE É O OBJETO QUE VOCÊ DEVE COPIAR DO SEU CONSOLE DO FIREBASE (Project settings > Your apps > </>)
const firebaseConfig = {
  apiKey: "AIzaSyDi9TOmtemtJL9kfBWenuEzhKaEycIimCU",
  authDomain: "achados-e-perdidos-cc07d.firebaseapp.com",
  projectId: "achados-e-perdidos-cc07d",
  messagingSenderId: "517180645366",
  appId: "1:517180645366:web:5e704577d1ff034d98f1d7",
  measurementId: "G-KNNX326KRC"
};

// Initialize Firebase and export the instances
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Nota: Não é necessário 'export default' aqui, já que estamos exportando nomeado.