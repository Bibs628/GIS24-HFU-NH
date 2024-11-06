let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}

/*
// Create an Object
const Projekte = {
  name: "Projekte",
  description: "Meine Projekte",
  Image: "images/Projekte.jpg",
  link: "Projekte.html",
  alt: "Projekte"
  alt img: "Projekte"
}

// Display Properties
document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;
*/

// Create an Object
const Projekte = {
  name: "AStA",
  description: "AStA",
  Image: "images/logo_asta.png",
  link: "ASTA.html",
  alt: "Allgemeiner Studierendenausschuss",
  alt_img: "Logo AStA"
}
// Display Properties
document.getElementById("AStA").innerHTML = Projekte.name + ", " + Projekte.image + ", " + Projekte.description + ", " + Projekte.link + ", " + Projekte.alt + ", " + Projekte.alt_img;


