require("dotenv").config();

const http = require("http");
const { app } = require("./app");
const { mongoConnect } = require("./src/services/db");

const PORT = process.env.PORT ?? 3050;

const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Server is listening :::${PORT}`);
  });
};

startServer();
