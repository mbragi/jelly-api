require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connection.on("open", () => {
  console.log(`database connected @ ${mongoose.connection.host}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`database connection failed with ${err}`);
  process.exit(1);
});

const mongoConnect = async () => {
  await mongoose.connect(`${process.env.mongo_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = { mongoConnect };
