import {rps, rpsls} from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"

const args = minimist(process.argv.slice(2));
// if no port is given, default to port 5000
const port = args.port || 5000

const app = express()
app.listen(port, () => 
    console.log("App ran on port " + port)
);