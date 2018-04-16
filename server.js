const http = require('http');
const app = require('./lib/app');
require('./lib/mongodb');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON', server.address().port); //eslint-disable-line
});