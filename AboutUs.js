function toggleAnswer(index) {
    let answer = document.getElementById(`answer-${index}`);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}
// vo ovoj del imame funkcija vo slucaj ako stegnis na prasanjana da izlezit odgovor


var siteDescription = document.getElementById('siteDescription');

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;

  if (mouseX < 50) {
    siteDescription.classList.add('show');
  } else {
    siteDescription.classList.remove('show');
  }
});


