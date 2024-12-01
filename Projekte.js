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