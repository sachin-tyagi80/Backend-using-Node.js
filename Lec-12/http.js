let http = require('http');
let fs = require('fs');
let path = __dirname + '/a.txt';

let server = http.createServer((req, res) => {
  let data = new Date() + " " + req.method + "\n";

  fs.appendFile(path, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("append successful");
    }
  });

  res.write("append");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});


