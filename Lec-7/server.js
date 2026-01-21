let http = require("http");
let server = http.createServer((req, res) => {
  let header = req.headers.authorization;
  let secret = "this is my secret key";
  if (!header) {
    res.statusCode = 400;
    res.write("Kindly enter Secret key first");
    res.end();
    return;
  }
  if (header == secret) {
    res.statusCode = 201;
    res.write("Welcome User");
    res.end();
    return;
  } else {
    res.statusCode = 401;
    res.write("Unauthorized User");
    res.end();
    return;
  }
  //     res.statusCode = 204;
  //    console.log(req.headers);
  //    console.log(res.headers);
  //    res.write("http server");
  //    res.end();
});
server.listen(3001, () => {
  console.log("Server is running at port 3001");
});
