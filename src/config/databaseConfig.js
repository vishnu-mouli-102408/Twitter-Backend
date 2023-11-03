const mongoose = require("mongoose");
const { MONGO_URL } = require("./serverConfig");

const connect = async () => {
  await mongoose.connect(MONGO_URL);
};

module.exports = connect;
