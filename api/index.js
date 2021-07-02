const {server} = require('./src/app.js');

server.listen(3001, () => {
    console.log('Healthier API is now listening on port 3001');
});