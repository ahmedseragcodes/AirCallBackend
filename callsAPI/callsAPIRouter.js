//Imports
const express = require("express");
const calls = require("./callsAPIModel");

//Instance of Router 
const router = express.Router();


//ENDPOINTS

// [GET] All Calls

router.get("/", async (req, res, next)=>{
    calls.getAllCalls()
    .then((allCalls)=>{
        res.status(200).json(allCalls);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

//[GET] Call By Call ID

router.get("/:id", (req, res, next)=>{

    const id = req.params.id;

    calls.getCallById(id)
    .then((uniqueCall)=>{
        res.status(200).json(uniqueCall[0]);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })

})


//[PUT] Updated Call By Call ID

router.put("/:id", (req, res, next)=>{

    const updatedCall = req.body;

    calls.updateCall(updatedCall)
    .then((finalCall)=>{
        res.status(200).json(finalCall);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })

})


//Exports
module.exports = router;