const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require("dotenv").config();

app.use(express.json());

// Register (token generate)
app.get('/register', (req, res) => {
  let { username } = req.query;

  let token = jwt.sign(
    { name: username },   // ❗ no password
    process.env.SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Middleware (authenticate)
const authenticate = (req, res, next) => {
  let authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ msg: "Token missing" });
  }

  let token = authHeader.split(" ")[1]; // Bearer token

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

// Protected route
app.get('/order', authenticate, (req, res) => {
  res.json({
    message: "Valid user",
    user: req.user
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
}); 