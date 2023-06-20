function toggleAnswer(index) {
    let answer = document.getElementById(`answer-${index}`);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}
// vo ovoj del imame funkcija vo slucaj ako stegnis na prasanjana da izlezit odgovor


var siteDescription = document.getElementById('siteDescription');

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
// ovoj del vikat varijabla edna koja se dvizit po x oskava ili ke udrit ako < 50 ili od leva strana preku classList koja e
// vgradena i imat za add,length i ostanati samo dodaj kako vo C# add,show i posle ko ke se trgnit mausov pak remove show,zoso gore
// e eventov na mousemove

  if (mouseX < 50) {
    siteDescription.classList.add('show');
  } else {
    siteDescription.classList.remove('show');
  }
});


