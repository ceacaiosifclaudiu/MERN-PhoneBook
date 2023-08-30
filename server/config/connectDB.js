const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://admin-cld:admin-cld@cluster0.q0fvxo6.mongodb.net/PhoneBook"
    ); //For testing I let it here

    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
