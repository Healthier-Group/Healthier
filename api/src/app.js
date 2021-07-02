const express = require('express');
const morgan = require('morgan'); 

const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'HEALTHIER-API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

server.use('/', routes);

module.exports = {
    server
};
