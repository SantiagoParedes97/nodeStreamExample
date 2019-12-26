
const JSONStream = require('JSONStream');
const http = require('http');
const fs = require('fs');
const request=  require('request');

const transformStream = new require('stream').Transform({
    transform: function transformer(chunk,encoding,callback){
        callback(false,chunk+'/n');
    }
})


const server = http.createServer(function(req,res) {
    const writableStream = fs.createWriteStream('data2.txt');
    request({url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'})
    .pipe(JSONStream.parse('results.*.name'))
    .pipe(transformStream)
    .pipe(writableStream);
    
    res.end('ok')
})

server.listen(3000, () =>{
    console.log('server is running');
})