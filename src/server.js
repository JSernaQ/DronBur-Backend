const express = require('express')
const { connecDB } = require('./config/db')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            user: '/api/user',
            post: '/api/post'
        }

        this.dbConnect();
        this.middlewares();
        this.routes();
        // this.sockets();
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
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}!`)
        })
    }

};

module.exports = { Server }