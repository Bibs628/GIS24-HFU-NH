const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let posts = [];

app.post('/posts', (req, res) => {
    const newPost = req.body;
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
