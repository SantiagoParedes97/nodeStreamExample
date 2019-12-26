
const writableStream = new stream.WritableStream({
    write: function(chunk,encoding,next){
        console.log(chunk.toString())
        next();
    }
})