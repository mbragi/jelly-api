require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log(`database connected @ ${mongoose.connection.host}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`database conntiom failed with ${err}`);
  process.exit(1);
});
const mongo_URL =
  "mongodb+srv://jelly:jelly-api@cluster0.9mzfiqg.mongodb.net/?retryWrites=true&w=majority";

const mongoConnect = async () => {
  await mongoose.connect(`${mongo_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = { mongoConnect };
