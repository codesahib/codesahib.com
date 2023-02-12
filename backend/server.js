// Main server code
import express from "express" // Or const express = require('express');
import cors from "cors"
import path from "path"

import udemy_courses from "./routes/udemy_courses.js" // For Udemy courses routes

const __dirname = path.resolve();
const app = express() // Make express app/server

app.set('view engine', 'ejs') // View Engine for dynamic rendering
app.use(cors()) // Middleware - Things used by express
app.use(express.json()) // This is same as BodyParser. It's now included in express. Server can accept JSON in body of request

app.use(express.static(path.join(__dirname,"/frontend/build"))) // Use static frontend

app.use("/api/v1/udemy_courses", udemy_courses) // General procedure for api routes

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

/* [For backend testing only] Allow home page rendering from frontend 
app.get('/',(req,res) => {
  res.send('This is home page')
});

app.use("*", (req,res) => {
  res.status(404).json({error: "[server] Page not found"})
}) // Or app.all('*',(req,res) => {res.status(404).send('Not Found')})
*/
export default app