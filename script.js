let closeNav = document.getElementById('closeNav');
let openbtn = document.getElementById('open');
let closebtn = document.getElementById('close');
let body = document.getElementById('body');


openbtn.addEventListener("click", function(){
  openbtn.style.display = "none";
  closebtn.style.display = "block";
  closeNav.style.left = "30vw"; 
  body.style.position ="fixed"
  // Adjust the left position as needed
});

closebtn.addEventListener("click", function(){
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  closeNav.style.left = "100vw";
  body.style.position = "relative" // Adjust the left position to hide the navigation menu
});