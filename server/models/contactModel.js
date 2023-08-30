const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = Schema({
  name: {
    type: String,
    // required: [true, "Please provide name!"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
