//Imports
const knex = require("knex");
const db = require("../dbConfig");

//Modeling

//[GET] All Calls

const getAllCalls = () => {

    return db("calls");
};

//[GET] Call By Call ID

const getCallById = async (idOfCallToGet) => {

    const call = await db("calls").where("id", idOfCallToGet);

    return call;
    
};

//[PUT] Update Call By Call ID

const updateCall = async (updatedCall) => {

    const updatedCallId = updatedCall.id;

    const result = db("calls").where("id", updatedCallId).insert(updatedCall);

    return result;

}

// Exports 

module.exports = {
    getAllCalls, getCallById, updateCall
}