const firebaseConfig = {
  apiKey: "AIzaSyBIVsl52lvKStSf7tVSNGoZm9K4eNC20nQ",
  authDomain: "sedc-project1.firebaseapp.com",
  databaseURL: "https://sedc-project1-default-rtdb.firebaseio.com",
  projectId: "sedc-project1",
  storageBucket: "sedc-project1.appspot.com",
  messagingSenderId: "863727888563",
  appId: "1:863727888563:web:c14927aa3d0f37e440e8c6",
  measurementId: "G-B5GP2BYMTZ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Преземете референца до 'register-form' во Firebase Realtime Database
var registerFormRef = firebase.database().ref('register-form');

// pocvit od sumbit formava i funkcijava 
document.getElementById('register-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // ovde gi zemame od pass email i ostanati po val mojt da se racunat i po id ama isto e 
let name = getElementVal('form3Example1cg');
let yourEmail = getElementVal('form3Example3cg');
let password = getElementVal('form3Example4cg');
let confirmPassword = getElementVal('form3Example4cdg');

  // Проверка за валидност на лозинката
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;// regex mi e kopiran  i teksov mi e sekako
  if (!passwordRegex.test(password)) {
    console.error("Invalid password. Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit.");
    displayPasswordError();
    return;
  }

  // dali pass e okej
  if (password !== confirmPassword) {
    displayPasswordError("Passwords do not match.");
    return;
  }

  // e ovde e magijava ovde gi cuvat datava od firebase
  saveMessage(name, yourEmail, password);

  // skrij ja formava ili display="none"
  document.getElementById('register-form').style.display = "none";
// ako e okej togas ne pustat na stranicava success
  window.location.href = "success.html";
}

function saveMessage(name, yourEmail, password) {
  //kreirame nova referenca za da gi zacuvame
  let newRegisterFormRef = registerFormRef.push();
  newRegisterFormRef.set({
    name: name,
    email: yourEmail,
    password: password
  }).then(() => {
    console.log("Registration saved successfully!");
  }).catch((error) => {
    console.error("Error saving registration:", error);
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}

function displayPasswordError(message) {
  let passwordError = document.getElementById('password-error');
  passwordError.textContent = message || "Invalid password. Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit.";
}