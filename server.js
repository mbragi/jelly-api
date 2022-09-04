require("dotenv").config();

const http = require("http");
const { app } = require("./app");

const PORT = process.env.PORT ?? 3050;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening :::${PORT}`);
});
