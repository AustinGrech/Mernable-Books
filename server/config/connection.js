const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://austingrech:austingrech1@cluster0.6kmy6bx.mongodb.net/googlebooks"
);

module.exports = mongoose.connection;
