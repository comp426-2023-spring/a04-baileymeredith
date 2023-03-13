import {rps, rpsls} from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"
import cors from "cors"

const args = minimist(process.argv.slice(2));
// if no port is given, default to port 5000
const port = args.port || 5000

const app = express()

// use cors HTTP headers
app.use(cors())

// check endpoint that returns 200 OK
app.get('/app/', (req, res) => {
    res.sendStatus(200)
});

// rps endpoint returns {"player": "(rock|paper|scissors)""}
app.get('/app/rps/', (req, res) => {
    res.status(200).send(JSON.stringify(rps()))
});

// rpsls endpoint returns {"player": "(rock|paper|scissors|spock|lizard)"}
app.get('/app/rpsls/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()))
});

app.listen(port)