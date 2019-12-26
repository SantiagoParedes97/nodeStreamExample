
const JSONStream = require('JSONStream');
const http = require('http');
const fs = require('fs');
const request=  require('request');


const server = http.createServer(function(req,res) {
    request({url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'}, (err,response,body) =>{
        fs.writeFile('data3.txt',body, ()=> res.end('ok'))
    })
})

server.listen(3000, () =>{
    console.log('server is running');
})