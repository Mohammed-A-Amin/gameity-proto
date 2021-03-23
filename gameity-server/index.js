require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Models
const ContactForm = require('./models/contact-form');

const port = process.env.PORT || 8080;
const mongoUri = process.env.URI;
const server = express();

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose.set('useNewUrlParser', true);
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to Mongo.'));
db.once('open', () => {
    console.log('Connection to Mongo Established!');
})

// Endpoints
server.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Gameity express server that is linked to MongoDB is OK.',
    });
    console.log('Server OK');
});

server.post('/create-contact-form', (req, res) => {
    const incomingData = req.body;
    const newContactForm = new ContactForm(incomingData);

    newContactForm.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error Occured. Could process your contact form. : /'
            });
        };

        res.status(200).send({
            message: 'Your messaged was successfully sent! Thank you for contacting us.',
            document: doc
        });
    });
});

// Listening on Port 8080
server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
}) 