const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://alok:alok@cluster0.tb9r7wa.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database Connected !!!");
});

module.exports = db;
