function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    if (minutes < 10) {
        minutes = "0" + minutes;
      }
      
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("clock").textContent = timeString;
  }
  
   setInterval(updateClock, 1000);
  