// MongoDB Modul in Node.js Code verwenden
const mongodb = require('mongodb');

// MongoDB URL und Client für Zugriff anlegen
const mongoUrl = 'mongodb://127.0.0.1:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(mongoUrl);

async function main() {
  // Mit MongoDB verbinden
  await mongoClient.connect();

  // Auf university Datenbank -> student Collection zugreifen
  const db = mongoClient.db("Form");
  const formCollection = db.collection("post");

  // Datensatz (Student) einfügen
  const newForm = {
    
  };

  await formCollection.insertOne(newBitrag);

  // Datensatz suchen
  const student = await formCollection.findOne({ studentNr: 333333 });
  console.log(form);

  // Verbindung zu MongoDB beenden
  await mongoClient.close();
}

main();

document.getElementById('forumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Get existing posts from localStorage or initialize an empty array

    // Add the new post to the array
    const newPost = { username, message, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts)); // Save the updated posts array to localStorage

    // Send the new post to the server
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    displayPosts(); // Update the displayed posts
    this.reset(); // Reset the form fields
});

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Get existing posts from localStorage or initialize an empty array
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear the existing posts

    // Create and append post elements for each post
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <p><strong>${post.username}</strong> <em>${post.timestamp}</em></p>
        <p>${post.message}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Display posts when the DOM content is loaded
document.addEventListener('DOMContentLoaded', displayPosts);