const mongoose = require('mongoose');

// Creating a Schema - modeling user input
const ContactForm = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    subject: String,
    msg: String

}, { timestamps: true });

// we use mongoose tro make journalModel available as a Model
// this will genereate collection names
// journalModel is an instance of Journal
// we are also telling it to save all our data incoming in journal-seals collection in MongoDB
const ContactFormModel = mongoose.model('contact-forms', ContactForm);

module.exports = ContactFormModel