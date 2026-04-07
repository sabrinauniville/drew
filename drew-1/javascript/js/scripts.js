
// =============================
// 🔥 js/firebase.js
// =============================

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// =============================
// ⚙️ js/app.js
// =============================

let currentUser = null;

function register() {
  const email = emailInput();
  const senha = senhaInput();

  auth.createUserWithEmailAndPassword(email, senha)
    .then(user => {
      db.collection("users").doc(user.user.uid).set({ xp: 0 });
      alert("Conta criada!");
    });
}

function login() {
  auth.signInWithEmailAndPassword(emailInput(), senhaInput())
    .then(user => carregarUsuario(user.user.uid));
}

function resetPassword() {
  auth.sendPasswordResetEmail(emailInput())
    .then(() => alert("Email enviado!"));
}

function carregarUsuario(uid) {
  currentUser = uid;
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  db.collection("users").doc(uid).get().then(doc => {
    document.getElementById("xp").innerText = doc.data().xp;
  });
}

function emailInput() {
  return document.getElementById("email").value;
}

function senhaInput() {
  return document.getElementById("senha").value;
}
