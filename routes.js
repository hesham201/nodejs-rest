const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      "<html><head><title>My First Page</title></head><body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body></html>"
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const bodyp = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      bodyp.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(bodyp).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>My First Page</title></head><body><h1>Hello From Node.js Server</h1></body></html>"
  );
  res.end();
};
module.exports = requestHandler;
