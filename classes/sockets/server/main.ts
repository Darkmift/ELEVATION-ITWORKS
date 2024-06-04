import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

app.get('/health', (req, res) => {
  res.send('ok');
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('client:setname', (username) => {
    socket.data.username = username;
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

  socket.on('client:message', (msg) => {
    const clientName = socket.data.username || 'Anonymous';
    socket.broadcast.emit('server:message', { clientName, msg });
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
