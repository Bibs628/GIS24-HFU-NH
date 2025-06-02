const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const mongoUrl = 'mongodb://127.0.0.1:27017';
const mongoClient = new mongodb.MongoClient(mongoUrl);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(bodyParser.json());

app.post('/posts', async (req, res) => {
    console.log('Request received:', req.body);
    try {
        await mongoClient.connect();
        const db = mongoClient.db("Form");
        const formCollection = db.collection("post");

        const newPost = req.body;
        await formCollection.insertOne(newPost);

        res.status(200).send({ message: 'Post saved successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error saving post', error });
    } finally {
        await mongoClient.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler */
    res.setHeader("Access-Control-Allow-Methods", "*"); // Erlaubt alle HTTP-Methoden */
    res.setHeader("Access-Control-Allow-Headers", "*"); // Erlaubt das Empfangen von Requests mit Headern, z. B. Content-Type */
})




/*response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler */

  /*response.setHeader("Access-Control-Allow-Methods", "*"); // Erlaubt alle HTTP-Methoden */

  /*response.setHeader("Access-Control-Allow-Headers", "*"); // Erlaubt das Empfangen von Requests mit Headern, z. B. Content-Type */