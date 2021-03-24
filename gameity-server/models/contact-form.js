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

// we use mongoose tro make ContactFormModule available as a Model
// this will genereate collection names
// ContactFormModule is an instance of ContactForm
// we are also telling it to save all our data incoming in contact-forms collection in MongoDB
const ContactFormModel = mongoose.model('contact-forms', ContactForm);

module.exports = ContactFormModel