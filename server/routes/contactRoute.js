const express = require("express");
const {
  updateContact,
  getContact,
  getContacts,
  deleteContact,
  createContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/contacts").get(getContacts);
router.route("/contact").post(createContact);
router
  .route("/contact/:contactId")
  .patch(updateContact)
  .get(getContact)
  .delete(deleteContact);

module.exports = router;
