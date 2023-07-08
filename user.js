document.addEventListener('DOMContentLoaded', function() {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      document.getElementById('name').textContent = loggedInUser.name;
      document.getElementById('email').textContent = loggedInUser.email;
    }
  });
 
  
