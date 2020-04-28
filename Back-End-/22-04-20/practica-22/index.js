const fs = require("fs");
const express = require("express");

const kodemia = JSON.parse(fs.readFileSync("kodemia.json"));

const server = express();
server.use(express.json());
//---------------------------------------------
server.get("/", (request, response) => {
    response.json({
        message: "My first api is Running",
    });
});

//query parameters
server.get("/koders", (req, res) => {
    const { limit = 10 } = req.query;
    res.json({
        message: "All the koders",
        data: {
            koders: kodemia.koders.slice(0, parseInt(limit)),
        },
    });
});
//---------------------------------------------
server.post("/koders", (request, response) => {
    const { name, generation } = request.body;
    // ----------------------------------------------

    kodemia.koders.push({
        name,
        generation,
    });
    response.json({
        message: "New koder added",
        data: {
            koder: {
                name,
                generation,
            },
        },
    });
});
//-----------------------------------------

server.get("/koders/:index", (request, response) => {
    const { index } = request.params;
    response.json({
        message: "Index Pls",
        data: {
            name: kodemia.koders[index],
        },
    });
});
//----------------------------------------------------

server.get("/mentors", (req, res) => {
    res.json({
        message: "All the mentors",
        data: {
            mentors: kodemia.mentors,
        },
    });
});

server.post("/mentors", (request, response) => {
    const newMentor = {
        name: request.body.name,
        lesson: request.body.lesson,
    };
    kodemia.mentors.push(newMentor);

    response.json({
        message: "New mentor added",
        data: {
            mentor: newMentor,
        },
    });
});

server.listen(8081, () => {
    console.log("Server is running");
});