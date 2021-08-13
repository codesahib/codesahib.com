// Main server code
import express from "express" // Or const express = require('express');
import cors from "cors"
import udemy_courses from "./api/udemy_courses.route.js" // For routes
import path from "path"

const app = express() // Make express app/server

// app.use(express.static('./public')) // To get static resources

app.use(cors()) // Middleware - Things used by express
app.use(express.json()) // This is same as BodyParser. It's now included in express. Server can accept JSON in body of request

const __dirname = path.resolve();
// Step 1:
app.use(express.static(path.join(__dirname,"/frontend/build")))
app.use("/api/v1/udemy_courses", udemy_courses) // General procedure for api routes
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

// Allow home page rendering from frontend
// app.get('/',(req,res) => {
//     res.send('This is home page')
// });


// app.use("*", (req,res) => res.status(404).json({error: "[server] Page not found"})) // Or app.all('*',(req,res) => {res.status(404).send('Not Found')})

export default app