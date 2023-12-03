const Contact = require("../models/contactModel");

const getHome = async (req, res) => {
  res.send("Welcome to my Contacts api!");
};

const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name && !email && !phone) {
      return res.status(400).json({
        error: "At least one of name, email, or phone must have a value.",
      });
    }

    const newContact = req.body;
    const contact = await Contact.create(newContact);

    res.status(201).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ msg: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    if (contacts.length === 0) {
      return res.status(404).json(`No contacts found`);
    }

    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ msg: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name && !email && !phone) {
      return res.status(400).json({
        error: "At least one of name, email, or phone must have a value.",
      });
    }

    const { contactId } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res
        .status(404)
        .json({ error: `No contact found with id ${contactId}` });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ msg: error.message });
  }
};

const getContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const singleContact = await Contact.findById(contactId);

    if (!singleContact) {
      return res.status(404).json(`No contact found with id ${contactId}`);
    }

    res.status(200).json(singleContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ msg: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const singleContact = await Contact.findByIdAndDelete(contactId);

    if (!singleContact) {
      return res.status(404).json(`No contact found with id ${contactId}`);
    }

    res.status(200).json({ msg: "Contact deleted!" });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getHome,
};