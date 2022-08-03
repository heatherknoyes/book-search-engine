const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@googlebooksapp.rsfw78w.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
