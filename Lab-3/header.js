let http = require("http");
let server = http.createServer((req, res) => {
  res.statusCode = 201;
  console.log(req.headers);
  console.log(req.headers);
  res.write("http server");
  res.end();
});

server.listen(3001, () => {
  console.log("server is running at port 3001");
});
