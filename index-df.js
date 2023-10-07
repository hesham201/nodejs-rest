const http = require("http");
const requestHandler = require("./routes-df");
const server = http.createServer(requestHandler);

console.log("hi");
server.listen(4500);
