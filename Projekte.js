let parentDiv = document.getElementById("projectsjs");

// Funktion zum Mischen eines Arrays
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fetch("./JSON/Projekte.json")
    .then((response) => response.json())
    .then(data => {
        // Projekte mischen
        const shuffledData = shuffle(data);

        // HTML-Elemente für Projekte erstellen
        for (let i = 0; i < shuffledData.length; i++) {
            let projectDiv = document.createElement("div");
            projectDiv.className = "Projekte";
            projectDiv.innerHTML = `<a href="${shuffledData[i].link}">
            <img src="${shuffledData[i].image}" alt="${shuffledData[i].alt}" width="80%" height="80%">
            <h3>${shuffledData[i].name}</h3>
            <p>
            ${shuffledData[i].description}
            </p></a>`;
            parentDiv.appendChild(projectDiv);
        }
    })
    .catch(error => console.error('Error loading projects:', error));

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