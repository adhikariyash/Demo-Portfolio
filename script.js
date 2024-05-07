let closeNav = document.getElementById('closeNav');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');



openbtn.addEventListener("click", function(){
  openbtn.style.display = "block";
  closebtn.style.display = "block";
  closeNav.style.left = "30vw"; 
  overlay.style.display = "block";
});

closebtn.addEventListener("click", function(){
  closebtn.style.display = "block";
  openbtn.style.display = "block";
  closeNav.style.left = "100vw";
  overlay.style.display = "none";
});


// Add event listeners to each navigation link
let navLinks = document.querySelectorAll('#nav li a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closebtn.style.display = "none";
    openbtn.style.display = "block";
    closeNav.style.left = "100vw";
    overlay.style.display = "none";
  });
});

// Add event listener to each navigation link in the hidden menu
let hiddenNavLinks = document.querySelectorAll('#closeNav li a');
hiddenNavLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closebtn.style.display = "none";
    openbtn.style.display = "block";
    closeNav.style.left = "100vw";
    overlay.style.display = "none";
  });
});
overlay.addEventListener("click", function(){
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  closeNav.style.left = "100vw";
  overlay.style.display = "none";
});
