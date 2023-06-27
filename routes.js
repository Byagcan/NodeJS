var fs = require("fs");
const routeHandler = (request, response) => {
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
    const data = [];
    request.on("data", (chunk) => {
      data.push(chunk);
    });

    request.on("end", () => {
      const body = Buffer.concat(data).toString();
      const parsedBody = body.split("=")[1];

      fs.appendFile("about.txt", parsedBody, (err) => {
        if (err) {
          console.log(err);
        } else {
          response.statusCode = 302;
          response.setHeader("Location", "/");
          response.end();
        }
      });
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
};

module.exports = routeHandler;
