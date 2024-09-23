const http = require(`http`);

const port = 1111;
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/plain");
  response.end("Welcome world");
});

server.listen(port, () => {
  console.log(`Server start running: http://localhost:${port}`);
});
