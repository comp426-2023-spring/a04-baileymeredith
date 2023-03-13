import {rps, rpsls} from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"
import cors from "cors"

const args = minimist(process.argv.slice(2));
// if no port is given, default to port 5000
const port = args.port || 5000

const app = express()

app.use(cors())

// check endpoint that returns 200 OK
app.get('/app/', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => 
    console.log("App ran on port " + port),
);