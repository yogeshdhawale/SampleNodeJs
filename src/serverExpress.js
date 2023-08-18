import express from 'express';

function testCreateServerExpress(port) {

    const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        console.log("Serving request : GET /");
        res.send("Hello World -**!!");
    });

    app.get('/api/API1', (req, res) => {
        console.log("Serving request : GET /api/API-1");
        res.send("Hello World from API-1 !!");
    });


    app.get('/api/user/:id', (req, res) => {
        res.send("you have provided id: " + req.params.id);
    });


    app.listen(port, () => {
        console.log(`Listening on port ${port} ...`)
    });
}

export default testCreateServerExpress
