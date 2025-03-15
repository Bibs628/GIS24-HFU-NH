async function requestTextWithGET(url) {
    const response = await fetch(url);
    console.log('Response:', response); // vollständiges Response-Objekt
    const text = await response.text();
    console.log('Response-Text:', text); // Text aus dem Response-Body
    document.getElementById('fetch-content').innerText = text; // Text in das div einfügen
}

requestTextWithGET('http://localhost:3000');
console.log('Zwischenzeitlich weiterarbeiten...');  