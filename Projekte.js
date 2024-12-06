let parentDiv = document.getElementById("projectsjs");

// Funktion zum Mischen eines Arrays
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Funktion zum Erstellen der Projekt-HTML-Elemente
function createProjectElements(projects) {
    projects.forEach(project => {
        let projectDiv = document.createElement("div");
        projectDiv.className = "Projekte";
        projectDiv.innerHTML = `
            <a href="${project.link}">
                <img src="${project.image}" alt="${project.alt}" width="80%" height="80%">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </a>`;
        parentDiv.appendChild(projectDiv);
    });
}

// Überprüfen, ob ein gespeichertes Array im localStorage vorhanden ist
let storedProjects = localStorage.getItem('shuffledProjects');

if (storedProjects) {
    // Verwenden des gespeicherten Arrays
    createProjectElements(JSON.parse(storedProjects));
} else {
    // Projektdaten laden und mischen
    fetch("./JSON/Projekte.json")
        .then(response => response.json())
        .then(data => {
            const shuffledData = shuffle(data);
            // Gemischtes Array im localStorage speichern
            localStorage.setItem('shuffledProjects', JSON.stringify(shuffledData));
            createProjectElements(shuffledData);
        })
        .catch(error => console.error('Error loading projects:', error));
}

/*
    let parentDiv = document.getElementById("projectsjs");

let data = fetch("./JSON/Projekte.json")
    .then((response) => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let projectDiv = document.createElement("div");
            projectDiv.className = "Projekte";
            projectDiv.innerHTML = `<a href="${data[i].link}">
            <img src="${data[i].image}" alt="${data[i].alt}" width="80%" height="80%">
            <h3>${data[i].name}</h3>
            <p>
            ${data[i].description}
            </p></a>`;
            parentDiv.appendChild(projectDiv);
        }
    }).catch();
    */