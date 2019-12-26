
const JSONStream = require('JSONStream');
const http = require('http');
const fs = require('fs');
const stream = require('stream');
const request=  require('request');

const transformStream = new stream.Transform({
    transform: function transformer(chunk,encoding,callback){
        callback(false,chunk+'/n');
    }
})


const server = http.createServer(function(req,res) {
    const writableStream = fs.createWriteStream('data2.txt');
    stream.pipeline(
    request({url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'}),
    JSONStream.parse('results.*.name'),
    transformStream,
    writableStream,
    (err) =>{
        if(err){
            console.log('Pipeline failed',err)
        }
        else {
            console.log('Pipeline succeeded.')
        }
    } )
    res.end('ok')
})

server.listen(3002, () =>{
    console.log('server is running');
})