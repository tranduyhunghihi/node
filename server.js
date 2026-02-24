const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world \n Hung dep trai vl");
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
