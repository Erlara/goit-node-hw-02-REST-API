const mongoose = require("mongoose");

const app = require("./app");

//const { DB_HOST, PORT = 3000 } = process.env;

const DB_HOST =
  "mongodb+srv://Larisa:vt5wHHg9zg1Ee1rN@cluster0.elzyxvf.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    proccess.exit(1);
  });
