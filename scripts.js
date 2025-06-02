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
// document.getElementById("AStA").innerHTML = Projekte.name + ", " + Projekte.image + ", " + Projekte.description + ", " + Projekte.link + ", " + Projekte.alt + ", " + Projekte.alt_img;


let Username = {
  name: "Username",
  Date: "Date",
  time: "Time",
  Headers: "Headers",
  Content: "Content",
}

  // JSON data
  const jsonData = {
    name: "Username",
    date: "Datum",
    time: "Uhrzeit",
    header: "Überschrift",
    message: "Nachricht"
  };

    console.log(jsonData);

  // Function to display JSON data
  /*function displayJSON(data) {
    console.log(document.getElementById("jsonContent"));
    const jsonContent = document.getElementById("#jsonContent");
    const content = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Datum:</strong> ${data.date}</p>
      <p><strong>Uhrzeit:</strong> ${data.time}</p>
      <p><strong>Überschrift:</strong> ${data.header}</p>
      <p><strong>Nachricht:</strong> ${data.message}</p>
    `;
    jsonContent.innerHTML = content;
  }*/

  // Display the JSON data
  //displayJSON(jsonData);

document.addEventListener("DOMContentLoaded", function() {
  // Funktion zum Erstellen der Projekt-HTML-Elemente
  function createProjectElements(projects) {
    const projectsContainer = document.getElementById("projectsjs");
    projects.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "Projekte";
      projectDiv.innerHTML = `
        <a href="${project.link}">
          <img src="${project.image}" alt="${project.alt}" width="80%" height="80%">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </a>
      `;
      projectsContainer.appendChild(projectDiv);
    });
  }

  // Projektdaten laden und anzeigen
  fetch('Projekte.json')
    .then(response => response.json())
    .then(data => {
      createProjectElements(data);
    })
    .catch(error => console.error('Error loading projects:', error));
});