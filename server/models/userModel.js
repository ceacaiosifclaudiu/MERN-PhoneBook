const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: String,
  contacts: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
});

const User = model("User", userSchema);

module.exports = User;
