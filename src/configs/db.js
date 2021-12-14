const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://great:great@cluster0.4ran9.mongodb.net/upgrad_backend"
  );
};
