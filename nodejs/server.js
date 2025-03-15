const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'forumuser',
    password: 'password',
    database: 'forum'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
    db.query('USE forum;', (err) => {
        if (err) {
            throw err;
        }
        console.log('Database selected.');
    });
});

app.use(bodyParser.json());

app.post('/posts', (req, res) => {
    const newPost = req.body;
    const query = 'INSERT INTO posts (username, message, timestamp) VALUES (?, ?, ?)';
    const values = [newPost.username, newPost.message, new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error saving post:', err);
            res.status(500).send({ message: 'Error saving post', error: err });
        } else {
            console.log('Post saved successfully:', newPost);
            res.status(200).send({ message: 'Post saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
    res.setHeader("Access-Control-Allow-Methods", "*"); // Erlaubt alle HTTP-Methoden
    res.setHeader("Access-Control-Allow-Headers", "*"); // Erlaubt das Empfangen von Requests mit Headern, z. B. Content-Type
});