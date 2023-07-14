document.addEventListener('DOMContentLoaded', function() { // ako DOmContentLoaded go zafakat celiot proekt ama za da sum postojano najaven
  // trebit localstorgate i to mi e zapisano podolu
  if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyBIVsl52lvKStSf7tVSNGoZm9K4eNC20nQ",
      authDomain: "sedc-project1.firebaseapp.com",
      databaseURL: "https://sedc-project1-default-rtdb.firebaseio.com",
      projectId: "sedc-project1",
      storageBucket: "sedc-project1.appspot.com",
      messagingSenderId: "863727888563",
      appId: "1:863727888563:web:c14927aa3d0f37e440e8c6",
      measurementId: "G-B5GP2BYMTZ"
    };
    firebase.initializeApp(config);
  }
// !
  //Ovde ako e najaven sledvit celava logika so batonive i site raboti ponatamu
  function checkLoginStatus() {
    var loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);

      // prikazi gi potrebnive elementi na najaven
 document.getElementById('registerBtn').style.display = 'none';
 document.getElementById('loginBtn').style.display = 'none';
 document.getElementById('loggedInUser').textContent = loggedInUser.name;
 document.getElementById('loggedInUser').style.display = 'inline-block';
 document.getElementById('logoutBtn').style.display = 'inline-block';

      // skrij gi elementite
      document.getElementById('registerBtn').style.display = 'none';
      document.getElementById('loginBtn').style.display = 'none';
    } else {
      // Ovde gi kazvime elementite na nenajaven ako e 
   document.getElementById('registerBtn').style.display = 'inline-block';
   document.getElementById('loginBtn').style.display = 'inline-block';
   document.getElementById('loggedInUser').textContent = '';
   document.getElementById('loggedInUser').style.display = 'none';
   document.getElementById('logoutBtn').style.display = 'none';

      // ovde se prokazvat formive za register i  login
      document.getElementById('registerBtn').style.display = 'block';
      document.getElementById('loginBtn').style.display = 'block';
    }
  }

  // da se proverit najavava
  checkLoginStatus();

  document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var userData = {// ovde gi zemame od JSON od api nelo elementite email i pass ako se tocni od baza toas se logirame
      email: email,
      password: password
    };

    var jsonData = JSON.stringify(userData);// go stringovame

    fetch("https://sedc-project1-default-rtdb.firebaseio.com/register-form.json")// ova e linkot
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response its not okay.');// namerno e throw new Error neka imat malu i od ova 
        }
      })
      .then(data => {
        var users = data;

        // proverka za najava vo slucajov so e null posle so for prajme i ako e ednakvo togas okej
        var loggedInUser = null;
        for (var userId in users) {
          if (users[userId].email === email && users[userId].password === password) {
            loggedInUser = users[userId];
            break;
          }
        }

        // ako e taka ovde ni e celata logika za korisnikot da e najaven
   if (loggedInUser) {
          console.log('User is ' + loggedInUser.name + ' successfuly logged in.');
// zacuvuvame deka sme najaveni vo local 
          localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

          document.getElementById('loginModal').classList.remove('show');
          checkLoginStatus();
        } else {
          alert("Error");
        }
      })
      .catch(error => {
        console.error('Error now:', error);
      });
  });

  document.getElementById('logoutBtn').addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
      console.log("User successfully loged out.");
      localStorage.removeItem('loggedInUser');

      checkLoginStatus();
    }).catch(function(error) {
      console.error("Logout error:", error);
    });
  });

  // ovde se brisat buttons = "registerBtn" и "loginBtn"
  var registerBtns = document.getElementsByClassName('registerBtn');
  for (var i = 0; i < registerBtns.length; i++) {
    registerBtns[i].remove();
  }

  var loginBtns = document.getElementsByClassName('loginBtn');
  for (var i = 0; i < loginBtns.length; i++) {
    loginBtns[i].remove();
  }
});