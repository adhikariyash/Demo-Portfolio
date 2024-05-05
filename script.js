let closeNav = document.getElementById('closeNav');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');
let body = document.getElementById('body');
let main = document.getElementById('main');
let project = document.getElementById('project');

openbtn.addEventListener("click", function(){
  openbtn.style.display = "none";
  closebtn.style.display = "block";
  closeNav.style.left = "30vw"; 
  main.style.opacity = "0%";
});

closebtn.addEventListener("click", function(){
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  closeNav.style.left = "100vw";
  main.style.opacity = "100%";
});

// Add event listeners to each navigation link
let navLinks = document.querySelectorAll('#nav li a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closebtn.style.display = "none";
    openbtn.style.display = "block";
    closeNav.style.left = "100vw";
    main.style.opacity = "100%";
  });
});

// Add event listener to each navigation link in the hidden menu
let hiddenNavLinks = document.querySelectorAll('#closeNav li a');
hiddenNavLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closebtn.style.display = "none";
    openbtn.style.display = "block";
    closeNav.style.left = "100vw";
    main.style.opacity = "100%";
  });
});
