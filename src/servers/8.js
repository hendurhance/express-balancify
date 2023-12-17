// server8.js
import { createServer } from "../common.js";

const port = 5773;
const csvFilePath = "data/sample.csv";

createServer(port, csvFilePath);
