const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const allowedOrigins = [
    'http://localhost:3000',
    'https://localhost:3000',
    'https://online-offline.apps.pcfone.io',
    'http://online-offline.apps.pcfone.io',
    'online-offline.apps.pcfone.io',
];

let value = "";

app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));


app.get('/super-cool-backend', (req, res) => res.send('Hello World!'));

app.post("/reverse-me", (req, res) => {
    value = req.body.text.split("").reverse().join("");
    res.send("all good")
});

app.get("/reverse-me", (req, res) => {
    res.send(value)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));