const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const contactsRouter = require("./routes/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use(contactsRouter);

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || "5000";
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
