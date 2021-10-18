//Imports
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const callsRouter = require("./callsAPI/callsAPIRouter");
//Instance Of The Server 
const server = express();
//global Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api/calls", callsRouter);


//Endpoint to Test Server Up
server.get("/", (req, res, next)=>{
    res.send("<h2>Success</h2>");
})

//Error Handling
server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
})

module.exports = server;