//!
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

var registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('form3Example1cg');
  var yourEmail = getElementVal('form3Example3cg');
  var password = getElementVal('form3Example4cg');
  var confirmPassword = getElementVal('form3Example4cdg');

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    console.error("Invalid password. Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit.");
    displayPasswordError()
    return;
  }

  if (password !== confirmPassword) {
    displayPasswordError("Passwords do not match.");
    return;
  }

  console.log(name, yourEmail, password);
  saveMessage(name, yourEmail, password)
    .then(() => {
      console.log("Registration saved successfully!");
      registerForm.style.display = "none";
      window.location.href = "success.html";
    })
    .catch((error) => {
      console.error("Error saving registration:", error);
    });
}

function saveMessage(name, yourEmail, password) {
  var registerFormRef = firebase.database().ref('register-form');

  var newRegisterFormRef = registerFormRef.push();
  return newRegisterFormRef.set({
    name: name,
    email: yourEmail,
    password: password

  });

  console.log(newRegisterFormRef.set());

}
function getElementVal(id) {
  return document.getElementById(id).value;
}

function displayPasswordError() {
  var passwordError = document.getElementById('password-error');
  passwordError.textContent = "Invalid password. Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit.";
}