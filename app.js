var http = require("http");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Home Page</h1>");
    response.end();
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>About Page</h1>");
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<h1>Page Not Found</h1>");
    response.end();
  }
});
server.listen(3000);

console.log("Server running at http://localhost:3000/");
