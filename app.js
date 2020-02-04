const http = require('http');
const fs = require('fs');
const express = require('express')
const path = require("path")
const app = express()

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + "curricolo.html" , function(err, data){
        response.end(data);
    });
    




});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});