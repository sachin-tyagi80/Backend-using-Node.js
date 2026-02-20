const https = require('https');
const fs = require('fs');

let storedTimes = []; // yaha time store hoga

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

const server = https.createServer(options, (req, res) => {

  if (req.url === "/hit") {
    const currentTime = new Date().toISOString();
    storedTimes.push(currentTime);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Time Stored: " + currentTime);
  }

  else if (req.url === "/print") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(storedTimes, null, 2));
  }

  else {
    res.writeHead(404);
    res.end("Route not found");
  }

});

server.listen(443, () => {
  console.log("HTTPS Server running on https://localhost");
});
