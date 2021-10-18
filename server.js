const express = require("express");
const server = express();

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    res.json({ message: "API Up"})
})

server.use(cors());
server.use(helmet());
// server.use(api, router);

server.use(req, res, ()=>{
    res.json({
        message: "API Up";
    })
})