import http from 'http';

var cnt = 0;
function testCreateServer(port) {

    //const server = http.createServer();
    const server = http.createServer((req, res) => {

        if (req.url === '/') {
            cnt++;
            res.write(`Welcome to my server : ${cnt}`);
            res.end();
        }
    });

    server.on('connection', (socket) => {
        console.log("New connection");
    })

    server.listen(port);
    console.log(`Listening on port ${port} ...`);
}

export default testCreateServer
