//-----------------------------------------------



const express = require("express");
const fs = require("fs");

const kodemia = JSON.parse(fs.readFileSync("kodemia.json"));
const server = express();
server.use(express.json()); //middleware

//endpoints: la combinacion de un metodo y una ruta
//metodo: metoodos HTTP -get,post,delete,put patch
//ruta: strings que denotan recursos en nuestro servidor
server.get("/", (request, response) => {
    response.json({
        message: "My first API is running",
    });
});

server.get("/koders", (req, res) => {
    res.json({
        message: "All the koders",
        data: {
            koders: kodemia.koders,
        },
    });
});

server.post("/koders", (request, response) => {
    const newKoder = {
        name: request.body.name,
        generation: request.body.generation,
    };
    kodemia.koders.push(newKoder);
    response.json({
        message: "new koder added",
        data: {
            koder: newKoder,
        },
    });
});

server.get("/mentors", (request, response) => {
    response.json({
        message: "all mentors",
        data: {
            koders: kodemia.mentors,
        },
    });
});

server.post("/mentors", (request, response) => {
    const newMentor = {
        name: request.body.name,
    };
    kodemia.mentors.push(newMentor);
    response.json({
        message: "newMentor added",
        data: {
            mentor: newMentor,
        },
    });
});

server.listen(8082, () => {
    console.log("Server is running");
});