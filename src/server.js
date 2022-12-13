import express from "express";

const app = express();
const PORT = 4000;

const middleHome = (req, res, next) => {
  console.log(`Going to ${req.url}`);
  next();
};
const handleHome = (req, res) => {
  return res.end("<h1>Hello</h1>");
};
const handleLogin = (req, res) => {
  return res.send("Login Here");
};

app.get("/", middleHome, handleHome);
app.get("/login", handleLogin);

app.listen(PORT, () => console.log(`Port on ${PORT}`));
