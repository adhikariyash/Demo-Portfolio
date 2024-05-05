let closeNav = document.getElementById('closeNav');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');
let main = document.getElementById('main');
let overlay = document.getElementById('overlay');

openbtn.addEventListener("click", function(){
  openbtn.style.display = "none";
  closebtn.style.display = "block";
  closeNav.style.left = "30vw"; 
  overlay.style.display = "block"; // Show the dark overlay
});

closebtn.addEventListener("click", function(){
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  closeNav.style.left = "100vw";
  overlay.style.display = "none"; // Hide the dark overlay
});

// Add event listeners to each navigation link
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closebtn.style.display = "none";
    openbtn.style.display = "block";
    closeNav.style.left = "-30vw";
    overlay.style.display = "none"; // Hide the dark overlay
  });
});
