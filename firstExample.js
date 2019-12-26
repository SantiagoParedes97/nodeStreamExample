const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res) {
    fs.read('data3.txt',(err,data) => {
        res.end(data);
    })
})

server.listen(3000, () =>{
    console.log('server is running');
})