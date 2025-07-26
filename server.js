const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static(__dirname + '/public'));

// Root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
http.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('🔌 New user connected');

    // Handle incoming messages
    socket.on('message', (msg) => {
        console.log('📩 Message received:', msg);
        socket.broadcast.emit('message', msg); // Send to other clients
    });
});
