//Imports
const knex = require("knex");
const db = require("../dbConfig");

//Modeling

const getAllCalls = () => {

    return db("calls");
}



// Exports 

module.exports = {
    getAllCalls,
}