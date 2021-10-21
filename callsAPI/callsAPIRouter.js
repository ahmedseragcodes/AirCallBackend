//Imports
const express = require("express");
const calls = require("./callsAPIModel");

//Instance of Router 
const router = express.Router();


//ENDPOINTS

// [GET] All Calls

router.get("/", async(req, res, next)=>{
    calls.getAllCalls()
    .then((allCalls)=>{
        res.status(200).json(allCalls);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

//Exports
module.exports = router;