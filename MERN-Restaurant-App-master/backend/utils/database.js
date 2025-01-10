const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://durgesh85Bill:Durgesh85Bill@bill-x-85.yzihix8.mongodb.net/?retryWrites=true&w=majority&appName=Bill-X-85')
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
