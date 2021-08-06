// Connect the DB and start server

import app from "./server.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import udemyCoursesDAO from "./dao/udemyCoursesDAO.js"

// Include variables from .env
dotenv.config()

const port = process.env.PORT || 8000

// Connecting DB
mongoose.connect(process.env.PROJECTS_DB_URI,{ useNewUrlParser: true })
.then(async (client)=>{
    console.log("[index] Database Connection Successful");
    await udemyCoursesDAO.injectDB(client);
    app.listen(port, ()=>{
        console.log(`[index] Listening on port ${port}`)
    })
})
.catch((err)=> {
    console.log("[index] Error Connecting to DB. Error: "+ err)
    process.exit(1)
})
