var http = require("http");

function requestListener(request, response) {
  //   response.writeHead(200, { "Content-Type": "text/plain" });
  //   response.write("Hello World");
  response.end();
}

var server = http.createServer(requestListener);
server.listen(3000);

console.log("Server running at http://localhost:3000/");
