var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("index.html", (err, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url === "/about") {
    fs.readFile("about.html", (err, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url === "/create" && request.method === "POST") {
    fs.appendFile("about.txt", "deneme", (err) => {
      if (err) {
        console.log(err);
      } else {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
      }
    });
  } else if (request.url === "/create") {
    fs.readFile("create.html", (err, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }
});
server.listen(3000);

console.log("Server running at http://localhost:3000/");
