const express = require('express')
const app = express()
const http = require('http').createServer(app)

PORT = process.env.PORT || 3000

http.listen(PORT,()=>
{
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

// Adding Socket

const io = require('socket.io')(http)

io.on('connection', (socket)=>{
    console.log('connected...')
    //receiving message via socket on the server
    socket.on('message',(msg)=>{
        Console.log(msg);
        socket.broadcast.emit('message', msg)
    })
})