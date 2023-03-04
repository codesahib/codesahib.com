// Connect the DB and start server from here

import app from "./server.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

import udemyCoursesDAO from "./dao/udemyCoursesDAO.js"

// Include variables from .env
// dotenv.config({path : './config.env'})

const port = process.env.PORT || 8000

// Connecting DB
app.listen( ()=>{
    console.log(`[index] Listening on port ${port}`)
})
// mongoose.connect(process.env.PROJECTS_DB_URI,{ useNewUrlParser: true })
// .then(async (client)=>{
//     console.log("[index] Database Connection Successful");
//     await udemyCoursesDAO.injectDB(client);
    
// })
// .catch((err)=> {
//     console.log("[index] Error Connecting to DB. Error: "+ err)
//     process.exit(1)
// })
