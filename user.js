document.addEventListener('DOMContentLoaded', function() {
    var loggedInUser = localStorage.getItem('loggedInUser');
          if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      document.getElementById('name').textContent = loggedInUser.name

      document.getElementById('email').textContent = loggedInUser.email
    }
  });

  //za da imame prikaz na email i UserName togas so contentLoaded i zemen od momemntalen status na korisnik,
  // loggedInUser koj vo slucaj ako korisnik e najaven ovaa stranica ke se prikazit ako ne nemozit,
  // i od kako vo var e zemen, togas prikazi go samo ama morat i JSON.parse(loggedInUser)koj e definiran od localStorage
 
  
