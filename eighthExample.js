
const JSONStream = require('JSONStream');
const http = require('http');
const fs = require('fs');
const request=  require('request');
const stream = require('stream')

const writableStream = new stream.WritableStream({
    write: function(chunk,encoding,next){
        console.log(chunk.toString())
        next();
    }
})

const server = http.createServer(function(req,res) {
    request({url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'})
    .pipe (JSONStream.parse('results.*.name'))
    .pipe(writableStream);
    res.end('ok')
})

server.listen(3000, () =>{
    console.log('server is running');
})