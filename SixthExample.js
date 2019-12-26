
const JSONStream = require('JSONStream');
const http = require('http');
const fs = require('fs');
const request=  require('request');


const server = http.createServer(function(req,res) {
    const writableStream = fs.createWriteStream('data3.txt');
    request({url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'})
    .pipe(writableStream)
    res.end('ok');
})

server.listen(3000, () =>{
    console.log('server is running');
})