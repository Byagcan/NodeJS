var http = require("http");

var server = http.createServer((request, response) => {
  //   console.log("Request method", request.method);
  //   console.log("Requesr url", request.url)
  //   console.log("Response status", response.statusCode);

  response.setHeader("Content-Type", "text/plain");
  response.statusCode = 200;
  response.statusMessage = "OK";
  response.write("Hello World");

  response.end();
});
server.listen(3000);

console.log("Server running at http://localhost:3000/");
