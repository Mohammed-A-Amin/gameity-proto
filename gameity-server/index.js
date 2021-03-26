require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Models
const ContactForm = require('./models/contact-form');
const UserInfo = require('./models/user-info');

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

// Contact Page
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


// Stats Page
server.get('/get-all-users', (req, res) => {
    UserInfo.find({}, (err, users) =>{
        if(err) {
            res.status(500).send({
                status: 500,
                msg: 'No Users Available.'
            });
        }
        res.status(200).send(users)
    })
    
});
// allows user to create their own user data
server.post('/add-one-user', (req, res) => {
    const incomingData = req.body;
    const newUserInfo = new UserInfo(incomingData);

    newUserInfo.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error Occured. Could not create User. Sorry.'
            });
        };

        res.status(200).send({
            message: 'User was successfully created.',
            document: doc
        });
    });
});
// server.post('/add-many-users', (req, res) => {
//     // after making the request in postman, you will call data in body 
//     const incomingData = req.body.users;
//     // calling journal model with insertMany property
//     UserInfo.insertMany( incomingData, (err, doc) =>{
//         if(err) {
//             res.status(500).send({
//                 status:500,
//                 msg: 'Could not add the multiple users.'
//             });
//         }
//         res.status(200).send({
//             status:200,
//             msg: 'Successfully created multiple users at once!',
//             document: doc
//         });
//     }); 
// });

// Listening on Port 8080
server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
}) 