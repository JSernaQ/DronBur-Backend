const express = require('express')
const { connecDB } = require('./config/db')
const cors = require('cors');
const { Server: SocketServer } = require('socket.io');
const { createServer } = require('http');
const setupChatSockets = require('./sockets/chat.sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            user: '/api/user',
            post: '/api/post',
            chat: '/api/chat',
            message: '/api/message',
        }

        this.server = createServer(this.app); 
        this.io = new SocketServer(this.server, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
            },
        });

        this.dbConnect();
        this.middlewares();
        this.routes();
        this.sockets();
    }

    async dbConnect() {
        await connecDB();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.json({ message: '🚀 Servidor funcionando correctamente' });
        });
        this.app.use(this.paths.user, require('./routes/user.routes'));
        this.app.use(this.paths.post, require('./routes/post/post.routes'));
        this.app.use(this.paths.chat, require('./routes/chat/chat.routes'));
        this.app.use(this.paths.message, require('./routes/chat/message.routes'));
    }

    sockets() {
        setupChatSockets(this.io);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}!`)
        })
    }

};

module.exports = { Server }