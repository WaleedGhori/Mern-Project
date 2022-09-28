const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

const port = process.env.PORT;

const User = require('./model/userSchema')

// Midleware



app.get("/", (req, res) => {
  res.send(`
    <h1>This is Home</h1>
    <div style = "display: flex; flex-direction: column;">
    <a href = "/" style="text-decoration: none; font-size: 1.5rem; color: black;">Home</a>
    <a href = "/about">About</a>
    <a href = "/contact">Contact</a>
    <a href = "/login">Login</a>
    <a href = "/register">Register</a>
    `);
});

app.get("/contact", (req, res) => {
  res.send(
    `
    <h1>This is Contact</h1>
    <div style = "display: flex; flex-direction: column;">
    <a href = "/">Home</a>
    <a href = "/about">About</a>
    <a href = "/contact" style="text-decoration: none; font-size: 1.5rem; color: black;">Contact</a>
    <a href = "/login">Login</a>
    <a href = "/register">Register</a>
    `
  );
});
app.get("/login", (req, res) => {
  res.cookie('name', 'safdar');
  res.send(
    `
    <h1>This is Login</h1>
    <div style = "display: flex; flex-direction: column;">
    <a href = "/">Home</a>
    <a href = "/about">About</a>
    <a href = "/contact">Contact</a>
    <a href = "/login" style="text-decoration: none; font-size: 1.5rem; color: black;">Login</a>
    <a href = "/register">Register</a>
    `
  );
});
// app.get("/register", (req, res) => {
//   res.send(
//     `
//     <h1>This is Register</h1>
//     <div style = "display: flex; flex-direction: column;">
//     <a href = "/">Home</a>
//     <a href = "/about">About</a>
//     <a href = "/contact">Contact</a>
//     <a href = "/login">Login</a>
//     <a href = "/register" style="text-decoration: none; font-size: 1.5rem; color: black;">Register</a>
//     `
//   );
// });

console.log("subscribes to our chanele");

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
